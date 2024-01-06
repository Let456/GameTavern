import React, { useState, useEffect } from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import axios from 'axios';
import {
  ButtonStyle,
  backgroundContainer,
  consoleIcon,
  consoleIcon2,
  consoleIcon3,
  consoleIcon4,
  popupContainer,
  popupContent,
  popupOverlay,
  medievalType,
  buttonStyleText,
  textFieldDivStyle,
  textFieldBoxStyle,
  labelStyle,
  inputTextStyle,
  ButtonStyle2,
  medievalType2,
  labelStyle2,
  textFieldDivStyle2,
} from './RentConsole.styles';
import { useLocation } from 'react-router-dom';
import { TextField } from '@mui/material';

interface Console {
  id: number;
  pricePerHour: number;
  consoleType: number; 
}

const RentConsole = () => {
  const location = useLocation();
  const id = parseInt(location.state?.key, 10);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedIconId, setSelectedIconId] = useState<number | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [pricePerHour, setPricePerHour] = useState<string>("");
  const [consoleType, setConsoleType] = useState<string>("");
  const [hoursToRent, setHoursToRent] = useState<string>("");
  const [isConsole, setIsConsole] = useState(false);
  const [result, setResult] = useState<number | null>(null);

  const onChangeConsolePrice = (event: any): void => {
    setPricePerHour(event.target.value)
  }

  const onChangeConsoleType = (event: any): void => {
    setConsoleType(event.target.value)
  }

  const onChangeHoursToRent = (event: any): void => {
    setHoursToRent(event.target.value)
  }

  useEffect(() => {
    axios
      .post('http://localhost:8060/Customer/GetById', id, {headers: {"Content-Type": "application/json"
    }})
      .then((response) => {
        if(response.data.admin == 1)
          setIsAdmin(true);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  useEffect(() => {
    setResult(0);
  }, [selectedIconId]); 

  useEffect(() => {
    if (hoursToRent !== "") {
      axios
        .post(`http://localhost:8060/Console/Rent?hoursToRent=${hoursToRent}&consoleId=${selectedIconId}`, null, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((response: any): void => {
          console.log(response.data);
          setResult(response.data)
        })
        .catch((error) => {
          console.error(error.response.data);
          alert(`Error: ${error.response.data}`);
        });
    }
    else
      setResult(0);
  }, [hoursToRent]);

  const handleConsoleIconClick = (id: number) => {
    console.log(`Icon ${id} clicked!`);
    setPopupVisible(true);
    setSelectedIconId(id);

    axios
    .post('http://localhost:8060/Console/GetById', id, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      setIsConsole(true);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

  };

  const onRent = (event: any): void => {

    const customerConsole = {
      consoleId: selectedIconId,
      customerId: id,
      price: result
    }

    axios
    .post('http://localhost:8060/Console/RentConsole', customerConsole, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      alert(response.data)
    })
    .catch((error) => {
      alert(`Error: ${error.response.data}`);
    });

  };

  const onInsert = (event: any): void => {
    console.log(selectedIconId)
    console.log(pricePerHour)
    console.log(consoleType)

    const Console = {
      id: selectedIconId,
      pricePerHour: pricePerHour,
      consoleType: consoleType
    }

    axios
      .post("http://localhost:8060/Console/Insert", Console, {
        headers: {"Content-Type": "application/json"}
      }).
        then((response: any) : void =>{
        console.log(response)
        alert(`Console Inserted Succesfuly`);
      }).
        catch((error) => {
          console.error(error.response.data)
          alert(`Error: ${error.response.data}`);
      })

  }

  const onDelete = (event: any): void => {
    console.log("pula",selectedIconId);
    const idToBeDeleted = selectedIconId
    console.log(idToBeDeleted);
    axios
      .post('http://localhost:8060/Console/DeleteById', idToBeDeleted, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        console.log(response)
        alert("Console deleted succsessfully");
      })
      .catch((error) => {
        console.error(error.response.data);
        alert(`Error: ${error.response.data}`);
      });
  }

  return (
    <div>
      <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="/hogwarts.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {Array.from({ length: 5 }, (_, index) => (
        <SportsEsportsIcon
          key={index + 1}
          style={{
            ...consoleIcon,
            top: `${10 + index * 20}%`,
          }}
          onClick={() => handleConsoleIconClick(index + 1)}
        />
      ))}

      {/* Add the second set of icons */}
      {Array.from({ length: 5 }, (_, index) => (
        <SportsEsportsIcon
          key={index + 6}
          style={{
            ...consoleIcon2,
            top: `${10 + index * 20}%`,
          }}
          onClick={() => handleConsoleIconClick(index + 6)}
        />
      ))}

      {/* Add the third set of icons */}
      {Array.from({ length: 5 }, (_, index) => (
        <SportsEsportsIcon
          key={index + 11}
          style={{
            ...consoleIcon3,
            top: `${10 + index * 20}%`,
          }}
          onClick={() => handleConsoleIconClick(index + 11)}
        />
      ))}

      {/* Add the fourth set of icons */}
      {Array.from({ length: 5 }, (_, index) => (
        <SportsEsportsIcon
          key={index + 16}
          style={{
            ...consoleIcon4,
            top: `${10 + index * 20}%`,
          }}
          onClick={() => handleConsoleIconClick(index + 16)}
        />
      ))}

      {/* Render the pop-up for regular user */}
      {isPopupVisible && !isAdmin && isConsole &&(
        <div style={popupContainer}>
          <div style={popupContent}>
            <p style={medievalType}>Console {selectedIconId}</p>

            {/* Add text fields */}
            <div style={textFieldDivStyle2}>
              <TextField
                id="standard-basic"
                label="HoursToRent"
                variant="standard"
                InputProps={{ style: { ...labelStyle2, ...medievalType2 } }}
                InputLabelProps={{ style: { ...labelStyle, ...medievalType2 } }}
                style={textFieldBoxStyle}
                onChange={onChangeHoursToRent}
              />
            </div>
            <div style={textFieldDivStyle2}>
              <label style={medievalType2}>Price: {result !== null ? `${result}` : ''}</label>
            </div>

            {/* Add Rent button */}
            <div style={ButtonStyle}>
              <button style={buttonStyleText} onClick={onRent}>
                Rent
              </button>
            </div>

            {/* Add Close button */}
            <div style={ButtonStyle}>
              <button style={buttonStyleText} 
                onClick={() => {
                  setPopupVisible(false);
                  setIsConsole(false);
                }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Render the pop-up for admin */}
      {isPopupVisible && isAdmin && (
        <div style={popupContainer}>
          <div style={popupContent}>
            <p style={medievalType}>Admin Console {selectedIconId}</p>

            {/* Add text fields */}
            <div style={textFieldDivStyle}>
              <TextField
              id="standard-basic"
              label="HoursToRent"
              variant="standard"
              InputProps={{ style: {...labelStyle2,...medievalType2} }}
              InputLabelProps={{ style: {...labelStyle,...medievalType2} }}
              style={textFieldBoxStyle}
              onChange={onChangeHoursToRent}
              />
            </div>
            <div style={textFieldDivStyle2}>
              <label style={medievalType2}>Price: {result !== null ? `${result}` : ''}</label>
            </div>

            <div style={ButtonStyle}>
              <button style={buttonStyleText} >
                Rent
              </button>
            </div>

            <div style={ButtonStyle2}>
              <button style={buttonStyleText} onClick={onInsert}>
                Add
              </button>
              <button style={buttonStyleText} onClick={onDelete}>
                Delete
              </button>
            </div>
            <div style={textFieldDivStyle}>
              <TextField
              id="standard-basic"
              label="pricePerHour"
              variant="standard"
              InputProps={{ style: {...labelStyle2,...medievalType2} }}
              InputLabelProps={{ style: {...labelStyle,...medievalType2} }}
              style={textFieldBoxStyle}
              onChange={onChangeConsolePrice}
              />
              <TextField
              id="standard-basic"
              label="consoleType"
              variant="standard"
              InputProps={{ style: {...labelStyle2,...medievalType2} }}
              InputLabelProps={{ style: {...labelStyle,...medievalType2} }}
              style={textFieldBoxStyle}
              onChange={onChangeConsoleType}
              />
            </div>
            <div style={ButtonStyle}>
              <button style={buttonStyleText} 
                onClick={() => {
                  setPopupVisible(false);
                  setIsConsole(false);
                }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentConsole;
