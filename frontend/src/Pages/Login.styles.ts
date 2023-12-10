import React from "react";

const imageUrl = process.env.PUBLIC_URL + '/teemo.jpg';

export const backgroundDivStyle: React.CSSProperties = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: '100% 100%', // Stretch the image
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
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

export const ButtonStyle: React.CSSProperties = {
    //paddingTop: 25,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '50px'
}

export const logInStyle: React.CSSProperties = {
    backgroundColor: '#ddd',
    fontSize: '25px'
}

export const createAccStyle: React.CSSProperties = {
    backgroundColor: '#ddd',
    fontSize: '25px'
}

