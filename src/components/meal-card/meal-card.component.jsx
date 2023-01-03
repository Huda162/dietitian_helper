import './meal-card.css';
import React from 'react';

const Card = props => {
    return(
        <div className='meal-card'>
            {props.children}
        </div>
    )
}

export default Card;