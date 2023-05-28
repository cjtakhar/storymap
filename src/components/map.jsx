import React, { useState } from 'react';
import { FiSunrise } from 'react-icons/fi';
import { BsLightbulb } from 'react-icons/bs';
import { GrPowerCycle } from 'react-icons/gr';
import { GiMatchHead } from 'react-icons/gi';
import { GrChatOption } from 'react-icons/gr';
import { BsSignpostSplit } from 'react-icons/bs';
import { CgBee } from 'react-icons/cg';
import { BiHappyAlt } from 'react-icons/bi';
import { MdVerticalAlignCenter } from 'react-icons/md';
import {MdOutlineSportsKabaddi} from 'react-icons/md';
import { GiTerror } from 'react-icons/gi';
import { GiNightSky } from 'react-icons/gi';
import { GiThreePointedShuriken } from 'react-icons/gi';
import { GiRainbowStar } from 'react-icons/gi';
import { FiSunset } from 'react-icons/fi';
import './styles/map.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Map = () => {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: 'Opening Image',
      icon: <FiSunrise />,
      information: ''
    },
    {
      id: 2,
      title: 'Theme Stated',
      icon: <BsLightbulb />,
      information: ''
    },
    {
      id: 3,
      title: 'Set-Up',
      icon: <GrPowerCycle />,
      information: ''
    },
    {
      id: 4,
      title: 'Catalyst',
      icon: <GiMatchHead />,
      information: ''
    },
    {
      id: 5,
      title: 'Debate',
      icon: <GrChatOption />,
      information: ''
    },
    {
      id: 6,
      title: 'Break Into Two',
      icon: <BsSignpostSplit />,
      information: ''
    },
    {
      id: 7,
      title: 'B Story',
      icon: <CgBee />,
      information: ''
    },
    {
      id: 8,
      title: 'Fun & Games',
      icon: <BiHappyAlt />,
      information: ''
    },
    {
      id: 9,
      title: 'Midpoint',
      icon: <MdVerticalAlignCenter />,
      information: ''
    },
    {
      id: 10,
      title: 'Bad Guys Close In',
      icon: <MdOutlineSportsKabaddi />,
      information: ''
    },
    {
      id: 11,
      title: 'All Is Lost',
      icon: <GiTerror />,
      information: ''
    },
    {
      id: 12,
      title: 'Dark Night of the Soul',
      icon: <GiNightSky />,
      information: ''
    },
    {
      id: 13,
      title: 'Break Into Three',
      icon: <GiThreePointedShuriken />,
      information: ''
    },
    {
      id: 14,
      title: 'Finale',
      icon: <GiRainbowStar />,
      information: ''
    },
    {
      id: 15,
      title: 'Final Image',
      icon: <FiSunset />,
      information: ''
    },
  ]);

  const handleCardClick = (index) => {
    const updatedCard = prompt('Enter information for the card:');
    if (updatedCard !== null) {
      const newCards = [...cards];
      newCards[index].information = updatedCard;
      setCards(newCards);
    }
  };

  return (
    <div className="container">
      <div className="row">
        {cards.map((card) => (
          <div
            key={card.id}
            className="col-lg-4 col-md-6 col-sm-12 col-12 mb-4"
            onClick={() => handleCardClick(card.id - 1)}
          >
            <div className="card">
              <div className="card-body">
              <div className="icon">
                  {React.cloneElement(card.icon, { size: '3em' })}
                </div>
                <h5 className="card-title">{card.title}</h5>
                
                {card.information ? (
                  <p className="card-text">{card.information}</p>
                ) : (
                  <p className="card-text"></p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Map;
