import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="places__card">
            <img src={props.card.link} alt={props.card.name} className="places__image" onClick={handleClick} />
            <h2 className="places__title">{props.card.name}</h2>
            <div className="places__like">
                <button type="button" className="places__like-button" />
                <span className="places__like-counter">{props.likes.length}</span>
            </div>
            <button type="button" className="places__trash-button" />
        </li>
    )
}

export default Card;