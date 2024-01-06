// SeeOrders.tsx

import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, ListItemButton, Checkbox, Button } from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { ButtonStyle, backgroundContainer, buttonStyleText, listContainer, listStyle, medievalType } from './SeeOrders.styles';
import { on } from 'events';

interface Console {
  id: number;
  pricePerHour: number;
  consoleType: number;
}

interface Pc {
  id: number;
  pricePerHour: number;
  pcType: number;
}

interface BarItem {
  id: number;
  name: string;
}

interface BarOrder {
  id: number;
  price: number;
  barItem: BarItem;
}

interface Customer {
  id: number;
  customerName: string;
  email: string;
  age: number;
  password: string;
  wage: number;
  pcList: Pc[];
  consoleList: Console[];
  barOrderList: BarOrder[];
}

interface BarOrderCustomer {
  barOrderId: number;
  customerId: number;
}

interface ConsoleCustomer {
    consoleId: number;
    customerId: number;
}

interface CustomerPc {
    pcId: number;
    customerId: number;
}

interface PcListProps {
  pc: Pc;
  selected: boolean;
  onToggle: () => void;
}

interface ConsoleListProps {
  console: Console;
  selected: boolean;
  onToggle: () => void;
}

interface BarOrderListProps {
  barOrder: BarOrder;
  selected: boolean;
  onToggle: () => void;
}

const PcList: React.FC<PcListProps> = ({ pc, selected, onToggle }) => {
  const labelId = `checkbox-list-label-${pc.id}`;

  return (
    <ListItem disablePadding>
      <ListItemButton role={undefined} onClick={onToggle} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={selected}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={`Pc ${pc.id} PcType ${pc.pcType}`} />
      </ListItemButton>
    </ListItem>
  );
};

const ConsoleList: React.FC<ConsoleListProps> = ({ console, selected, onToggle }) => {
  const labelId = `checkbox-list-label-${console.id}`;

  return (
    <ListItem disablePadding>
      <ListItemButton role={undefined} onClick={onToggle} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={selected}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={`Console ${console.id} ConsoleType ${console.consoleType}`} />
      </ListItemButton>
    </ListItem>
  );
};

const BarOrderList: React.FC<BarOrderListProps> = ({ barOrder, selected, onToggle }) => {
  const labelId = `checkbox-list-label-${barOrder.id}`;

  return (
    <ListItem disablePadding>
      <ListItemButton role={undefined} onClick={onToggle} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={selected}
            tabIndex={-1}
            disableRipple
            inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>
        <ListItemText id={labelId} primary={`Bar Order ${barOrder.barItem.name} Price ${barOrder.price}`} />
      </ListItemButton>
    </ListItem>
  );
};

