import React, { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';

import DrinkCard from './DrinkCard';

const MainMenu = () => {
  //TODO store data from api into redux store 
  const [drink, setDrink] = useState([]);

  useEffect(() => {
    // TODO axios call 
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(response => {
        setDrink(response.data.drinks[0])
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="main-menu">
      <DrinkCard drink={drink} />
    </div>
  );
}

// mapStateToProps

// export default connect(mapStateToProps, { any action items go here})(MainMenu)

export default MainMenu;