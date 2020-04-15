import React from 'react';
import './styles.css';

// TODO this component will render the contents from the api 

const DrinkCard = ({drink}) => { 
  return (
    <div className="card">
      <h2>{drink.strDrink}</h2>
      <div className="image">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} />
      </div>
      <div className="drink-contents">
        <div className="sections">
          <h4>Classified as: </h4>
          <p className="tab">{drink.strCategory}</p>
        </div>
        <div className="sections">
          <h4>Best served in: </h4>
          <p className="tab">{drink.strGlass}</p>
        </div>
      </div>
    </div>
  );
}


export default DrinkCard;