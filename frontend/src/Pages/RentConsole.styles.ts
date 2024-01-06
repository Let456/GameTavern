// RentConsole.styles.tsx
import { CSSProperties } from 'react';

export const backgroundContainer: CSSProperties = {
  height: '100vh',
  backgroundImage: 'url("/RentPc.gif")',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

export const consoleIcon: CSSProperties = {
  color: 'white',
  fontSize: 50,
  position: 'absolute',
  left: '10%',
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
};

export const consoleIcon2: CSSProperties = {
  color: 'white',
  fontSize: 50,
  position: 'absolute',
  left: '20%',
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
};

export const consoleIcon3: CSSProperties = {
  color: 'white',
  fontSize: 50,
  position: 'absolute',
  left: '80%',
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
};

export const consoleIcon4: CSSProperties = {
  color: 'white',
  fontSize: 50,
  position: 'absolute',
  left: '90%',
  transform: 'translate(-50%, -50%)',
  cursor: 'pointer',
};

export const popupContainer: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

export const popupContent: CSSProperties = {
  backgroundColor: '#d2b48c',
  width: '50%', 
  height: '50%',
  padding: 20,
  borderRadius: 8,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column', 
  justifyContent: 'space-between', 
};

export const popupOverlay: CSSProperties = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
};

export const medievalType: CSSProperties = {
  color: '#8B4513',
  textAlign: 'center',
  fontFamily: 'MedievalSharp, cursive',
  fontSize: '50px',
  marginTop: '5px', 
};

export const ButtonStyle: React.CSSProperties = {
  //paddingTop: 5,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  //justifyContent: 'center',
  gap: '15px', 
  marginBottom: '10px',
};

export const ButtonStyle2: React.CSSProperties = {
  //paddingTop: 5,
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  //justifyContent: 'center',
  gap: '15px', 
  paddingLeft: '360px',
  marginBottom: '10px',
};

export const buttonStyleText: React.CSSProperties = {
  fontFamily: 'MedievalSharp, cursive', 
  fontSize: '35px',
  color: '#8B4513', 
  backgroundColor: '#D2B48C', 
  padding: '10px 20px', 
  border: 'none',
  cursor: 'pointer',
  borderRadius: '5px', 
};

export const textFieldDivStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '10vh',
  gap: '20px',
  marginTop: '5px',
};

export const textFieldDivStyle2: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '10vh',
  gap: '20px',
  marginTop: '20px',
};

export const textFieldBoxStyle: React.CSSProperties = {
  backgroundColor: '#D2B48C', 
  boxShadow: '0 0 5px 2px #8B4513', 
  color: 'white', 
  width: '200px',
  marginTop: '-18px',  
};

export const labelStyle: React.CSSProperties = {
  color: '#8B4513',
  textAlign: 'center',
  paddingLeft: '25px',
};

export const labelStyle2: React.CSSProperties = {
  color: '#8B4513',
  textAlign: 'center',
  paddingLeft: '90px',
};

export const inputTextStyle: React.CSSProperties = {
  color: '#8B4513'
};

export const medievalType2: CSSProperties = {
  color: '#8B4513',
  textAlign: 'center',
  fontFamily: 'MedievalSharp, cursive',
  fontSize: '25px',
  //marginTop: '5px', 
};