// RentPc.tsx
import React, { useState, useEffect } from 'react';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import axios from 'axios';
import {
  backgroundContainer,
  queueIcon,
  queueIcon2,
  queueIcon3,
  queueIcon4,
  popupContainer,
  popupContent,
  medievalType,
  buttonStyleText,
  textFieldDivStyle,
  textFieldBoxStyle,
  labelStyle,
  inputTextStyle,
  ButtonStyle,
  ButtonStyle2, 
  medievalType2, 
  textFieldDivStyle2, 
  labelStyle2, 
} from './RentPc.styles';
import { useLocation } from 'react-router-dom';
import { TextField } from '@mui/material';


interface Pc {
  id: number;
  pricePerHour: number;
  pcType: number; 
}

const RentPc = () => {
  const location = useLocation();
  const idUser = parseInt(location.state?.key, 10);

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedIconId, setSelectedIconId] = useState<number | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [pricePerHour, setPricePerHour] = useState<string>("");
  const [pcType, setPcType] = useState<string>("");
  const [hoursToRent, setHoursToRent] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [isPc, setIsPc] = useState(false);

  const onChangePcPrice = (event: any): void => {
    setPricePerHour(event.target.value)
  }

  const onChangePcType = (event: any): void => {
    setPcType(event.target.value)
  }

  const onChangeHoursToRent = (event: any): void => {
    setHoursToRent(event.target.value)
  }

  useEffect(() => {
    axios
      .post('http://localhost:8060/Customer/GetById', idUser, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        if (response.data.admin === 1) {
          setIsAdmin(true);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [idUser]);

  useEffect(() => {
    console.log('Result changed:', result);
  }, [result]); 

  useEffect(() => {
    setResult(0);
  }, [selectedIconId]); 

  useEffect(() => {
    if (hoursToRent !== "") {
      axios
        .post(`http://localhost:8060/Pc/Rent?hoursToRent=${hoursToRent}&pcId=${selectedIconId}`, null, {
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

  const handleQueueIconClick = (id: number) => {
    console.log(`Icon ${id} clicked!`);
    setPopupVisible(true);
    setSelectedIconId(id);

    axios
    .post('http://localhost:8060/Pc/GetById', id, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      setIsPc(true);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  };

  const onRent = (event: any): void => {

    const pcCustomer = {
      pcId: selectedIconId,
      customerId: idUser,
      price: result
    }

    axios
    .post('http://localhost:8060/Pc/RentPc', pcCustomer, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      alert(response.data);
    })
    .catch((error) => {
      alert(`Error: ${error.response.data}`);
    });

  };

  const onInsert = (event: any): void => {
    console.log(selectedIconId)
    console.log(pricePerHour)
    console.log(pcType)

    const Pc = {
      id: selectedIconId,
      pricePerHour: pricePerHour,
      pcType: pcType
    }

    axios
      .post("http://localhost:8060/Pc/Insert", Pc, {
        headers: {"Content-Type": "application/json"}
      }).
        then((response: any) : void =>{
        console.log(response)
        alert(`Pc Inserted Succesfuly`);
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
      .post('http://localhost:8060/Pc/DeleteById', idToBeDeleted, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        console.log(response)
        alert(response);
      })
      .catch((error) => {
        console.error(error.response.data);
        alert(`Error: ${error.response.data}`);
      });
  }

  return (
    <div style={backgroundContainer}>
      <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="/hogwarts.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {Array.from({ length: 5 }, (_, index) => (
        <AddToQueueIcon
          key={index + 1}
          style={{
            ...queueIcon,
            top: `${10 + index * 20}%`,
          }}
          onClick={() => handleQueueIconClick(index + 1)}
        />
      ))}

      {/* Add the second set of icons */}
      {Array.from({ length: 5 }, (_, index) => (
        <AddToQueueIcon
          key={index + 6}
          style={{
            ...queueIcon2,
            top: `${10 + index * 20}%`,
          }}
          onClick={() => handleQueueIconClick(index + 6)}
        />
      ))}

      {/* Add the third set of icons */}
      {Array.from({ length: 5 }, (_, index) => (
        <AddToQueueIcon
          key={index + 11}
          style={{
            ...queueIcon3,
            top: `${10 + index * 20}%`,
          }}
          onClick={() => handleQueueIconClick(index + 11)}
        />
      ))}

      {/* Add the fourth set of icons */}
      {Array.from({ length: 5 }, (_, index) => (
        <AddToQueueIcon
          key={index + 16}
          style={{
            ...queueIcon4,
            top: `${10 + index * 20}%`,
          }}
          onClick={() => handleQueueIconClick(index + 16)}
        />
      ))}

      {isPopupVisible && !isAdmin && isPc && (
        <div style={popupContainer}>
          <div style={popupContent}>
            <p style={medievalType}>Pc {selectedIconId}</p>

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
                  setIsPc(false);
                }}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {isPopupVisible && isAdmin && (
        <div style={popupContainer}>
          <div style={popupContent}>
            <p style={medievalType2}>Admin Pc {selectedIconId}</p>

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

            <div style={ButtonStyle}>
              <button style={buttonStyleText} onClick={onRent}>
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
            <div style={textFieldDivStyle2}>
              <TextField
                id="standard-basic"
                label="pricePerHour"
                variant="standard"
                InputProps={{ style: { ...labelStyle2, ...medievalType2 } }}
                InputLabelProps={{ style: { ...labelStyle, ...medievalType2 } }}
                style={textFieldBoxStyle}
                onChange={onChangePcPrice}
              />
              <TextField
                id="standard-basic"
                label="pcType"
                variant="standard"
                InputProps={{ style: { ...labelStyle2, ...medievalType2 } }}
                InputLabelProps={{ style: { ...labelStyle, ...medievalType2 } }}
                style={textFieldBoxStyle}
                onChange={onChangePcType}
              />
            </div>
            <div style={ButtonStyle}>
              <button style={buttonStyleText}   
                onClick={() => {
                  setPopupVisible(false);
                  setIsPc(false);
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

export default RentPc;
