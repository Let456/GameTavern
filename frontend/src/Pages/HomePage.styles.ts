

import { CSSProperties } from 'react';

export const backgroundContainer: CSSProperties = {
  height: '100vh',
  backgroundImage: 'url("/medieval-inn.gif")',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start', 
  alignItems: 'center',
};

export const fadeInOut: CSSProperties = {
  animation: 'fadeInOut 5s infinite', // 
};

export const additionalContent: CSSProperties = {
  color: 'white',
  textAlign: 'center',
};

export const medievalType: CSSProperties = {
  color: '#c0ad8f',
  textAlign: 'center',
  fontFamily: 'MedievalSharp, cursive',
  fontSize: '50px',
  marginTop: '15vh', 
};

export const ButtonStyle: React.CSSProperties = {
  //paddingTop: 5,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '15px', 
  //marginTop: '5px',
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
