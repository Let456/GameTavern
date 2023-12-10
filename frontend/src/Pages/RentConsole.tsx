import React from 'react';
import { backgroundContainer } from './RentConsole.styles';

const RentConsole = () => {
  return (
    <div>
      <video autoPlay loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="/hogwarts.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default RentConsole;
