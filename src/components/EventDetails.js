import React from "react"
import {Nav, Row, Col, Card, Button} from "react-bootstrap"
import {NavLink} from "react-router-dom"
import "./comp.css"
import { setNewsDetailsShow } from "../redux/NewsDetails/NewsDetailsAction"
import { connect } from "react-redux"
import CardFooter from "./CardFooter"

function EventDetails(props){

    return(
        <div className ="news-details">
            {console.log("NewsDetails reached")}
            <Row xs={1} md={1} className="g-4">
                    {/* {props.news.map((item) => ( */}
                    <Col key={props.newsData.id}>
                        <div className="news-card">
                            <Card>
                            <Card.Text className="btn-center">
                                        <button type="button" className="btn btn-warning btn-circle btn-xl"><i className="fa fa-times"></i>
                                    </button>
                                        <Button variant="outline-primary" className="btn-right" size="sm">Follow</Button>{' '}  
                                        
                                </Card.Text> 
                           
                            <Card.Body>
                                <Card.Title>{props.newsData.title}</Card.Title>
                                <Card.Img variant="top" src="/img.png"/>
                                <Card.Text className="top-space">
                                {props.newsData.desc}
                                </Card.Text>
                                <Card.Text>
                                    {/* <Card.Link as={NavLink} to={'/news'} onClick={()=>props.onShow(!props.isShowBool)}>Go Back...</Card.Link> */}
                                    {props.category == "home" ? 
                                        <Card.Link as={NavLink} to={'/'} onClick={props.setNewsDetailsShow} >Go Back...</Card.Link>    
                                        : <Card.Link as={NavLink} to={'/'+props.category+''} onClick={props.setNewsDetailsShow} >Go Back...</Card.Link>                                                          
                                    }
                                </Card.Text>
                            </Card.Body>
                            <CardFooter/>
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