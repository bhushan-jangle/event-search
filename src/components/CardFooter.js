import React from "react"
import {Card} from "react-bootstrap"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import IconButton from '@material-ui/core/IconButton';
import LocationOnRoundedIcon from '@material-ui/icons/LocationOnRounded';
import EventNoteRoundedIcon from '@material-ui/icons/EventNoteRounded';

function CardFooter(props){
    return(
        <Card.Text >
            <div>
                <IconButton>
                    <LocationOnRoundedIcon  color="primary" fontSize="small"/>
                </IconButton>
                    <span>{props.venues}</span>
                    </div>
                    <div>
                <IconButton>
                        <EventNoteRoundedIcon  color="primary" fontSize="small"/>
                </IconButton>
                    <span>{props.date}</span>
                    </div>
                    <div>
                <Checkbox className="btn-like" icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />}
                    name="checkedH" 
                /> Add to like events
            </div>
        </Card.Text>
    )
}

export default CardFooter