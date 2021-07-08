import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import EditPopup from './EditPopup.js';
import AddPopup from './AddPopup.js';
import AvatarPopup from './AvatarPopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} />
      <Footer />
      <EditPopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <AddPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <AvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />

      {/*

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
      <template id="card-template" /> */}

    </>
  );
}

export default App;
