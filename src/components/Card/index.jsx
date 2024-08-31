/* eslint-disable react/prop-types */
import "./card.css";

export default function Card({ name, id, image, origin }) {
  return (
    <article aria-label={id} className="card-container">
      <div className="card-container--image">
        <img src={image} alt={name} />
      </div>
      <div className="card-container--content">
        <h2>{name}</h2>
        <small>{origin.name}</small>
      </div>
    </article>
  );
}
