import React from 'react';

// Components
import CardPlaceholder from './CardPlaceholder';

// Styles
import './Card.scss';

const Card = (props) => {
    if (!props.children) {
        return <CardPlaceholder />;
    }
    return (
        <div className='card'>
            {props.children}
        </div>
    );
}

export default Card;