import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPopup(props) {
    return (
        <PopupWithForm name="add" title="Новое место" button="Создать" isOpen={props.isOpen} onClose={props.onClose}>

            <input
                className="popup__input popup__input_title_place"
                id="place"
                type="text"
                name="place"
                placeholder="Название"
                required
                minLength={2}
                maxLength={30}
                autoComplete="off" />

            <span className="popup__error" id="place-error" />

            <input
                className="popup__input popup__input_title_link"
                id="link"
                type="url"
                name="link"
                placeholder="Ссылка на картинку"
                autoComplete="off"
                required />

            <span className="popup__error" id="link-error" />

        </PopupWithForm>
    )
}

export default AddPopup;