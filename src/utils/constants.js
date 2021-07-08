export const places = document.querySelector('.places__list');
// Находим находим элементы модальных окон форм
export const popupEdit = document.querySelector('.popup-edit');
export const popupAdd = document.querySelector('.popup-add');
export const popupCard = document.querySelector('.popup-card');
export const popupDelete = document.querySelector('.popup-delete');
export const popupAvatar = document.querySelector('.popup-avatar');

// Находим кнопки форм
export const profileName = document.querySelector('.profile__name');
export const profileJob = document.querySelector('.profile__job');
export const profileAvatar = document.querySelector('.profile__avatar');

export const editButton = document.querySelector('.profile__edit-button');
export const addButton = document.querySelector('.profile__add-button');
export const delButton = document.querySelector('.places__trash-button');
export const avatarButton = document.querySelector('.profile__avatar-button');

// Находим формы
export const formEditElement = popupEdit.querySelector('.popup__form');
export const formAddElement = popupAdd.querySelector('.popup__form');
export const formAvatarElement = popupAvatar.querySelector('.popup__form');

// Находим поля форм
export const nameInput = formEditElement.querySelector('.popup__input_title_name');
export const jobInput = formEditElement.querySelector('.popup__input_title_job');
export const placeInput = formAddElement.querySelector('.popup__input_title_place');
export const linkInput = formAddElement.querySelector('.popup__input_title_link');
export const avatarInput = formAvatarElement.querySelector('.popup__input_title_avatar');

// Конфиг валидации
export const configValidation = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  buttonSelector: '.popup__save-button',
  disabledButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_title_error',
  errorClass: 'popup__error_visible'
}

export const escButton = 'Escape';
