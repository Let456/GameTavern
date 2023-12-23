import { createStyles, createTheme } from '@mui/material';
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
  paddingTop: 25,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px', // Adjust the gap property
  marginTop: '20px',
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

const darkBrown = '#8B4513'; // Dark brown color

const theme = createTheme();

export const tableStyle = {
  root: {
    height: '100vh',
    backgroundImage: 'url("/medieval-inn.gif")',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column' as const,
    justifyContent: 'center',
    alignItems: 'center',
  },
  grid: {
    width: '60%',
    backgroundColor: darkBrown,
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
    flex: 1, // Allow the container to grow to fill the available space
  },
  cell: {
    borderBottom: `2px solid ${darkBrown}`,
    borderRight: `2px solid ${darkBrown}`,
    padding: '8px',
    textAlign: 'left',
  },
  headerCell: {
    background: `linear-gradient(to bottom, #D2B48C 0%, #D2B48C 100%)`,
    borderBottom: `2px solid ${darkBrown}`,
    padding: '8px',
    textAlign: 'left',
  },
};