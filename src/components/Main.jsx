import { useEffect, useState, useContext } from "react";
import "../index.css";
import api from "../utils/api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [cards, setCards] = useState([]);
  const { name, about, avatar, _id } = useContext(CurrentUserContext);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    api
      .getInitialCards()
      .then((cards) => setCards(cards))
      .catch((err) => console.log(`Ошибка добавления карточки. ${err}`));
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(id) {
    api
      .deleteCard(id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== id));
      })
      .catch((err) => console.log(`Ошибка при удалении карточки. ${err}`));
  }

  return (
    <div>
      <main className="main">
        <section className="profile">
          <button
            className="profile__avatar-edit"
            type="button"
            onClick={onEditAvatar}
          >
            <img className="profile__avatar" src={avatar} alt="Аватар" />
          </button>
          <div className="profile__info">
            <div className="profile__top-bar">
              <h1 className="profile__name">{name}</h1>
              <button
                className="profile__edit-button"
                type="button"
                aria-label="Редактирование профиля"
                onClick={onEditProfile}
              />
            </div>
            <p className="profile__description">{about}</p>
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
            <Card
              key={card._id}
              card={card}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

export default Main;
