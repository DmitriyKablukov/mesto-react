import React from "react";
import "../index.css";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);

  api
    .getUserData()
    .then(({ name, about, avatar }) => {
      setUserName(name);
      setUserDescription(about);
      setUserAvatar(avatar);
    })
    .catch((err) => console.log(`Ошибка получения данных. ${err}`));

  api
    .getInitialCards()
    .then((cards) => setCards(cards))
    .catch((err) => console.log(`Ошибка добавления карточки. ${err}`));

  return (
    <div>
      <main className="main">
        <section className="profile">
          <button
            className="profile__avatar-edit"
            type="button"
            onClick={onEditAvatar}
          >
            <img className="profile__avatar" src={userAvatar} alt="Аватар" />
          </button>
          <div className="profile__info">
            <div className="profile__top-bar">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Редактирование профиля"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__description">{userDescription}</p>
          </div>
          <button
            className="profile__add-button"
            type="button"
            aria-label="Добавление новых фото"
            onClick={onAddPlace}
          />
        </section>
        <section className="elements">
          {cards.map((card) => (
            <Card card={card} onCardClick={onCardClick} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Main;
