import React from 'react';
import { connect } from 'react-redux';
import './styles.css';


// TODO 

const DrinkCard = (props) => { 
  return (
    <div className="card">
      <h2>{props.name}</h2>
      <div className="image">
        <img src={props.img_url} alt={props.name} />
      </div>
      <div className="sections">
        <h4>Classified as: </h4>
        <p className="tab">{props.category}</p>
      </div>
      <div className="sections">
        <h4>Best served in: </h4>
        <p className="tab">{props.glass}</p>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    id: state.id,
    name: state.name, 
    img_url: state.img_url,
    category: state.category, 
    glass: state.glass
  }
}


export default connect(mapStateToProps, {})(DrinkCard);