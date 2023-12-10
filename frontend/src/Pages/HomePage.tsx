// src/components/HomePage.tsx

import React from 'react';
import { ButtonStyle, additionalContent, backgroundContainer, buttonStyleText, fadeInOut, medievalType } from './HomePage.styles';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate();

  const location = useLocation();
  const id = parseInt(location.state?.key, 10);
  console.log(id)

  const barMenu = (event: any): void => {
      navigate("/BarMenu")
  }

  const rentPC = (event: any): void => {
    navigate("/RentPc")
}

  const rentConsole = (event: any): void => {
    navigate("/RentConsole")
}

  return (
    <div style={backgroundContainer}>
        <h1 style={medievalType}>Welcome to the GameTavern</h1>
        <div style={ButtonStyle}>
        <Button style={buttonStyleText} onClick={rentPC} variant="contained">
            Rent a Pc
        </Button>
        <Button style={buttonStyleText} onClick={rentConsole} variant="contained">
            Rent a console
        </Button>
        <Button style={buttonStyleText} onClick={barMenu} variant="contained">
            Bar Menu
        </Button>
        </div>
    </div>
  );
};

export default HomePage;
