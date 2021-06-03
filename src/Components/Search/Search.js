import React from "react";
import './Search.css'

const Search = ({ handleSearchInputChanges }) => {
  return (
    <div style = {{display:"flex", justifyContent: "space-around", alignItems:"center"}}>
            <h1 style={{color:"red" , fontSize:"80px"}} className="titre"><span style={{color:"white"}}>Anwar</span>Flix</h1>
        <div style = {{display:"flex"}}>
      <form className="search">
        <input
          onChange={(e)=>handleSearchInputChanges(e.target.value)}
          type = "text"
          placeholder='Search Movies'

        />
      </form>
      </div>
      </div>
  );
};

export default Search;
