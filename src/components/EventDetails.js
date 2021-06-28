import React from "react"
import {Nav, Row, Col, Card, Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import "./comp.css"
import { setNewsDetailsShow } from "../redux/NewsDetails/NewsDetailsAction"
import { connect } from "react-redux"
import CardFooter from "./CardFooter"
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';

function EventDetails(props){

    const handleClick = (url) =>{
        window.open(url,'_blank');
    }

    return(
        <div className ="news-details">
            {console.log("NewsDetails reached")}
            {console.log(props)}
            <Row xs={1} md={1} className="g-4">
                    {/* {props.news.map((item) => ( */}
                    <Col key={props.newsData.id}>
                        <div >
                            <Card>
                            <Card.Body>
                                    {/* src="/img.png"/ */}
                                    <Card.Img className="cardDetailImg"  variant="top"  src={props.newsData.desc.images[0].url}/>
                                    <Card.Text className="top-space cardTitle">
                                    </Card.Text>
                                        <IconButton>
                                            <AccessTimeRoundedIcon  color="primary" fontSize="small"/>
                                        </IconButton>
                                            <span>{props.newsData.desc.dates.start.localTime}</span>
                                        
                                        <IconButton>
                                                <EventNoteRoundedIcon  color="primary" fontSize="small"/>
                                        </IconButton>
                                            <span>{props.newsData.desc.dates.start.localDate}</span>
                                        {props.category == "home" ? 
                                            <Card.Link className="icon-goback" as={NavLink} to={'/'} onClick={props.setNewsDetailsShow} >
                                                <IconButton>
                                                    <ArrowBackTwoToneIcon  color="primary" fontSize="small"/>
                                                </IconButton>
                                            </Card.Link>    
                                            : <Card.Link className="icon-goback"  as={NavLink} to={'/'+props.category+''} onClick={props.setNewsDetailsShow} >
                                                <IconButton>
                                                    <ArrowBackTwoToneIcon  color="primary" fontSize="small"/>
                                                </IconButton>
                                            </Card.Link>                                                          
                                        }
                                    <Card.Text>
                                            <Card.Title className="cardTitle">{props.newsData.title}</Card.Title>
                                            <IconButton>
                                                <LocationOnRoundedIcon  color="primary" fontSize="small"/>
                                            </IconButton>
                                                <span>{props.newsData.desc._embedded.venues[0].name}</span>
                                        {/* <Card.Link as={NavLink} to={'/news'} onClick={()=>props.onShow(!props.isShowBool)}>Go Back...</Card.Link> */}
                                       <div className="saleCard">
                                           <h5>Sale Details </h5>
                                           <p>Sale Starts : {props.newsData.desc.sales.public.startDateTime}</p>
                                           <p>Sale Ends : {props.newsData.desc.sales.public.endDateTime}</p>
                                       </div>
                                    </Card.Text> 
                                    <Button onClick={()=>handleClick(props.newsData.desc.url)} variant="primary" size="lg" block>
                                        Book
                                    </Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                {/* ))} */}
                </Row>
        </div>
    )
}

const mapStateToProps = (state) =>{
    return{
        isShowNewsDetails : state.newsDetails.isShowNewsDetails
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        setNewsDetailsShow: ()=> dispatch( setNewsDetailsShow())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EventDetails)