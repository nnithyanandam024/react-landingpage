import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import DecryptedText from './DecryptedText'
import BannerImage from '../../public/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi'

function disableScroll() {
  document.body.style.overflow = 'hidden';
}

disableScroll();

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="home-banner-container">
       
        <div className="home-image-container">
        <img src={BannerImage} alt=""/>
      </div>
        <div className="home-text-section">
        <DecryptedText text="Welcome to Zeus" />
          {/* <h1 className="primary-heading">Welcome to Zeus</h1> */}
          <p className="primary-text">"Unbox the Magic of Anime!<br></br> 
From iconic classics to rare treasures, bring your heroes home. <br></br>
Collect, display, and relive your favorite moments!"  </p>
<button className="secondary-button">
  Explore More <FiArrowRight/>
</button>

        </div>     
     
    </div>
    </div>
  )
}

export default Home
