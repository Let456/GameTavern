import React from "react";


const imageUrl = process.env.PUBLIC_URL + '/backgroundCreateAccount.jpg';

export const backgroundDivStyle: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '100%',
};

export const textFieldDivStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: '20px',
};

export const textField2DivStyle: React.CSSProperties = {
    paddingTop: 25,
};

export const textFieldBoxStyle: React.CSSProperties = {
    backgroundColor: '#333', // Dark grey background
    boxShadow: '0 0 5px 2px #333', // Dark grey box shadow
    color: 'white', // Text color, adjust as needed
    width: '350px',    
}

export const labelStyle: React.CSSProperties = {
    color: 'lightblue'
}

export const inputTextStyle: React.CSSProperties = {
    color: 'lightblue'
}

export const createAccountButtonStyle: React.CSSProperties = {
    paddingTop: 25,
}

export const createAccStyle: React.CSSProperties = {
    backgroundColor: '#ddd',
    fontSize: '25px'
}