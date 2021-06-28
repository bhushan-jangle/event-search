import React,{useState, useEffect} from "react"
import {Nav, Row, Col, Card, Table, Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import "./comp.css"
import {Switch, Route} from "react-router-dom"
import NewsDetails from "./EventDetails"
import Notification from "./Notification"
import { connect } from "react-redux"
import { setNewsDetailsShow } from "../redux/NewsDetails/NewsDetailsAction"
import { addFavoriteThings, addNewsData, fetchUser, getNewsData, removeFavoriteThings } from "../redux"
import CardFooter from "./CardFooter"
import LocationOnIcon from '@material-ui/icons/LocationOn';
import DateRangeIcon from '@material-ui/icons/DateRange';
import IconButton from '@material-ui/core/IconButton';
import axios from "axios"
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';

function EventCard(props){
    // const[isShowNewsDetails, setIsShowNewsDetails] = useState(false);
    const[id, setId] = useState('')
    const[title, setTitle] = useState('')
    let[filterNewsDetails, setFilterNewsDetails] = useState(props.eventData)
    let[desc, setDesc] = useState('')
    const[currentNewsDetails, setCurrentNewsDetails] = useState([]);
    const[Events, setEvents] = useState({});
    const[data, setData] = useState();
    const[loaded, setLoaded] = useState(true);
    const[isFavoutite, setIsFavoutite] = useState(false);
    let[filterItems, setFilterItems] = useState([]);
    
    function ShowNewsDetails(lId, lTitle, lDesc){
        props.setNewsDetailsShow();
        const newsData = {
            id:lId,
            title:lTitle,
            desc:lDesc
        }
        setCurrentNewsDetails(newsData)
    }

    const handleFavourite = (item) =>{
        if(props.favourite.includes(item)){
            console.log("removing")
            props.removeFavoriteThings(item)
        }
        else{
            console.log("adding")
            props.addFavoriteThings(item)
        }
        console.log("Fav clicked", isFavoutite, filterItems)
    }

    useEffect(() => {
        window.onpopstate = e => {
            if(props.isShowNewsDetails)
            {
                props.setNewsDetailsShow();
            }
          console.log("Back Press")
          console.log(props.isShowNewsDetails)
        };
        if(props.category == "favourite-events")
        {
            setFilterItems(props.favourite)
        }
        else{
            setFilterItems(props.eventData)
        }
        
      });

    //   setTimeout(()=>{
    //     setData(props.eventData)
    //     setFilterNewsDetails(props.eventData)
    //     setLoaded(true)
    // },[1500])

    return(
        <>
        {console.log("return")}
        {console.log(filterItems)}
        {!props.isShowNewsDetails ? 
            ( <div className ='body-style'>
                <div>
            <Row xs={1} md={4} className="g-4">
               
            {filterItems.map((item, key)=>
                (
                    <div key ={item.id}>
                        {/* <p>{item.name}</p> */}
                        <Col key={item.id}>
                            <div className="card-style">
                                <Card>
                                <Card.Body>
                                {props.category =="home" ? 
                                    <Card.Link style={{color:"black"}} as={NavLink} to={'/' + item.id} push={true} onClick={()=>ShowNewsDetails(item.id, item.name, item)} >
                                        <Card.Img variant="top" src={item.images[0].url}/>
                                        <Card.Text className="top-space">
                                        <h5>{item.name.substring(0,25)}</h5>
                                        </Card.Text>
                                        </Card.Link> :
                                    <Card.Link style={{color:"black"}} as={NavLink} to={'/'+props.category+'/' + item.id} push={true} onClick={()=>ShowNewsDetails(item.id, item.name, item)}>
                                        <Card.Img variant="top" src={item.images[0].url}/>
                                        <Card.Text className="top-space">
                                        <h5>{item.name.substring(0,25)}</h5>
                                        </Card.Text>
                                    </Card.Link>
                                }
                                    <Card.Text >
                                        <div>
                                            <IconButton>
                                                <LocationOnRoundedIcon  color="primary" fontSize="small"/>
                                            </IconButton>
                                                <span>{item._embedded.venues[0].name.substring(0,25)}</span>
                                                </div>
                                                <div>
                                            <IconButton>
                                                    <EventNoteRoundedIcon  color="primary" fontSize="small"/>
                                            </IconButton>
                                                <span>{item.dates.start.localDate}</span>
                                                </div>
                                                <div>
                                            <Checkbox id={item.id}  onClick={()=>handleFavourite(item)} className="btn-like" icon={<FavoriteBorder />} 
                                                        checkedIcon={<Favorite />}
                                                name="checkedH" 
                                            />
                                        </div>
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                            </div>
                        </Col>
                    </div>
                )
            )}
            </Row>
        </div>

            </div>) :   
            (
                <div>
                    <Switch>
                        {/* <Route path = "/news/:id"><NewsDetails onShow={setIsShowNewsDetails} isShowBool ={isShowNewsDetails} newsData={currentNewsDetails}/></Route> */}
                        {(props.category === "favourite-events") ?
                            (<Route path = '/favourite-events/:id'><NewsDetails category="favourite-events" newsData={currentNewsDetails}/></Route>)
                        :   (<Route path = '/:id'><NewsDetails category="home" newsData={currentNewsDetails}/></Route>)
                        }
                        
                        {console.log("routing to newsDetails")}
                    </Switch>
                </div>  
            )
        }
            
            
        </>
    )
}

const mapStateToProps = (state) =>{
    return{
        isShowNewsDetails : state.newsDetails.isShowNewsDetails,
        notification : state.notification.isShowNotification,
        users: state.users,
        favourite: state.favourite
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setNewsDetailsShow: ()=> dispatch( setNewsDetailsShow() ),
        fetchUser : (user)=> dispatch(fetchUser(user)),
        addFavoriteThings : (thing) =>dispatch(addFavoriteThings(thing)),
        removeFavoriteThings : (thing)=>dispatch(removeFavoriteThings(thing))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EventCard)