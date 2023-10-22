import {useEffect, useState} from 'react';
import "../index.css";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {

  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

    useEffect(() => {
      Promise.all([api.getUserData(), api.getInitialCards()])
        .then(([{ name, about, avatar }, cards]) => {
          setUserName(name);
          setUserDescription(about);
          setUserAvatar(avatar);
          setCards(cards);
        })
        .catch((err) => console.log(`Ошибка получения данных. ${err}`));
    }, []);

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


        <section className="elements">
        {cards.map((card) => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>





      </main>
    </div>
  );
}

export default Main;
