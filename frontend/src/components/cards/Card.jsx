import React from 'react';
import './card.css'

function Card(props){
    return(
        <div className="showcards">
        <div className="showcard">
            <img src={props.imgsrc} alt="Movie_Image" className="card_img"/>
            <div className="card_info">
                <span className="card_category">IMDB: {props.category}</span>
                <h3 className="card_title">{props.title}</h3>           
            </div>
            <div className='overview'>
            <h3>OverView</h3>     
            <p>{props.overview}</p>
            </div>
        </div>
        </div>
    )
}
export default Card;