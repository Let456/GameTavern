import React from 'react';
import { backgroundContainer, queueIcon, queueIcon2, queueIcon3, queueIcon4 } from './RentPc.styles';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import { useLocation, useParams } from 'react-router-dom';

const RentPc = () => {

  const location = useLocation();
  const id = parseInt(location.state?.key, 10);
  console.log(id);
  

  const handleQueueIconClick = (id: number) => {
    console.log(`Icon ${id} clicked!`);
  };

  const iconsData = [
    { id: 1, onClick: handleQueueIconClick },
    { id: 2, onClick: handleQueueIconClick },
    { id: 3, onClick: handleQueueIconClick },
    { id: 4, onClick: handleQueueIconClick },
    { id: 5, onClick: handleQueueIconClick },
  ];

  const iconsData2 = [
    { id: 6, onClick: handleQueueIconClick },
    { id: 7, onClick: handleQueueIconClick },
    { id: 8, onClick: handleQueueIconClick },
    { id: 9, onClick: handleQueueIconClick },
    { id: 10, onClick: handleQueueIconClick },
  ];

  const iconsData3 = [
    { id: 11, onClick: handleQueueIconClick },
    { id: 12, onClick: handleQueueIconClick },
    { id: 13, onClick: handleQueueIconClick },
    { id: 14, onClick: handleQueueIconClick },
    { id: 15, onClick: handleQueueIconClick },
  ];

  const iconsData4 = [
    { id: 16, onClick: handleQueueIconClick },
    { id: 17, onClick: handleQueueIconClick },
    { id: 18, onClick: handleQueueIconClick },
    { id: 19, onClick: handleQueueIconClick },
    { id: 20, onClick: handleQueueIconClick },
  ];


  return (
    <div style={backgroundContainer}>
      <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="/hogwarts.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {iconsData.map((iconData,index) => (
        <AddToQueueIcon
          key={iconData.id}
          style={{
            ...queueIcon,
            top: `${10 + index * 20}%`, 
          }}
          onClick={() => handleQueueIconClick(iconData.id)}
        />
      ))}

      {iconsData2.map((iconData,index) => (
        <AddToQueueIcon
          key={iconData.id}
          style={{
            ...queueIcon2,
            top: `${10 + index * 20}%`, 
          }}
          onClick={() => handleQueueIconClick(iconData.id)}
        />
      ))}

      {iconsData3.map((iconData,index) => (
        <AddToQueueIcon
          key={iconData.id}
          style={{
            ...queueIcon3,
            top: `${10 + index * 20}%`, 
          }}
          onClick={() => handleQueueIconClick(iconData.id)}
        />
      ))}

      {iconsData4.map((iconData,index) => (
        <AddToQueueIcon
          key={iconData.id}
          style={{
            ...queueIcon4,
            top: `${10 + index * 20}%`, 
          }}
          onClick={() => handleQueueIconClick(iconData.id)}
        />
      ))}

    </div>
  );
};

export default RentPc;
