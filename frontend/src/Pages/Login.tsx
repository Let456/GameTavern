import { Button, TextField } from "@mui/material"
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import { backgroundDivStyle, createAccStyle, inputTextStyle, labelStyle, logInStyle, ButtonStyle, textFieldBoxStyle, textFieldDivStyle } from "./Login.styles"
import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const Login = (): JSX.Element => {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const navigate = useNavigate();

    const handleLogin = () => {
      const credentials = { email, password };

      axios.post('http://localhost:8060/Customer/Login', credentials, {headers: {"Content-Type": "application/json"
          }}).then(response => {
              console.log(response.data);
              navigate("/Home", { state:{key:response.data.id}}) 
          })
          .catch(error => {
              console.error(error.response.data);
              alert(`Error: ${error.response.data}`); 
          });
    };

    const onChangeEmail = (event: any): void => {
        setEmail(event.target.value)
    }

    const onChangePassword = (event: any): void => {
        setPassword(event.target.value)
    }

    const login = (event: any): void => {
        navigate("/Home")
    }

    const createAcc = (event: any): void => {
        navigate("/CreateAccount")
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
              label="Password"
              variant="standard"
              type="password"
              InputProps={{ style: labelStyle }}
              InputLabelProps={{ style: inputTextStyle }}
              style={textFieldBoxStyle}
              onChange={onChangePassword}
            />
            <div style={ButtonStyle}>
              <Button style={logInStyle}  onClick={handleLogin} variant="contained">
                Login
              </Button>
              <Button style={createAccStyle}  onClick={createAcc} variant="contained">
                Sign In
              </Button>
            </div>           
          </div>
        </div>
      );
}