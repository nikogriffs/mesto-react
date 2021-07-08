import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function AvatarPopup(props) {
    return (
        <PopupWithForm name="avatar" title="Обновить аватар" button="Создать" isOpen={props.isOpen} onClose={props.onClose}>

            <input className="popup__input popup__input_title_avatar"
                id="avatar"
                type="url"
                name="avatar"
                placeholder="Ссылка на аватар"
                autoComplete="off"
                required />

            <span className="popup__error" id="avatar-error" />

        </PopupWithForm>
    )
}

export default AvatarPopup;