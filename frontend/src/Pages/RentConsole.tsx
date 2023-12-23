import React from 'react';
import { backgroundContainer, consoleIcon, consoleIcon2, consoleIcon3, consoleIcon4 } from './RentConsole.styles';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import { useLocation } from 'react-router-dom';

const RentConsole = () => {

  const location = useLocation();
  const id = parseInt(location.state?.key, 10);
  console.log(id);

  const handleConsoleIconClick = (id: number) => {
    console.log(`Icon ${id} clicked!`);
  };

  const iconsData = [
    { id: 1, onClick: handleConsoleIconClick },
    { id: 2, onClick: handleConsoleIconClick },
    { id: 3, onClick: handleConsoleIconClick },
    { id: 4, onClick: handleConsoleIconClick },
    { id: 5, onClick: handleConsoleIconClick },
  ];

  const iconsData2 = [
    { id: 6, onClick: handleConsoleIconClick },
    { id: 7, onClick: handleConsoleIconClick },
    { id: 8, onClick: handleConsoleIconClick },
    { id: 9, onClick: handleConsoleIconClick },
    { id: 10, onClick: handleConsoleIconClick },
  ];

  const iconsData3 = [
    { id: 11, onClick: handleConsoleIconClick },
    { id: 12, onClick: handleConsoleIconClick },
    { id: 13, onClick: handleConsoleIconClick },
    { id: 14, onClick: handleConsoleIconClick },
    { id: 15, onClick: handleConsoleIconClick },
  ];

  const iconsData4 = [
    { id: 16, onClick: handleConsoleIconClick },
    { id: 17, onClick: handleConsoleIconClick },
    { id: 18, onClick: handleConsoleIconClick },
    { id: 19, onClick: handleConsoleIconClick },
    { id: 20, onClick: handleConsoleIconClick },
  ];

  return (
    <div>
      <video autoPlay muted loop style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
        <source src="/hogwarts.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {iconsData.map((iconData,index) => (
        <SportsEsportsIcon
          key={iconData.id}
          style={{
            ...consoleIcon,
            top: `${10 + index * 20}%`, 
          }}
          onClick={() => handleConsoleIconClick(iconData.id)}
        />
      ))}

      {iconsData2.map((iconData,index) => (
        <SportsEsportsIcon
          key={iconData.id}
          style={{
            ...consoleIcon2,
            top: `${10 + index * 20}%`, 
          }}
          onClick={() => handleConsoleIconClick(iconData.id)}
        />
      ))}


      {iconsData3.map((iconData,index) => (
        <SportsEsportsIcon
          key={iconData.id}
          style={{
            ...consoleIcon3,
            top: `${10 + index * 20}%`, 
          }}
          onClick={() => handleConsoleIconClick(iconData.id)}
        />
      ))}

      {iconsData4.map((iconData,index) => (
        <SportsEsportsIcon
          key={iconData.id}
          style={{
            ...consoleIcon4,
            top: `${10 + index * 20}%`, 
          }}
          onClick={() => handleConsoleIconClick(iconData.id)}
        />
      ))}

    </div>
  );
};

export default RentConsole;
