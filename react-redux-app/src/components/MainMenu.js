import React, { useEffect } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner'
import './styles.css';

import { fetchData } from '../store/actions/actions'
import DrinkCard from './DrinkCard';

const MainMenu = ({loading, error, fetchData}) => {

  useEffect(() => {
    fetchData();
  }, [fetchData])

  return (
    <div className="main-menu">
      {
        loading &&
          <Loader
            type="Puff"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={5000} //5 secs
          />
      }
      <DrinkCard />
    </div>
  );
}

const mapStateToProps = state => {
  return { 
    loading: state.loading,
    error: state.error,
  }
};

export default connect(mapStateToProps, { fetchData })(MainMenu);