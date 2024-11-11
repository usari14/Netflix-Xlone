// import React from 'react'
import { useRef, useState } from "react"
import "./TitleCards.css"
import "../../assets/cards/Cards_data"
// import cards_data from "../../assets/cards/Cards_data"
import { useEffect } from "react"
import { Link } from "react-router-dom"



const TitleCards = ({title, category}) => {

  const [apiData, setApiData] = useState([])
  const cardsref = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTRmYTQxZTZmM2E1ZGZlMTVjNjAzY2U2YWE5N2M5MyIsIm5iZiI6MTczMTA4MDMwMy4zMDI4ODk4LCJzdWIiOiI2NzJlMmUzY2JlNzZiMDY0NGIzZTBhMzYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.m2KFUVJ7mucXieaYgmvDpVrhow9NC602v6-4WCQkj9E'
    }
  };
  

  const handleWheel = (event)=> {
    event.preventDefault();
    cardsref.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
  

    cardsref.current.addEventListener('wheel', handleWheel)
  },[])
  return (
    <div className="titlecards">
      <h2>{title?title:"Popular on netflix"}</h2>
      <div className="card-list" ref={cardsref}>
        {
          apiData.map((card, index) => {
            return (
              <Link to={`/player/${card.id}`} className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
              </Link>
            );
          })
        }
      </div>
    </div>
  )
}

export default TitleCards
