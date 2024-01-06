import { CSSProperties } from 'react';

const darkBrown = '#8B4513'; 
const lightBrown = '#d2b48c'; 
const woodenBrown = '#817c70'; 

export const backgroundContainer: CSSProperties = {
  height: '100vh',
  backgroundImage: 'url("/medieval-inn.gif")',
  backgroundSize: 'cover',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
};

export const tableContainer: CSSProperties = {
  width: '60%', 
  padding: '80px', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center', 
};

export const fadeInOut: CSSProperties = {
  animation: 'fadeInOut 5s infinite', 
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
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '30px', 
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

export const tableStyle: CSSProperties = {

  border: '2px solid ${woodenBrown}',
  margin: '10px 0px',
};

export const gridStyle: CSSProperties = {
  backgroundColor: lightBrown, 
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  width: '60%', 
  padding: '20px', 
  display: 'flex',
  flexDirection: 'column',
  gap: '10px', 
  justifyContent: 'center', 
  alignItems: 'center', 
  margin: '10px 0px',
  border: 'thin solid #817c70',
};

export const cellStyle: CSSProperties = {
  borderBottom: `5px solid ${darkBrown}`, 
  borderRight: `5px solid ${darkBrown}`, 
  textAlign: 'left',
};

export const textFieldDivStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '10vh',
  gap: '20px',
};

export const textFieldBoxStyle: React.CSSProperties = {
  backgroundColor: '#D2B48C', 
  boxShadow: '0 0 5px 2px #333', 
  color: 'white', 
  width: '350px',    
}

export const labelStyle: React.CSSProperties = {
  color: '#8B4513'
}

export const inputTextStyle: React.CSSProperties = {
  color: '#8B4513'
}

export const listStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: 360,
    backgroundColor: lightBrown,  
};
  
export const listContainer: CSSProperties = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  };