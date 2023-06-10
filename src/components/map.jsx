import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiSunrise } from 'react-icons/fi';
import { BsLightbulb } from 'react-icons/bs';
import { GrPowerCycle } from 'react-icons/gr';
import { GiMatchHead } from 'react-icons/gi';
import { GrChatOption } from 'react-icons/gr';
import { BsSignpostSplit } from 'react-icons/bs';
import { CgBee } from 'react-icons/cg';
import { BiHappyAlt } from 'react-icons/bi';
import { MdVerticalAlignCenter } from 'react-icons/md';
import { MdOutlineSportsKabaddi } from 'react-icons/md';
import { GiBackPain } from 'react-icons/gi';
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
      pages: '1',
      icon: <FiSunrise />,
      information: ''
    },
    {
      id: 2,
      title: 'Theme Stated',
      pages: '5',
      icon: <BsLightbulb />,
      information: ''
    },
    {
      id: 3,
      title: 'Set-Up',
      pages: '1-10',
      icon: <GrPowerCycle />,
      information: ''
    },
    {
      id: 4,
      title: 'Catalyst',
      pages: '12',
      icon: <GiMatchHead />,
      information: ''
    },
    {
      id: 5,
      title: 'Debate',
      pages: '12-25',
      icon: <GrChatOption />,
      information: ''
    },
    {
      id: 6,
      title: 'Break Into Two',
      pages: '25',
      icon: <BsSignpostSplit />,
      information: ''
    },
    {
      id: 7,
      title: 'B Story',
      page: '30',
      icon: <CgBee />,
      information: ''
    },
    {
      id: 8,
      title: 'Fun & Games',
      pages: '30-55',
      icon: <BiHappyAlt />,
      information: ''
    },
    {
      id: 9,
      title: 'Midpoint',
      pages: '55',
      icon: <MdVerticalAlignCenter />,
      information: ''
    },
    {
      id: 10,
      title: 'Bad Guys Close In',
      pages: '55-75',
      icon: <MdOutlineSportsKabaddi />,
      information: ''
    },
    {
      id: 11,
      title: 'All Is Lost',
      pages: '75',
      icon: <GiBackPain />,
      information: ''
    },
    {
      id: 12,
      title: 'Dark Night of the Soul',
      pages: '75-85',
      icon: <GiNightSky />,
      information: ''
    },
    {
      id: 13,
      title: 'Break Into Three',
      pages: '85',
      icon: <GiThreePointedShuriken />,
      information: ''
    },
    {
      id: 14,
      title: 'Finale',
      pages: '85-110',
      icon: <GiRainbowStar />,
      information: ''
    },
    {
      id: 15,
      title: 'Final Image',
      pages: '110',
      icon: <FiSunset />,
      information: ''
    },
  ]);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      axios.get('http://localhost:5000/api/cards', {
        headers: {
          Authorization: token,
        },
      })
        .then(response => {
          const cardData = response.data;
          setCards(prevCards => {
            return prevCards.map((card, index) => {
              const foundCard = cardData.cards.find(c => c.id === card.id);
              return { ...card, information: foundCard ? foundCard.information : '' };
            });
          });
        })
        .catch(error => {
          console.log('Error retrieving cards:', error);
        });
    } else {
      const storedCardInfo = JSON.parse(localStorage.getItem('cardInfo'));
      if (storedCardInfo) {
        setCards(prevCards => {
          return prevCards.map((card, index) => {
            return { ...card, information: storedCardInfo[index] };
          });
        });
      }
    }
  }, []);

  useEffect(() => {
    const cardInfo = cards.map((card) => card.information || '');
    localStorage.setItem('cardInfo', JSON.stringify(cardInfo));
  }, [cards]);

  const handleCardClick = (index) => {
    const updatedCard = prompt(
      `${cards[index].title}:`,
      cards[index].information
    );

    if (updatedCard !== null) {
      const newCards = [...cards];
      newCards[index].information = updatedCard !== "" ? updatedCard : "";
      setCards(newCards);

      const token = localStorage.getItem('token');

      if (token) {
        const cardData = {
          cards: newCards.map((card) => ({
            id: card.id,
            information: card.information,
          })),
        };

        axios.post('http://localhost:5000/api/cards', cardData, {
          headers: {
            Authorization: token,
          },
        })
          .then(response => {
            console.log('Card saved.');
          })
          .catch(error => {
            console.log('Error saving card:', error);
          });
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card-container"
            onClick={() => handleCardClick(card.id - 1)}
          >
            <div className="card">
              <div className="card-body">
                <div className="icon">
                  {React.cloneElement(card.icon, { size: '3em' })}
                </div>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-pages">{card.pages}</p>
                {card.information !== '' && (
                <p className="card-text">{card.information}</p>
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
