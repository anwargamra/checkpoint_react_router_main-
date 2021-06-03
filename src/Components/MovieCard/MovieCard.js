import React from "react";
import "./MovieCard.css";

const MovieCard = ({ newCard }) => {
  return (
    <div className="col-2">
      <div className="cover">
        <div className="header">
          <div className="seen">
            <span className="glyphicon glyphicon-eye-open">
              {newCard.rating}/5
            </span>
          </div>
          <div className="type">{newCard.year}</div>
        </div>
        <div className="info">
          <h3>{newCard.title}</h3>
          <p>{newCard.description}</p>
        </div>
        <img src={newCard.poster} alt={newCard.title} />
        {newCard.children}
      </div>
    </div>
  );
};

export default MovieCard;
