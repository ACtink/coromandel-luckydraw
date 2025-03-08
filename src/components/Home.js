import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import CarouselC from "./CarouselC";
import "../carousal.css";
import { ShowNewGrandPageContext } from "./GrandPageContext";
import { motion } from "framer-motion";

function Home() {
 

  return (
    <>
      <div className="outer">
        {/* <div className="home">
          <div className="nav-buttons-container">
            <Link to="/">
              <button
                className="home-button medium-home-button"
                style={{ color: "rgb(44, 44, 44)" }}
              >
                Home
              </button>
            </Link>

            
          </div>
          <img
            src="/lucky-draw-files/Screens/home_screen_1.jpg"
            className="banner-image"
            alt=""
          />
        </div> */}

        <div className="home">
          <div className="nav-buttons-container">
            <Link to="/">
              <button
                className="home-button medium-home-button"
                style={{ color: "rgb(44, 44, 44)" }}
              >
                Home
              </button>
            </Link>
          </div>
          <div className="image-container">
            <img
              src="/lucky-draw-files/Screens/home_screen_1.jpg"
              className="banner-image"
              alt=""
              onLoad={(e) => {
                const container = e.target.parentElement; // Select the parent element
                container.classList.add("loaded"); // Add the 'loaded' class to the container
                e.target.classList.add("loaded"); // Add the 'loaded' class to the image
              }}
            />
          </div>
        </div>

        {/* <div className="home-down-portion"> */}

        <div className="card-container">
          <img
            className="home-down-image"
            src="/lucky-draw-files/Screens/home_screen_2.jpg"
            alt=""
           
          />

          <Link to="/firstprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img
                  src="/lucky-draw-files/cards/bullet_card.jpg"
                  className="card-image"
                  alt=""
                  onLoad={(e) => {
                    e.target.parentElement.classList.add("loaded"); // Add 'loaded' class to the container
                    e.target.classList.add("loaded"); // Add 'loaded' class to the image
                  }}
                />
              </div>
              {/* <Link to="/1stPrize" className="button-link"><button class="button">
            <span>1st Prize</span>
          </button></Link> */}
            </div>
          </Link>
          <Link to="/secondprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img
                  src="/lucky-draw-files/cards/bike_card.jpg"
                  className="card-image"
                  alt=""
                  onLoad={(e) => {
                    e.target.parentElement.classList.add("loaded"); // Add 'loaded' class to the container
                    e.target.classList.add("loaded"); // Add 'loaded' class to the image
                  }}
                />
              </div>
            </div>
          </Link>

          <Link to="/thirdprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img
                  src="/lucky-draw-files/cards/ac_card.jpg"
                  className="card-image"
                  alt=""
                  onLoad={(e) => {
                    e.target.parentElement.classList.add("loaded"); // Add 'loaded' class to the container
                    e.target.classList.add("loaded"); // Add 'loaded' class to the image
                  }}
                />
              </div>
            </div>
          </Link>
          <Link to="/fourthprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img
                  src="/lucky-draw-files/cards/tv_card.jpg"
                  className="card-image"
                  alt=""
                  onLoad={(e) => {
                    e.target.parentElement.classList.add("loaded"); // Add 'loaded' class to the container
                    e.target.classList.add("loaded"); // Add 'loaded' class to the image
                  }}
                />
              </div>
            </div>
          </Link>
          <Link to="/fifthprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img
                  src="/lucky-draw-files/cards/mobile_card.jpg"
                  className="card-image"
                  alt=""
                  onLoad={(e) => {
                    e.target.parentElement.classList.add("loaded"); // Add 'loaded' class to the container
                    e.target.classList.add("loaded"); // Add 'loaded' class to the image
                  }}
                />
              </div>
            </div>
          </Link>
          <Link to="/sixthprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img
                  src="/lucky-draw-files/cards/mixer_card.jpeg"
                  className="card-image"
                  alt=""
                  onLoad={(e) => {
                    e.target.parentElement.classList.add("loaded"); // Add 'loaded' class to the container
                    e.target.classList.add("loaded"); // Add 'loaded' class to the image
                  }}
                />
              </div>
            </div>
          </Link>
          <Link to="/seventhprize" className="button-link">
            <div className="card">
              <div className="card-image-container">
                <img
                  src="/lucky-draw-files/cards/pump_card.jpg"
                  className="card-image"
                  alt=""
                  onLoad={(e) => {
                    e.target.parentElement.classList.add("loaded"); // Add 'loaded' class to the container
                    e.target.classList.add("loaded"); // Add 'loaded' class to the image
                  }}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
