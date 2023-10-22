import { useState } from "react";
import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  //const [children, setChildren] = useState();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [buttonText, setButtonText] = useState("");
  const [selectedCard, setSelectedCard] = useState({});

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard({});
    //setSelectedCard({ ...selectedCard, isOpen: false });//-----------------------------???????
  }

  function handleCardClick(data) {
    setSelectedCard(data);
    //setSelectedCard({ isOpen: true, link: event.target.src, name: event.target.alt });//------------???
  }

  function onEditProfile() {
    setName("info");
    setTitle("Редактировать профиль");
    setButtonText("Сохранить");
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  function onAddPlace() {
    setName("add");
    setTitle("Новое место");
    setButtonText("Создать");
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }

  function onEditAvatar() {
    setName("avatar");
    setTitle("Обновить аватар");
    setButtonText("Сохранить");
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  /*
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
    setButtonText("Сохранить");
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  */
/*
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
    setButtonText("Создать");
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
*/
/*
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
    setButtonText("Сохранить");
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
*/
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
          buttonText={buttonText}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
        >
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
        </PopupWithForm>

        <PopupWithForm
          name={name}
          title={title}
          buttonText={buttonText}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
        >
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
        </PopupWithForm>

        <PopupWithForm
          name={name}
          title={title}
          buttonText={buttonText}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
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
        </PopupWithForm>

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
