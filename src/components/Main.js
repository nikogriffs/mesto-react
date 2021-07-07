import React from 'react';

function Main() {
    return (
        <main>
            <section className="profile">
                <div className="profile__card">
                    <button type="button" className="profile__avatar-button" />
                    <img src="#" alt="Фотография профиля" className="profile__avatar" />
                    <div className="profile__info">
                        <div className="profile__edit">
                            <h1 className="profile__name" />
                            <button type="button" className="profile__edit-button" />
                        </div>
                        <p className="profile__job" />
                    </div>
                </div>
                <button type="button" className="profile__add-button" />
            </section>

            <section className="places">
                <ul className="places__list">
                </ul>
            </section>
        </main>
    )
}

export default Main;