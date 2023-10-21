function Card({ card, onCardClick }) {
  return (
    <article key={card._id} className="element">
      <button
        className="element__delete-button"
        type="button"
        aria-label="Удаление карточки"
      />
      <img
        onClick={() => onCardClick({ link: card.link, name: card.name })}
        src={card.link}
        alt={card.name}
        className="element__image"
      />
      <div className="element__bottom-bar">
        <h2 className="element__place-name">{card.name}</h2>
        <div className="element__like">
          <button
            className="element__like-button"
            type="button"
            aria-label="Отметка мне нравится"
          />
          <p className="element__like-counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  );
}

export default Card;
