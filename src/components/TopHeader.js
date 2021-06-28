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
import AppBar from '@material-ui/core/AppBar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import React, { useEffect, useState } from 'react';
import SearchPage from './SearchPage';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function TopHeader(props) {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const [resultOpen, setResultOpen] = useState(false);
  const [eventListDefault, setEventListDefault] = useState();
  const [eventList, setEventList] = useState();

  const updateInput = async (currentInput) => {
    setResultOpen(true);
    setEventListDefault(props.eventData);
    setEventList(props.eventData);
    const filtered = eventListDefault.filter((country) => country.name.toLowerCase().includes(currentInput.toLowerCase()));
    setInput(currentInput);
    setEventList(filtered);
  };

  useEffect(() => {
    setEventListDefault(props.eventData);
    setEventList(props.eventData);
  }, []);

  console.log(eventList);

  return (
    <>
      {console.log('render')}
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              Event Search
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search by name"
                classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
                inputProps={{ 'aria-label': 'search' }}
                input={input}
                onChange={(e) => updateInput(e.target.value)}
              />
            </div>
          </Toolbar>
          {resultOpen
              ? (
                <SearchPage
                  eventList={eventList}
                  bool={resultOpen}
                  onBoolChange={setResultOpen}
                  onClearInput={setInput}
                />
)
              : null}
        </AppBar>
      </div>
    </>
  );
}
