import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Spinner from "./Spinner";
import SliderContainer from "./SliderContainer";
import Modal from "./Modal";
import { motion } from "framer-motion";

function ThirdPrize() {
  const [isCardVisible, setIsCardVisible] = useState(true);
  const [isSpinnerVisible, setIsSpinnerVisible] = useState(false);

  const [revealPrize, setRevealPrize] = useState(false);
  const [showWinners, setShowWinners] = useState(false);
  const [isShowing, setIsShowing] = useState(true);
  const [announceWinner, setAnnounceWinner] = useState(false);

  const toggleElement = () => {
    setIsShowing(true);
  };

  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setIsCardVisible(true);
    setShowModal(false);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    // setAnnounceWinner(!announceWinner);
    if (showModal === true) {
      setIsCardVisible(false);
    }
  };

  const handleCardClick = () => {
    setIsCardVisible(false);
    setIsSpinnerVisible(true);
  };

  const winnersList = [
    {
      url: "/lucky-draw-files/winner_data/ac_winner/1.jpg",
      title: "beach",
    },
  ];

  const handleAnnounceImage = () => {
    setShowWinners(true);
    setIsShowing(true);
    // setAnnounceWinner(false);

    setShowModal(!showModal);
  };

  return (
    <div className="grandpage">
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
      <div className="grandPrize">
        <img
          src="/lucky-draw-files/Screens/ac_screen_1.jpg"
          className="grandprize-image"
          alt=""
        />
      </div>
      <div className="grandprize-down-portion">
        <img
          className="grand-down-image"
          src="/lucky-draw-files/Screens/ac_screen_2.jpg"
          alt=""
        />
        <div className="items-container">
          {isCardVisible && (
            <motion.div
              initial={{ y: "-100vh" }}
              animate={{ y: "0" }}
              transition={{ delay: "0.3" }}
              className="grand-page-card-container"
            >
              <div className="card" onClick={handleCardClick}>
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
            </motion.div>
          )}
          {isSpinnerVisible && (
            <Spinner
              isSpinnerVisible={isSpinnerVisible}
              setIsSpinnerVisible={setIsSpinnerVisible}
              announceWinner={announceWinner}
              setAnnounceWinner={setAnnounceWinner}
              setRevealPrize={setRevealPrize}
              setIsShowing={setIsShowing}
              setShowWinners={setShowWinners}
              setShowModal={setShowModal}
              showModal={showModal}
              toggleModal={toggleModal}
            />
          )}
          {/* {announceWinner && (
            <motion.div
              // initial={{rotate:"180"}}
              // animate={{rotate:"0"}}

              className={`transition-element ${isShowing ? "show" : ""}`}
              onClick={handleAnnounceImage}
            >
              <img
                src="/images/third_step_image.gif"
                className="announce-prize-image"
                alt="grand-prize-announcement"
              />
            </motion.div>
          )} */}

          {/* {
            showWinners && (
                <div className={`transition-element ${isShowing ? 'show' : ''}`} >
                     <img src="grandprizeWinners.gif" className="grand-winners-image" alt="grand-prize-announcement" />
                </div>
            )

        } */}
          {/* {
            showWinners && (<SliderContainer winnersList={winnersList} />)
        } */}
        </div>
      </div>
      {showWinners && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          toggleModal={toggleModal}
          winnersList={winnersList}
          revealPrize={revealPrize}
          setRevealPrize={setRevealPrize}
          closeModal={closeModal}
        />
      )}
    </div>
  );
}

export default ThirdPrize;
