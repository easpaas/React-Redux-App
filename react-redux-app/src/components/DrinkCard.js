import React from 'react';
import { connect } from 'react-redux';
import './styles.css';


const DrinkCard = (props) => { 
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <div className="image">
        <img src={props.img_url} alt={props.name} />
      </div>
      <div className="section">
        <h4>Classified as: {`${props.category}`}</h4>
        <h4>Best served in: {`${props.glass}`} </h4>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    id: state.drinkReducer.id,
    name: state.drinkReducer.name, 
    img_url: state.drinkReducer.img_url,
    category: state.drinkReducer.category, 
    glass: state.drinkReducer.glass
  }
}

export default connect(mapStateToProps, {})(DrinkCard);