import React from "react";
import {useHistory} from "react-router-dom";
import {goToHomePage} from "../../Routes/Coordinator";

const HomeButton = () => {
    const history = useHistory()
  
    return  (
      <div className="home-button-container">
              <button onClick={() => goToHomePage(history)}> Ir para a página inicial </button>
      </div>
      )
  };
  
  export default HomeButton;