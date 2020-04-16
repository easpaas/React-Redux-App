import React, { useEffect } from 'react';
import { connect } from "react-redux";
import './styles.css';

import { fetchData } from '../store/actions/actions'
import DrinkCard from './DrinkCard';

const MainMenu = ({fetchData}) => {

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <div className="main-menu">
      <DrinkCard />
    </div>
  );
}

export default connect(null, { fetchData })(MainMenu);