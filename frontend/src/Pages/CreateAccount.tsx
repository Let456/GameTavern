import React from 'react';
import { backgroundDivStyle, createAccStyle, createAccountButtonStyle, inputTextStyle, labelStyle, textField2DivStyle, textFieldBoxStyle, textFieldDivStyle } from './CreateAccount.styles';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';



export const CreateAccount = (): JSX.Element => {

  const [email, setEmail] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const navigate = useNavigate();

  const createAcc2 = (event: any): void => {
    navigate("/")
   }

  const onCreateAcc = (event: any): void => {
    console.log(email)
    console.log(name)
    console.log(age)
    console.log(password)

    const customer = {
      email: email,
      customerName: name,
      age: age,
      password: password
    }

    axios.post("http://localhost:8060/Customer/Insert", customer, {headers: {"Content-Type": "application/json"
      }}).then((response: any) : void =>{
      console.log(response)
      navigate("/")
      alert(`Account Created Succesfuly`);
    }).catch((error) => {
      console.error(error.response.data)
      alert(`Error: ${error.response.data}`);
    })

  }
  const onChangeEmail = (event: any): void => {
    setEmail(event.target.value)
  }

  const onChangeName = (event: any): void => {
    setName(event.target.value)
  }

  const onChangeAge = (event: any): void => {
    setAge(event.target.value)
  }

  const onChangePassword = (event: any): void => {
    setPassword(event.target.value)
  }

    return (
      <div style={backgroundDivStyle}>
        <div style={textFieldDivStyle}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            InputProps={{ style: labelStyle }}
            InputLabelProps={{ style: inputTextStyle }}
            style={textFieldBoxStyle}
            onChange={onChangeEmail}
          />
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            InputProps={{ style: labelStyle }}
            InputLabelProps={{ style: inputTextStyle }}
            style={textFieldBoxStyle}
            onChange={onChangeName}
          />
          <TextField
            id="standard-basic"
            label="Age"
            variant="standard"
            InputProps={{ style: labelStyle }}
            InputLabelProps={{ style: inputTextStyle }}
            style={textFieldBoxStyle}
            onChange={onChangeAge}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            InputProps={{ style: labelStyle }}
            InputLabelProps={{ style: inputTextStyle }}
            style={textFieldBoxStyle}
            onChange={onChangePassword}
          />
          <div style={createAccountButtonStyle}>
            <Button style={createAccStyle}  onClick={onCreateAcc} variant="contained">
              Create Account
            </Button>
          </div>
        </div>
      </div>
    );
  };