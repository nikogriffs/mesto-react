import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function EditProfilePopup(props) {
    return (
        <PopupWithForm name="edit" title="Редактировать профиль" submitBtnText="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>

            <input
                className="popup__input popup__input_title_name"
                id="name"
                type="text"
                name="name"
                placeholder="Имя"
                required
                minLength={2}
                maxLength={40}
                autoComplete="off" />

            <span className="popup__error" id="name-error" />

            <input
                className="popup__input popup__input_title_job"
                id="job"
                type="text"
                name="job"
                placeholder="О себе"
                required
                minLength={2}
                maxLength={200}
                autoComplete="off" />

            <span className="popup__error" id="job-error" />

        </PopupWithForm>
    )
}

export default EditProfilePopup;