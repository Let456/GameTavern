import React, { CSSProperties } from 'react'

export const backgroundContainer: CSSProperties = {
    height: '100vh',
    backgroundImage: 'url("/RentPc.gif")',
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