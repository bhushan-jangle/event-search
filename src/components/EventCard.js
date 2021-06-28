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
import { addFavoriteThings, removeFavoriteThings, setNewsDetailsShow } from '../redux';
import './comp.css';
import NewsDetails from './EventDetails';

function EventCard(props) {
  const [currentNewsDetails, setCurrentNewsDetails] = useState([]);
  const [filterItems, setFilterItems] = useState([]);

  function ShowNewsDetails(lId, lTitle, lDesc) {
    props.setNewsDetailsShow();
    const newsData = {
      id: lId,
      title: lTitle,
      desc: lDesc,
    };
    setCurrentNewsDetails(newsData);
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
      if (props.isShowNewsDetails) {
        props.setNewsDetailsShow();
      }
      console.log('Back Press');
      console.log(props.isShowNewsDetails);
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
      {!props.isShowNewsDetails
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
                                <Card.Link style={{ color: 'black' }} as={NavLink} to={`/${item.id}`} push onClick={() => ShowNewsDetails(item.id, item.name, item)}>
                                  <Card.Img variant="top" src={item.images[0].url} />
                                  <Card.Text className="top-space">
                                    <h5>{item.name.substring(0, 25)}</h5>
                                  </Card.Text>
                                </Card.Link>
                              )
                              : (
                                <Card.Link style={{ color: 'black' }} as={NavLink} to={`/${props.category}/${item.id}`} push onClick={() => ShowNewsDetails(item.id, item.name, item)}>
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
              {/* <Route path = "/news/:id"><NewsDetails onShow={setIsShowNewsDetails} isShowBool ={isShowNewsDetails} newsData={currentNewsDetails}/></Route> */}
              {(props.category === 'favourite-events')
                ? (<Route path="/favourite-events/:id"><NewsDetails category="favourite-events" newsData={currentNewsDetails} /></Route>)
                : (<Route path="/:id"><NewsDetails category="home" newsData={currentNewsDetails} /></Route>)}

              {console.log('routing to newsDetails')}
            </Switch>
          </div>
        )}
    </>
  );
}

const mapStateToProps = (state) => ({
  isShowNewsDetails: state.newsDetails.isShowNewsDetails,
  favourite: state.favourite,
});

const mapDispatchToProps = (dispatch) => ({
  setNewsDetailsShow: () => dispatch(setNewsDetailsShow()),
  addFavoriteThings: (thing) => dispatch(addFavoriteThings(thing)),
  removeFavoriteThings: (thing) => dispatch(removeFavoriteThings(thing)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);
