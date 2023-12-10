import React from 'react';
import { backgroundContainer, queueIcon } from './RentPc.styles';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';

const RentPc = () => {
  const handleQueueIconClick = () => {
    // Add your logic here for what should happen when the icon is clicked
    console.log('Icon clicked!');
  };

  return (
    <div>
      <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="/hogwarts.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <AddToQueueIcon style={queueIcon} onClick={handleQueueIconClick}/>

    </div>
  );
};

export default RentPc;
