// import React from 'react'
import "./Home.css"
import Navbar from "../../components/Navbar/Navbar"
import hero_banner from "../../assets/hero_banner.jpg"
import hero_title from "../../assets/hero_title.png"
import play from "../../assets/play_icon.png"
import info from "../../assets/info_icon.png"
import TitleCards from "../../components/TitleCards/TitleCards"
import Footer from "../../components/Footer/Footer"

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} className="banner-img" alt="" />
        <div className="hero-caption">
          <img src={hero_title} className="caption-img" alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dicta accusantium culpa! Culpa, neque quas!</p>
          <div className="hero-butttons">
            <button className="btn"><img src={play} alt="" />Play</button>
            <button className="btn dark-btn"><img src={info} alt="" />More Info</button>
          </div>
          <TitleCards/>
        </div>
      </div>
      <div className="more-cards">
      <TitleCards title={"BlockBuster Movies"} category={"upcoming"}/>
      <TitleCards title={"Onlu on Netflix"} category={"top_rated"}/>
      <TitleCards title={"Upcoming"} category={"upcoming"}/>
      <TitleCards title={"Top picks for you"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
