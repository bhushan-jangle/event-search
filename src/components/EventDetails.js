/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable linebreak-style */
import IconButton from '@material-ui/core/IconButton';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import ArrowBackTwoToneIcon from '@material-ui/icons/ArrowBackTwoTone';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import React from 'react';
import {
    Button, Card, Col, Row
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { setEventDetailsShow } from '../redux/EventDetails/EventDetailsAction';
import '../styles/Style.css';

function EventDetails(props) {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="Event-details">
      {console.log('EventDetails reached')}
      {console.log(props)}
      <Row xs={1} md={1} className="g-4">
        {/* {props.Event.map((item) => ( */}
        <Col key={props.EventData.id}>
          <div>
            <Card>
              <Card.Body>
                {/* src="/img.png"/ */}
                <Card.Img className="cardDetailImg" variant="top" src={props.EventData.desc.images[0].url} />
                <Card.Text className="top-space cardTitle" />
                <IconButton>
                  <AccessTimeRoundedIcon color="primary" fontSize="small" />
                </IconButton>
                <span>{props.EventData.desc.dates.start.localTime}</span>

                <IconButton>
                  <EventNoteRoundedIcon color="primary" fontSize="small" />
                </IconButton>
                <span>{props.EventData.desc.dates.start.localDate}</span>
                {props.category === 'home' ? (
                  <Card.Link className="icon-goback" as={NavLink} to="/" onClick={props.setEventDetailsShow}>
                    <IconButton>
                      <ArrowBackTwoToneIcon color="primary" fontSize="small" />
                    </IconButton>
                  </Card.Link>
                )
                  : (
                    <Card.Link className="icon-goback" as={NavLink} to={`/${props.category}`} onClick={props.setEventDetailsShow}>
                      <IconButton>
                        <ArrowBackTwoToneIcon color="primary" fontSize="small" />
                      </IconButton>
                    </Card.Link>
                  )}
                <Card.Text>
                  <Card.Title className="cardTitle">{props.EventData.title}</Card.Title>
                  <IconButton>
                    <LocationOnRoundedIcon color="primary" fontSize="small" />
                  </IconButton>
                  <span>{props.EventData.desc._embedded.venues[0].name}</span>
                  {/* <Card.Link as={NavLink} to={'/Event'} onClick={()=>props.onShow(!props.isShowBool)}>Go Back...</Card.Link> */}
                  <div className="saleCard">
                    <h5>Sale Details </h5>
                    <p>
                      Sale Starts :
                      {props.EventData.desc.sales.public.startDateTime}
                    </p>
                    <p>
                      Sale Ends :
                      {props.EventData.desc.sales.public.endDateTime}
                    </p>
                  </div>
                </Card.Text>
                <Button onClick={() => handleClick(props.EventData.desc.url)} variant="primary" size="lg" block>
                  Book
                </Button>
              </Card.Body>
            </Card>
          </div>
        </Col>
        {/* ))} */}
      </Row>
    </div>
  );
}

const mapStateToProps = (state) => ({
  isShowEventDetails: state.eventDetails.isShowEventDetails
});

const mapDispatchToProps = (dispatch) => ({
  setEventDetailsShow: () => dispatch(setEventDetailsShow())
});

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
