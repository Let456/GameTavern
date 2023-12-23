import React from 'react';
import { backgroundContainer } from './BarMenu.styles';
import { useLocation } from 'react-router-dom';

const BarMenu = () => {

  const location = useLocation();
  const id = parseInt(location.state?.key, 10);
  console.log(id);

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
