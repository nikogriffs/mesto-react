import React from 'react';
// import './App.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

function App() {
  return (
    <div>
      <Header />
      <Main />
      <Footer />

      <div className="popup popup-edit">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form" name="profile-edit" noValidate>
            <fieldset className="popup__fieldset">
              <input className="popup__input popup__input_title_name" id="name" type="text" name="name" placeholder="Имя" required minLength={2} maxLength={40} autoComplete="off" />
              <span className="popup__error" id="name-error" />
              <input className="popup__input popup__input_title_job" id="job" type="text" name="job" placeholder="О себе" required minLength={2} maxLength={200} autoComplete="off" />
              <span className="popup__error" id="job-error" />
              <button type="submit" className="popup__save-button">Сохранить</button>
            </fieldset>
          </form>
          <button type="button" className="popup__close-button" />
        </div>
      </div>

      <div className="popup popup-add">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form className="popup__form" name="place-add" noValidate>
            <fieldset className="popup__fieldset">
              <input className="popup__input popup__input_title_place" id="place" type="text" name="place" placeholder="Название" required minLength={2} maxLength={30} autoComplete="off" />
              <span className="popup__error" id="place-error" />
              <input className="popup__input popup__input_title_link" id="link" type="url" name="link" placeholder="Ссылка на картинку" autoComplete="off" required />
              <span className="popup__error" id="link-error" />
              <button type="submit" className="popup__save-button popup__save-button_disabled">Создать</button>
            </fieldset>
          </form>
          <button type="button" className="popup__close-button" />
        </div>
      </div>

      <div className="popup popup-avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form className="popup__form" name="place-avatar" noValidate>
            <fieldset className="popup__fieldset">
              <input className="popup__input popup__input_title_avatar" id="avatar" type="url" name="avatar" placeholder="Ссылка на аватар" autoComplete="off" required />
              <span className="popup__error" id="avatar-error" />
              <button type="submit" className="popup__save-button popup__save-button_disabled">Создать</button>
            </fieldset>
          </form>
          <button type="button" className="popup__close-button" />
        </div>
      </div>

      <div className="popup popup-card">
        <div className="popup__container popup__container_card">
          <button type="button" className="popup__close-button" />
          <figure className="popup__figure">
            <img src="#" alt="#" className="popup__image" />
            <figcaption className="popup__caption" />
          </figure>
        </div>
      </div>

      <div className="popup popup-delete">
        <div className="popup__container">
          <h2 className="popup__title popup__title_window-delete">Вы уверены?</h2>
          <form className="popup__form" name="place-delete">
            <fieldset className="popup__fieldset">
              <button type="submit" className="popup__save-button">Да</button>
            </fieldset>
          </form>
          <button type="button" className="popup__close-button" />
        </div>
      </div>
      <template id="card-template" />
    </div>
  );
}

export default App;
