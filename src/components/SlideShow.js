import React from "react"
import {Carousel} from "react-bootstrap"
import "./comp.css"

function SlideShow(){

    return(
        <Carousel>
            <Carousel.Item interval={1000}>
                <img
                className="d-block w-100"
                src="/img.png"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default SlideShow