import React from 'react'
import './index.css'
import { IoIosSearch } from "react-icons/io";
import { VscAccount } from "react-icons/vsc";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GiWrappedSweet } from "react-icons/gi";
import breads from "./Breads.json";
import sweet from './sweet.json'

const App = () => {
  return (
   <>
<nav className="navbar">
        {/* Left: Logo */}
        
        <div className="navbar-logo">
        <span><GiWrappedSweet  className='icon-1'/></span>daizee swts</div>
          <button class="navbar-toggle" onclick="document.getElementById('navbar').classList.toggle('open')">
    ☰
  </button>

        {/* Center: Links */}
        <ul className="navbar-links">
          <li>
            <a href="#home">shop all</a>
          </li>
          <li>
            <a href="#cakes">featured sweet</a>
          </li>
          <li>
            <a href="#gallery">festival Special</a>
          </li>
          <li>
            <a href="#gallery">gifting</a>
          </li>
          <li>
            <a href="#aboutUs">About Us</a>
          </li>
          <li>
            <a href="#contactUS">Contact Us</a>
          </li>
        </ul>

        {/* Right: Icons */}
        <div className="navbar-icons">
          <IoIosSearch className="icon" />

          
          <VscAccount className="icon"  />
          <HiOutlineShoppingBag className="icon"  />

        </div>
      </nav>
       <section className="home-section">
        <div className="home-content">
          <h1><span><h1>Exclusive</h1></span> Sale <br /> Happening <br /> Now!</h1>
          <p>
            Discover amazing deals and discount on our sweet ecommerce website! <br /> Shop now for the best offers!
          </p>
          <button className="cta-button">Shop Now</button>
  
        </div>
      </section>
      <section className="cake-section">
        <h2 className="section-title">Expolre our sweets</h2>
        <div className='ssection-title-child'>
          <span>new launches</span>
          <span>ugadi special</span>
          <span>eid collection</span>
          <span>khara</span>
          <span>gifting</span>

        </div>
        <div className="cake-grid">
          {breads.map((cake) => (
            <div className="cake-card" key={cake.id}>
              <img src={cake.image} alt={cake.name} />
              <h3 className="cake-name">{cake.name}</h3>
              <p className="cake-price">
                Explore Now!
              </p>
            </div>
          ))}
        </div>
      </section>
     <div className="teda-main">
       <div className='teda'>
        <span>freshest & finest</span>
        <span>primium ingredients</span>
        <span>no preservatives</span>
      </div>
     </div>
   <div className="main">
   <h2>our in-house collection</h2>
        <div className="main1">
        <div className="container">
        <div className="card card1">
            <img src="/s6.webp" alt=""/>
        </div>
         <div className="card card2">
            <img src="/s5.jpg" alt=""/>
        </div>
         
    </div>
    <div className="c2">
         <div className="card card3">
            <img src="/s2.jpg" alt=""/>
        </div>
         <div className="card card4">
            <img src="/s8.jpg" alt=""/>
        </div>
    </div>
   
         <div className="c3">
            <div className="card card5">
            <img src="/s5.jpg" alt=""/>
        </div>
         <div className="card card6">
            <img src="/s3.jpg" alt=""/>
        </div>
         </div>
         </div>
    </div>

<div className="teda-main">
       <div className='teda2'>
        <span>freshest & finest</span>
        <span>primium ingredients</span>
        <span>no preservatives</span>
      </div>
     </div>
      <section className="cake-section-2">
        <h2 className="section-title-2">Expolre our sweets</h2>
        
        <div className="cake-grid-2">
          {sweet.map((cake) => (
            <div className="cake-card-2" key={cake.id}>
              <img src={cake.image} alt={cake.name} />
              <h3 className="cake-name-2">{cake.name}</h3>
              <p className="cake-price-2">
                {cake.price} <span className="weight">({cake.weight})</span>
              </p>
            </div>
          ))}
        </div>
      </section>
       <section className='home-2'>
        <div className="home-section-2">
        <div className="home-content-2">
          <h1>let's <br />explore<span><h1>unique</h1></span> sweets. </h1>
          <p>
           Embrace the world of trendsetting <br /> and cutting-edge fashion.
          </p>
           <button className="cta-button-2">Shop Now</button>
  
        </div>
        <div className="home-div">
          <div className="home-div-1">
            <img className='home-div-image' src="/sweet1.jpg" alt="" />
          </div>
          <div className="home-div-2">
            <img className='home-div-image' src="/sweet2.jpg" alt="" />
          </div>
          <div  className="home-div-3">
            <img className='home-div-image'  src="/sweet3.jpg" alt="" />
          </div>
          <div className="home-div-4">
            <img className='home-div-image'  src="/sweet4.webp" alt="" />
          </div>
        </div>
      </div>
       </section>


<div class="wrapper">
  <div class="content-box">
    <div class="left-content">
      <h2>our success story</h2>
      <p>
     <p>
        Our journey began with a simple dream—to spread happiness through the timeless taste of traditional sweets. What started as a small family kitchen, with recipes passed down through generations, quickly turned into a local favorite.
     </p>  <p>
        With each ladoo, barfi, and peda crafted by hand, we earned the trust and love of our community. As word spread, so did our reach, turning first-time visitors into lifelong customers.
       </p>

Today, we proudly serve not just sweets, but memories—celebrating birthdays, weddings, and festivals alongside you. From sourcing the finest ingredients to preserving the authentic flavors of India, our commitment remains the same: delivering pure joy in every bite. This sweet journey wouldn’t have been possible without your love and support, and we’re excited to keep adding flavor to your special moments for years to come.
      </p>
    </div>
    <div class="right-image">
      <img src="/sweet3.jpg" alt="Sample" />
    </div>
  </div>
</div>
<footer className="footer">
<div className="footer-yellow">
  <h1>
    Join Dessert Community <br />
    To Get Monthly Promo
  </h1>
  <p>Enter your email below to join the vibrant and youthful community.</p>

  <div className="email-subscribe">
    <input type="email" placeholder="Enter your email" />
    <button>Send</button>
  </div>
</div>

  <div className="footer-content">
 
  
    {/* Logo + About */}
    <div className="footer-section about">
      <h3><GiWrappedSweet className="footer-icon" /> Daizee Sweets</h3>
      <p>Spreading sweetness since day one. </p>
      <p>Spreading sweetness since day one. </p>
      
      <div className="social-icons">
        <a href="#"><i className=" footer-icons fab fa-facebook-f"></i></a>
        <a href="#"><i className="footer-icons fab fa-instagram"></i></a>
        <a href="#"><i className="footer-icons fab fa-twitter"></i></a>
      </div>
    </div>

    {/* Quick Links */}
    <div className="footer-section links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#home">Shop All</a></li>
        <li><a href="#cakes">Featured Sweets</a></li>
        
        <li><a href="#gifting">Gifting</a></li>
       
      </ul>
    </div>
 <div className="footer-section links">
      <h4>Quick Links</h4>
      <ul>
        <li><a href="#home">Shop All</a></li>
        <li><a href="#cakes">Featured Sweets</a></li>
        <li><a href="#gallery">Festival Special</a></li>
        
      </ul>
    </div>
    {/* Contact Info */}
    <div className="footer-section contact">
      <h4>Contact Us</h4>
      <p><i className="fas fa-envelope"></i> support@daizeesweets.com</p>
      <p><i className="fas fa-phone-alt"></i> +91 98765 43210</p>
      <p><i className="fas fa-map-marker-alt"></i> Sweet Street, Delhi, India</p>
    </div>
  </div>

  {/* <div className="footer-bottom">
    <p>&copy; {new Date().getFullYear()} Daizee Sweets. All rights reserved. | 
      <a href="#terms"> Terms & Conditions </a> | 
      <a href="#privacy"> Privacy Policy </a>
    </p>
  </div> */}
</footer>


 
   </>
  )
}

export default App