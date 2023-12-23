

import React from 'react';
import { ButtonStyle, additionalContent, backgroundContainer, buttonStyleText, fadeInOut, medievalType } from './HomePage.styles';
import { Button } from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";

const AdminHome = () => {

  const navigate = useNavigate();

  const location = useLocation();
  const id = parseInt(location.state?.key, 10);
  console.log(id)

  const barMenu = (event: any): void => {
    navigate("/BarMenu", { state: { key: id } })
  }

  const rentPC = (event: any): void => {
    navigate("/RentPc", { state: { key: id } });
  }
  

  const rentConsole = (event: any): void => {
    navigate("/RentConsole", { state: { key: id } })
  }

  const manageCustomer = (event: any): void => {
    navigate("/ManageCustomer", { state: { key: id } })
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
        <Button style={buttonStyleText} onClick={manageCustomer} variant="contained">
            Manage Customer
        </Button>
        </div>
    </div>
  );
};

export default AdminHome;
