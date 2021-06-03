import React from "react";
import "./Filter.css";
import ReactStars from "react-rating-stars-component";


const Filter = ({ handleFilterInputChanges}) => {
  return (
  <div style = {{display:"flex", justifyContent: "space-around", alignItems:"center"}}>
<div style = {{display:"flex"}}>

<ReactStars
count={5}
onChange={(newrating)=>handleFilterInputChanges(newrating)}
size={24}
activeColor="#ffd700"
/>
</div>
</div>
)
}


export default Filter;
