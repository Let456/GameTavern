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

  export const queueIcon: CSSProperties = {
    color: 'white',
    fontSize: 50,
    position: 'absolute',
    top: '50%', left: '50%',
    transform: 'translate(-50%, -50%)',
    cursor: 'pointer',
  }