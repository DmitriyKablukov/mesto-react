import React from "react";
import "../index.css";

function PopupWithForm({ name, title, isOpen, children, onClose }) {
  return (
    <div>
      <div className={`popup popup_${name} ${isOpen ? "popup_opened" : ""}`}>
        <div className="popup__container">
          <button
            className={`popup__close-button popup__close-button_${name}`}
            type="button"
            onClick={onClose}
          />
          <h2 className="popup__title">{title}</h2>
          <form
            name={name}
            className={`popup__form popup__form_${name}`}
            noValidate=""
          >
            {children}
            <button
              className={`popup__form-button-save popup__form-button-save_${name}`}
              type="submit"
            >
              Сохранить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopupWithForm;
