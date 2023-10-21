import React from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [children, setChildren] = React.useState();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [name, setName] = React.useState();
  const [title, setTitle] = React.useState();
  const [selectedCard, setSelectedCard] = React.useState({});

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
  }

  function handleCardClick(data) {
    setSelectedCard(data);
  }

  function onEditProfile() {
    setChildren(
      <div className="popup__form-input">
        <input
          name="name"
          id="name"
          className="popup__input popup__input_data_name"
          required=""
          type="text"
          placeholder="Имя"
          minLength={2}
          maxLength={40}
        />
        <span className="popup__error" id="name-error" />
        <input
          name="description"
          id="description"
          className="popup__input popup__input_data_description"
          required=""
          type="text"
          placeholder="Описание"
          minLength={2}
          maxLength={200}
        />
        <span className="popup__error" id="description-error" />
      </div>
    );
    setName("info");
    setTitle("Редактировать профиль");
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function onAddPlace() {
    setChildren(
      <div className="popup__form-input">
        <input
          name="name"
          id="place"
          className="popup__input popup__input_data_place"
          required=""
          type="text"
          placeholder="Название"
          minLength={2}
          maxLength={30}
        />
        <span className="popup__error" id="place-error" />
        <input
          name="link"
          id="link-image"
          className="popup__input popup__input_data_link"
          required=""
          type="url"
          placeholder="Ссылка на картинку"
        />
        <span className="popup__error" id="link-image-error" />
      </div>
    );
    setName("add");
    setTitle("Новое место");
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function onEditAvatar() {
    setChildren(
      <div className="popup__form-input">
        <input
          name="link"
          id="link-avatar"
          className="popup__input popup__input_avatar_link"
          required=""
          type="url"
          placeholder="Ссылка на аватар"
        />
        <span className="popup__error" id="link-avatar-error" />
      </div>
    );
    setName("avatar");
    setTitle("Обновить аватар");
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }

  return (
    <>
      <div className="page">
        <Header />
        <Main
          onEditProfile={onEditProfile}
          onAddPlace={onAddPlace}
          onEditAvatar={onEditAvatar}
          onCardClick={handleCardClick}
        />
        <Footer />
        <PopupWithForm
          name={name}
          title={title}
          children={children}
          isOpen={isEditProfilePopupOpen || isAddPlacePopupOpen || isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        />
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
      <div>
        <div className="popup popup_delete">
          <div className="popup__container">
            <button
              className="popup__close-button popup__close-button_delete"
              type="button"
            />
            <h2 className="popup__title popup__delete-title">Вы уверены?</h2>
            <form
              name="delete"
              className="popup__form popup__form_delete"
              noValidate=""
            >
              <button
                className="popup__button-delete popup__form-button-save"
                type="submit"
              >
                Да
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
