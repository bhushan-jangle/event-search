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
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NavLink, Route, Switch } from 'react-router-dom';
import { addFavoriteThings, removeFavoriteThings } from '../redux';
import { setEventDetailsShow } from '../redux/EventDetails/EventDetailsAction';
import '../styles/Style.css';
import EventDetails from './EventDetails';

function EventCard(props) {
  const [currentEventDetails, setCurrentEventDetails] = useState([]);
  const [filterItems, setFilterItems] = useState([]);

  function ShowEventDetails(lId, lTitle, lDesc) {
    props.setEventDetailsShow();
    const EventData = {
      id: lId,
      title: lTitle,
      desc: lDesc,
    };
    setCurrentEventDetails(EventData);
  }

  const handleFavourite = (item) => {
    if (props.favourite.includes(item)) {
      props.removeFavoriteThings(item);
    } else {
      props.addFavoriteThings(item);
    }
  };

  useEffect(() => {
    window.onpopstate = (e) => {
      if (props.isShowEventDetails) {
        props.setEventDetailsShow();
      }
      console.log('Back Press');
      console.log(props.isShowEventDetails);
    };
    if (props.category === 'favourite-events') {
      setFilterItems(props.favourite);
    } else {
      setFilterItems(props.eventData);
    }
  });

  return (
    <>
      {console.log('return')}
      {console.log(filterItems)}
      {!props.isShowEventDetails
        ? (
          <div className="body-style">
            <div>
              <Row xs={1} md={4} className="g-4">

                {filterItems.map((item, key) => (
                  <div key={item.id}>
                    {/* <p>{item.name}</p> */}
                    <Col key={item.id}>
                      <div className="card-style">
                        <Card>
                          <Card.Body>
                            {props.category === 'home'
                              ? (
                                <Card.Link style={{ color: 'black' }} as={NavLink} to={`/${item.id}`} push onClick={() => ShowEventDetails(item.id, item.name, item)}>
                                  <Card.Img variant="top" src={item.images[0].url} />
                                  <Card.Text className="top-space">
                                    <h5>{item.name.substring(0, 25)}</h5>
                                  </Card.Text>
                                </Card.Link>
                              )
                              : (
                                <Card.Link style={{ color: 'black' }} as={NavLink} to={`/${props.category}/${item.id}`} push onClick={() => ShowEventDetails(item.id, item.name, item)}>
                                  <Card.Img variant="top" src={item.images[0].url} />
                                  <Card.Text className="top-space">
                                    <h5>{item.name.substring(0, 25)}</h5>
                                  </Card.Text>
                                </Card.Link>
                              )}
                            <Card.Text>
                              <div>
                                <IconButton>
                                  <LocationOnRoundedIcon color="primary" fontSize="small" />
                                </IconButton>
                                <span>{item._embedded.venues[0].name.substring(0, 25)}</span>
                              </div>
                              <div>
                                <IconButton>
                                  <EventNoteRoundedIcon color="primary" fontSize="small" />
                                </IconButton>
                                <span>{item.dates.start.localDate}</span>
                              </div>
                              <div>
                                <Checkbox
                                  id={item.id}
                                  onClick={() => handleFavourite(item)}
                                  className="btn-like"
                                  icon={<FavoriteBorder />}
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
                ))}
              </Row>
            </div>

          </div>
        )
        : (
          <div>
            <Switch>
              {/* <Route path = "/Event/:id"><EventDetails onShow={setIsShowEventDetails} isShowBool ={isShowEventDetails} EventData={currentEventDetails}/></Route> */}
              {(props.category === 'favourite-events')
                ? (<Route path="/favourite-events/:id"><EventDetails category="favourite-events" EventData={currentEventDetails} /></Route>)
                : (<Route path="/:id"><EventDetails category="home" EventData={currentEventDetails} /></Route>)}

              {console.log('routing to EventDetails')}
            </Switch>
          </div>
        )}
    </>
  );
}

const mapStateToProps = (state) => ({
  isShowEventDetails: state.eventDetails.isShowEventDetails,
  favourite: state.favourite,
});

const mapDispatchToProps = (dispatch) => ({
  setEventDetailsShow: () => dispatch(setEventDetailsShow()),
  addFavoriteThings: (thing) => dispatch(addFavoriteThings(thing)),
  removeFavoriteThings: (thing) => dispatch(removeFavoriteThings(thing)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);
