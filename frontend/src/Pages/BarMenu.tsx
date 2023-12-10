import React from 'react';
import { backgroundContainer } from './BarMenu.styles';

const BarMenu = () => {

  return (
    <div>
      <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="/bucatarie.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BarMenu;
