//import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {
    return (
      <div className="timeline__item">
        <i className={props.icon}></i>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title">{props.title}</h3>
        <p className="timeline__text">{props.desc}</p>
      </div>
      
    )
  }
  
  Card.propTypes = {
    icon: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  };

export default Card

