import React,{useState, useEffect} from "react"
import {Nav, Row, Col, Card, Table, Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import "./comp.css"
import {Switch, Route} from "react-router-dom"
import NewsDetails from "./EventDetails"
import SlideShow from "./SlideShow"
import Notification from "./Notification"
import { connect } from "react-redux"
import { setNewsDetailsShow } from "../redux/NewsDetails/NewsDetailsAction"
import { addNewsData, getNewsData } from "../redux"
import CardFooter from "./CardFooter"

function EventCard(props){
    // const[isShowNewsDetails, setIsShowNewsDetails] = useState(false);
    const[id, setId] = useState('')
    const[title, setTitle] = useState('')
    let[filterNewsDetails, setFilterNewsDetails] = useState(props.news)
    let[desc, setDesc] = useState('')
    let[bodyClassName, setBodyClassName] = useState('body-style')
    const[currentNewsDetails, setCurrentNewsDetails] = useState([]);

    
    function ShowNewsDetails(lId, lTitle, lDesc){
        // setIsShowNewsDetails(!isShowNewsDetails);
        props.setNewsDetailsShow();
        const newsData = {
            id:lId,
            title:lTitle,
            desc:lDesc
        }
        setCurrentNewsDetails(newsData)
        // props.addNewsData(newsData);
        console.log("read more clic")
    }

    //filter according to category
    console.log("category", props.category)
    if(props.category !== "home")
    {
        filterNewsDetails = props.news.filter((item)=>(item.category==props.category))
    }

    useEffect(()=>{
        if(props.notification){
            setBodyClassName('small-left-body')
            console.log('body-style')
        }
        else{
            setBodyClassName('body-style')
            console.log('body-style')
        }
    },[props.notification])
    
    useEffect(() => {
        window.onpopstate = e => {
            if(props.isShowNewsDetails)
            {
                props.setNewsDetailsShow();
            }
          console.log("Back Press")
          console.log(props.isShowNewsDetails)
        };
      });
    
    return(
        <>
        {props.notification ?
         <div className="notification-body">
            {<Notification/>}
        </div> : !props.isShowNewsDetails ? 
            ( <div className ='body-style'>
                <SlideShow/>
                <Row xs={1} md={4} className="g-4">
                    {filterNewsDetails.slice(0).reverse().map((item) => (
                       
                    <Col key={item.id}>
                        <div className="card-style">
                            <Card>
                                <Card.Text className="btn-center">
                                        <button type="button" className="btn btn-warning btn-circle btn-xl"><i className="fa fa-times"></i>
                                    </button>
                                        <Button variant="outline-primary" className="btn-right" size="sm">Follow</Button>{' '}  
                                        
                                </Card.Text> 
                            <Card.Body>
                                {/* <Card.Title>{item.title.substring(0,70)}</Card.Title> */}
                                <h5>{props.category =="home" ? 
                                    <Card.Link style={{color:"black"}} as={NavLink} to={'/' + item.id} push={true} onClick={()=>ShowNewsDetails(item.id, item.title, item.desc)} >{item.title.substring(0,70)}</Card.Link> :
                                    <Card.Link style={{color:"black"}} as={NavLink} to={'/'+props.category+'/' + item.id} push={true} onClick={()=>ShowNewsDetails(item.id, item.title, item.desc)}>{item.title.substring(0,70)}</Card.Link>
                                }</h5>
                                <Card.Img variant="top" src="/img.png"/>
                            </Card.Body>
                            <CardFooter/>

                            </Card>
                        </div>
                    </Col>
                   ))}
                </Row>
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
        news : state.news,
        notification : state.notification.isShowNotification
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setNewsDetailsShow: ()=> dispatch( setNewsDetailsShow() ),
        getNewsData : ()=> dispatch(getNewsData()),
        addNewsData: (ldata)=> dispatch(addNewsData(ldata))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EventCard)