const SeeOrders = () => {
  const location = useLocation();
  const id = parseInt(location.state?.key, 10);
  const [selectedPcItem, setSelectedPcItem] = useState<number | null>(null);
  const [selectedConsoleItem, setSelectedConsoleItem] = useState<number | null>(null);
  const [selectedBarOrderItem, setSelectedBarOrderItem] = useState<number | null>(null);
  const [customerData, setCustomerData] = useState<Customer | null>(null);
  const [pcList, setPcList] = useState<Pc[]>([]);
  const [consoleList, setConsoleList] = useState<Console[]>([]);
  const [barOrderList, setBarOrderList] = useState<BarOrder[]>([]);

  useEffect(() => {
    axios
      .post('http://localhost:8060/Customer/GetById', id, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        setCustomerData(response.data);
        setPcList(response.data.pcList);
        setConsoleList(response.data.consoleList);
        setBarOrderList(response.data.barOrderList);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  useEffect(() => {
    if (customerData) {
      setPcList(customerData.pcList);
      setConsoleList(customerData.consoleList);
      setBarOrderList(customerData.barOrderList);
    }
  }, [customerData]);

  const handlePcToggle = (value: number) => () => {
    setSelectedPcItem(value === selectedPcItem ? null : value);
  };

  const handleConsoleToggle = (value: number) => () => {
    setSelectedConsoleItem(value === selectedConsoleItem ? null : value);
  };

  const handleBarOrderToggle = (value: number) => () => {
    setSelectedBarOrderItem(value === selectedBarOrderItem ? null : value);
  };

  
  console.log(customerData);
  console.log(pcList);
  console.log(consoleList);
  console.log(barOrderList);
  console.log("Selected PC item:", selectedPcItem);
  console.log("Selected Console item:", selectedConsoleItem);
  console.log("Selected Bar Order item:", selectedBarOrderItem);

  const onDeleteBarOrder = (event: any): void => {

    const BarOrderCustomer = {
        barOrderId: selectedBarOrderItem,
        customerId: id
    }

    axios
    .post('http://localhost:8060/Customer/UpdateBarOrders', BarOrderCustomer, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
      axios
      .post('http://localhost:8060/BarOrder/DeleteById', selectedBarOrderItem, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        alert(response.data);
        axios
        .post('http://localhost:8060/Customer/GetById', id, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
          setCustomerData(response.data);
          setPcList(response.data.pcList);
          setConsoleList(response.data.consoleList);
          setBarOrderList(response.data.barOrderList);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });

      })
      .catch((error) => {
        alert(`Error: ${error.response.data}`);
      });
    })
    .catch((error) => {
      alert(`Error: ${error.response.data}`);
    });

  };

  const onDeleteConsole = (event: any): void => {

    const ConsoleCustomer = {
        consoleId: selectedConsoleItem,
        customerId: id
    }

    axios
    .post('http://localhost:8060/Console/UpdateConsoleList', ConsoleCustomer, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
        axios
        .post('http://localhost:8060/Customer/GetById', id, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
          setCustomerData(response.data);
          setPcList(response.data.pcList);
          setConsoleList(response.data.consoleList);
          setBarOrderList(response.data.barOrderList);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    })
    .catch((error) => {
      alert(`Error: ${error.response.data}`);
    });

  };

  const onDeletePc = (event: any): void => {

    const CustomerPc = {
        pcId: selectedPcItem,
        customerId: id
    }

    axios
    .post('http://localhost:8060/Pc/UpdatePcList', CustomerPc, {
      headers: { 'Content-Type': 'application/json' },
    })
    .then((response) => {
        axios
        .post('http://localhost:8060/Customer/GetById', id, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
          setCustomerData(response.data);
          setPcList(response.data.pcList);
          setConsoleList(response.data.consoleList);
          setBarOrderList(response.data.barOrderList);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    })
    .catch((error) => {
      alert(`Error: ${error.response.data}`);
    });

  };

  return (
    <div style={backgroundContainer}>
      <h1 style={medievalType}>Orders</h1>

      <div style={listContainer}>
        <List sx={listStyle}>
          {pcList.map((pc) => (
            <PcList
              key={pc.id}
              pc={pc}
              selected={pc.id === selectedPcItem}
              onToggle={handlePcToggle(pc.id)}
            />
          ))}
        </List>

        <List sx={listStyle}>
          {consoleList.map((console) => (
            <ConsoleList
              key={console.id}
              console={console}
              selected={console.id === selectedConsoleItem}
              onToggle={handleConsoleToggle(console.id)}
            />
          ))}
        </List>

        <List sx={listStyle}>
          {barOrderList.map((barOrder) => (
            <BarOrderList
              key={barOrder.id}
              barOrder={barOrder}
              selected={barOrder.id === selectedBarOrderItem}
              onToggle={handleBarOrderToggle(barOrder.id)}
            />
          ))}
        </List>
      </div>
      <div style={ButtonStyle}>
        <Button style={buttonStyleText} onClick={onDeletePc} variant="contained">
            Delete
        </Button>
        <Button style={buttonStyleText} onClick={onDeleteConsole} variant="contained">
            Delete
        </Button>
        <Button style={buttonStyleText} onClick={onDeleteBarOrder} variant="contained">
            Delete
        </Button>
        </div>
    </div>
  );
};

export default SeeOrders;
