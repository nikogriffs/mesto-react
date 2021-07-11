import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext.js';

function Card({ card, onCardClick }) {
    const currentUser = React.useContext(CurrentUserContext)

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (
        `places__trash-button ${!isOwn && "places__trash-button_hidden"}`
    );

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(like => like._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `...`;

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
            <button type="button" className={cardDeleteButtonClassName} />
        </li>
    )
}

export default Card;

// style={{ display: 'none' }}
// "places__trash-button"