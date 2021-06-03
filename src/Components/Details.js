import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Details = ({ movieslist }) => {
  const { title } = useParams();
  const [Title, setTitle] = useState("");
  useEffect(() => {
    const newMovie = movieslist.find((movie) => movie.title === title);
    setTitle(newMovie.title);
  }, []);

  const [description, setDescription] = useState("");
  useEffect(() => {
    const newMovie = movieslist.find((movie) => movie.title === title);
    setDescription(newMovie.description);
  }, []);
  const [trailer, settrailer] = useState("");
  useEffect(() => {
    const newMovie = movieslist.find((movie) => movie.title === title);
    settrailer(newMovie.trailer);
  }, []);

  return (
    <div>
      <br />
      <Link to="/" className="back-btn">
        <img
          src="./images/white-back-icon-18.jpg"
          id="back-icon"
          alt="back-logo"
        />
        Back to My WatchList
      </Link>
      <br />
      <br />
      <br />
      <div className="cardflex">
        <div className="carddescription">
          <h1 style={{ color: "white" }}>{title}</h1>
          <br />
          <h5 style={{ color: "white" }}>{description}</h5>
          <br />
        </div>
        <iframe
          width="560"
          height="315"
          src={trailer}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Details;
