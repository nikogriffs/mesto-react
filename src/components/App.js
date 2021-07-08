import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import EditPopup from './EditPopup.js';
import AddPopup from './AddPopup.js';
import AvatarPopup from './AvatarPopup.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(false);
  }

  return (
    <>
      <Header />

      <Main 
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick} 
      onEditAvatar={handleEditAvatarClick} 
      onCardClick={handleCardClick} />

      <Footer />
      <EditPopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
      <AddPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} />
      <AvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

    </>
  );
}

export default App;
