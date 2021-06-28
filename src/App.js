import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom';
import Body from './components/Body';
import './components/comp.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TopHeader from './components/TopHeader';
import { store } from './redux/store';

function App() {
  const [Events, setEvents] = useState([]);
  const APIKEY = process.env.REACT_APP_DISCOVERY_API_KEY;

  useEffect(() => {
    axios.get(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=${APIKEY}`)
      // eslint-disable-next-line no-underscore-dangle
      .then((result) => setEvents(result.data._embedded.events));
  }, []);

  return (
    <>
      <Provider store={store}>
        <Router history={BrowserRouter}>
          <TopHeader eventData={Events} />
          <Header />
          <Body eventData={Events} />
          <Footer />
        </Router>
      </Provider>
    </>
  );
}

export default App;
