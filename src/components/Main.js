import React from 'react';
import api from '../utils/Api.js';
import Card from './Card.js';

function Main(props) {

    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([user, cards]) => {
                setUserName(user.name);
                setUserDescription(user.about);
                setUserAvatar(user.avatar);
                setCards(cards);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <main>
            <section className="profile">
                <div className="profile__card">
                    <button type="button" className="profile__avatar-button" onClick={props.onEditAvatar} />
                    <img src={userAvatar} alt="Фотография профиля" className="profile__avatar" />
                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__name">{userName}</h1>
                            <button type="button" className="profile__edit-button" onClick={props.onEditProfile} />
                        </div>
                        <p className="profile__job">{userDescription}</p>
                    </div>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace} />
            </section>

            <section className="places">
                <ul className="places__list">
                    {cards.map((card) => (
                        <Card
                            card={card}
                            name={card.name}
                            link={card.link}
                            key={card._id}
                            likes={card.likes}
                            onCardClick={props.onCardClick} />
                    ))}
                </ul>
            </section>
        </main>
    )
}

export default Main;