import React from 'react';

function Card({card, onCardClick}) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="places__card">
            <img src={card.link} alt={card.name} className="places__image" onClick={handleClick} />
            <h2 className="places__title">{card.name}</h2>
            <div className="places__like">
                <button type="button" className="places__like-button" />
                <span className="places__like-counter">{card.likes.length}</span>
            </div>
            <button type="button" className="places__trash-button" />
        </li>
    )
}

export default Card;