import React from "react"
import {Card} from "react-bootstrap"
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';

function CardFooter(){
    return(
        <Card.Footer>
        <div>
            <div className="btn-like">
                {/* <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />}
                    name="checkedH" />}
                /> */}
                <Checkbox icon={<FavoriteBorder />} 
                            checkedIcon={<Favorite />}
                    name="checkedH" />

                <IconButton aria-label="delete" >
                    <CommentIcon variant="contained" color="primary" fontSize="small"/>
                </IconButton>

                <IconButton aria-label="delete" >
                    <ShareIcon variant="contained" color="primary" fontSize="small"/>
                </IconButton>

                <IconButton aria-label="delete" >
                    <MoreVertIcon variant="contained" color="primary" fontSize="small"/>
                </IconButton>
                    {/* <CardMenu/> */}
            </div>
        </div>
        <Card.Text>
            <small className="text-muted">posted 3 mins ago</small>
        </Card.Text>
        </Card.Footer>
    )
}

export default CardFooter