import React from 'react';

// Styles
import './CardPlaceholder.scss';

const CardPlaceholder = () => {
    return (
        <div className='card-placeholder'>
            <div className='card-placeholder_thumbnail'>
                <div className='card-placeholder_barSecondary' />
            </div>
            <div className='card-placeholder_bar long'>
                <div className='card-placeholder_barSecondary' />
            </div>
            <div className='card-placeholder_bar medium'>
                <div className='card-placeholder_barSecondary' />
            </div>
            <div className='card-placeholder_bar short'>
                <div className='card-placeholder_barSecondary' />
            </div>
            <div className='card-placeholder_bar long'>
                <div className='card-placeholder_barSecondary' />
            </div>
        </div>
    );
}

export default CardPlaceholder;