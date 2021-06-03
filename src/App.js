import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import "./App.css";
import MovieList from "./Components/MovieList";
import { AddFilm } from "./Components/AddFilm/AddFilm";
import Search from "./Components/Search/Search";
import Filter from "./Components/Filter/Filter";
import Details from "./Components/Details";
import { Route, Switch } from "react-router-dom";

function App() {
  const movieslist = [
    {
        poster: "https://fr.web.img5.acsta.net/pictures/19/06/18/12/11/3956503.jpg",
        title: "Breaking Bad",
        description: "A high school chemistry teacher dying of cancer teams with a former student to secure his family's future by manufacturing and selling crystal meth.",
        rating: 5,
        year: "2020",
        trailer: "https://youtu.be/lrcqbavlbyQ",
       
    },
    {
        poster: "https://fr.web.img4.acsta.net/pictures/19/11/12/09/10/0133181.jpg",
        title: "You",
        description: "A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
        rating: 4,
        year: "2020",
        trailer: "https://youtu.be/srx7fSBwvF4",
   
    },
    {
        poster: "https://fr.web.img6.acsta.net/pictures/19/08/07/10/08/2485376.jpg",
        title: "Naruto Shippuden",
        description: "Naruto Uzumaki returns home after two years of intensive training and teams up with Sakura Haruno to fight an evil organization.",
        rating: 5,
        year: "2020",
        trailer: "https://youtu.be/thh7bVCgDHs",
        
    },
    {
        poster: "https://i.pinimg.com/originals/aa/15/42/aa15422cb191838cd1b4737c7325d1fc.jpg",
        title: "Vikings",
        description: "This gritty drama charts the exploits of Viking hero Ragnar Lothbrok as he extends the Norse reach by challenging an unfit leader who lacks vision..",
        rating: 5,
        year: "2020",
        trailer: "https://youtu.be/9GgxinPwAGc",
     
    },
    {
        poster: "https://fr.web.img5.acsta.net/pictures/19/08/09/14/53/1842996.jpg",
        title: "One Piece",
        description: "One Piece is a manga and anime set in a world of piracy. Spanning several hundred chapters, it a relatively varied universe.",
        rating: 4,
        year: "2020",
        trailer: "https://youtu.be/S8_YwFLCh4U",
        
    },
    {
        poster: "http://img.over-blog-kiwi.com/0/95/30/84/20191024/ob_7e7b43_1571909767-action-dossier-de-presse-na.jpg",
        title: "Narcos",
        description: "The true story of Colombia's infamously violent and powerful drug cartels fuels this gritty gangster drama series.",
        rating: 3,
        year: "2020",
        trailer: "https://youtu.be/xl8zdCY-abw",
  
    },
    {
        poster: "https://i.pinimg.com/originals/e4/00/1e/e4001e0103f9a2270e8634a8cc566065.jpg",
        title: "La Casa de Papel",
        description: "Eight thieves take hostages and lock themselves in the Royal Mint of Spain. Starring:Úrsula Corberó, Álvaro Morte, Itziar Ituño",
        rating: 4,
        year: "2020",
        trailer: "https://youtu.be/hMANIarjT50",       
    },
    {
        poster: "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
        title: "Game of Thrones",
        description: "Nine noble families struggle with each other for control of the fairy land of Westeros, while an ancient enemy awaits .",
        rating: 1,
        year: "2020",
        trailer: "https://youtu.be/KPLWWIOCOOQ",
    },
    
  ];

  const [FilterValue, setFilterValue] = useState(0);
  const handleFilterInputChanges = (rating) => {
    setFilterValue(rating);}
  const [searchValue, setSearchValue] = useState("");
  const handleSearchInputChanges = (title) => {
    setSearchValue(title);
  };

  const [addnewMovie, setaddnewMovie] = useState(movieslist);
  const add = (a) => {
    setaddnewMovie([...addnewMovie, a]);
  };

  return (
      <section className="App">
        <div className="movieList">
          <Switch>
            <Route
              path="/:title"
              render={() => (
                <>
                  <Details movieslist={movieslist} />
                </>
              )}
            />
            <Route
              path="/"
              render={() => (
                <>
                  <nav>
                    <Search
                      handleSearchInputChanges={handleSearchInputChanges}
                    ></Search>
                    <Filter handleFilterInputChanges={handleFilterInputChanges} />
                    <AddFilm add={add}></AddFilm>
                  </nav>
                  <MovieList
                    movieslist={addnewMovie}
                    searchValue={searchValue}
                    FilterValue={FilterValue}
                  />
                </>
              )}
            />
          </Switch>
        </div>
      </section>
  );
}

export default App;
