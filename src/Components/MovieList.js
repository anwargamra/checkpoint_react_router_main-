import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import MovieCard from "./MovieCard/MovieCard";
import { Link } from "react-router-dom";

const MovieList = ({ movieslist, searchValue, FilterValue }) => {
  return (
    <>
      
        {movieslist
          .filter(
            (el) =>
              el.title
                .toLowerCase()
                .includes(searchValue.toLowerCase().trim()) &&
              el.rating >= FilterValue ).map((newCard, i) => (
            <div key={i}>
             <Link to={`/${newCard.title}`} className="see-trailer"><MovieCard newCard={newCard} /></Link> 
            </div>
          ))}
    </>
  );
};
export default MovieList;
