import React, { useEffect, useState } from 'react';
import { ButtonStyle, backgroundContainer, contentContainer, videoStyle, tableContainer, gridStyle, textFieldDivStyle, textFieldBoxStyle, labelStyle, buttonStyleText, medievalType2, labelStyle2, tableStyle } from './BarMenu.styles';
import { useLocation } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

interface barItem {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
}

interface Customer {
  id: number;
  customerName: string;
  email: string;
  age: number;
  password: string;
  wage: number; 
}

const BarMenu = () => {
  const location = useLocation();
  const id = parseInt(location.state?.key, 10);
  console.log(id);
  const [barItems, setBarItems] = useState<barItem[]>([]);
  const [selectedBarItem, setSelectedBarItem] = React.useState<barItem | null>(null);
  const [barItemName, setBarItemName] = useState<string>("");
  const [barItemPrice, setBarItemPrice] = useState<string>("");
  const [barItemDescription, setBarItemDescription] = useState<string>("");
  const [barItemStock, setBarItemStock] = useState<string>("");
  const [customer, setCustomer] = React.useState<Customer | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const onChangeBarItemName = (event: any): void => {
    setBarItemName(event.target.value)
  }

  const onChangeBarItemPrice = (event: any): void => {
    setBarItemPrice(event.target.value)
  }

  const onChangeBarItemDescription = (event: any): void => {
    setBarItemDescription(event.target.value)
  }

  const onChangeBarItemStock = (event: any): void => {
    setBarItemStock(event.target.value)
  }

  useEffect(() => {
    axios.get('http://localhost:8060/BarItem/FindAll')
      .then((response) => {
        setBarItems(response.data);
      })
      .catch((error) => {
        console.error('Error fetching bar items:', error);
      });
  }, []);

  useEffect(() => {
    axios
      .post('http://localhost:8060/Customer/GetById', id, {headers: {"Content-Type": "application/json"
    }})
      .then((response) => {
        setCustomer(response.data)
        if(response.data.admin == 1)
          setIsAdmin(true);
        else
          setIsAdmin(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [id]);

  const onBuy = (event: any): void => {

    console.log(selectedBarItem);
    console.log(customer);

    const CustomerItem = 
    {
      customer: customer,
      barItem: selectedBarItem
    }

    if (selectedBarItem && customer) {
      axios
        .post('http://localhost:8060/BarItem/Buy', CustomerItem, {
          headers: { 'Content-Type': 'application/json' },
        })
        .then((response) => {
          alert(response.data);
          axios.get('http://localhost:8060/BarItem/FindAll')
          .then((response) => {
            setBarItems(response.data);
          })
          .catch((error) => {
            console.error('Error fetching bar items:', error);
          });
        })
        .catch((error) => {
          alert(`Error: ${error.response.data}`);
        });
    } else {
      alert("Customer or selectedBarItem is not available.");
    }
  };
  

  const handleSelectionChange = (selectionModel: any): void => {
    const selectedBarItemId = selectionModel[0];
    const barItem = barItems.find((c) => c.id === selectedBarItemId) || null;
    setSelectedBarItem(barItem);
  };

  const onInsert = (event: any): void => {
    console.log(barItemName)
    console.log(barItemPrice)
    console.log(barItemDescription)

    const barItem = {
      name: barItemName,
      price: barItemPrice,
      description: barItemDescription,
      stock: barItemStock
    }

    axios
      .post("http://localhost:8060/BarItem/Insert", barItem, {
        headers: {"Content-Type": "application/json"}
      }).
        then((response: any) : void =>{
        console.log(response)
        axios.get('http://localhost:8060/BarItem/FindAll')
        .then((response) => {
          setBarItems(response.data);
        })
        .catch((error) => {
          console.error('Error fetching bar items:', error);
        });
        alert(`BarItem Inserted Succesfuly`);
      }).
        catch((error) => {
          console.error(error.response.data)
          alert(`Error: ${error.response.data}`);
      })

  }

  const onUpdate = () => {
    if (selectedBarItem) {
      const updatedBarItem: Partial<barItem> = {
        id: selectedBarItem.id,
        name: undefined,
        price: undefined,
        description: undefined,
        stock: undefined
      };
  
      if (barItemName !== null && barItemName !== "") {
        updatedBarItem.name = barItemName;
      }
      else
      {
        updatedBarItem.name = selectedBarItem.name
      }
  
      if (barItemPrice !== null && barItemPrice !== "") {
        updatedBarItem.price = parseInt(barItemPrice, 10);
      }
      else
      {
        updatedBarItem.price = selectedBarItem.price
      }
  
      if (barItemDescription !== null && barItemDescription !== "") {
        updatedBarItem.description = barItemDescription
      }
      else
      {
        updatedBarItem.description = selectedBarItem.description
      }

      if (barItemStock !== null && barItemStock !== "") {
        updatedBarItem.stock = parseInt(barItemStock, 10);
      }
      else
      {
        updatedBarItem.stock = selectedBarItem.stock
      }

  
      const filteredBarItem = Object.fromEntries(
        Object.entries(updatedBarItem).filter(([_, v]) => v !== undefined)
      );
  
      axios.post(
        'http://localhost:8060/BarItem/Update',
        filteredBarItem,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
        .then((response) => {
          console.log(response);
  
          axios.get('http://localhost:8060/BarItem/FindAll')
            .then((response) => {
              setBarItems(response.data);
            })
            .catch((error) => {
              console.error('Error fetching barItems:', error);
            });
  
          setBarItemName("");
          setBarItemPrice("");
          setBarItemDescription("")
        })
        .catch((error) => {
          console.error('Error updating barItems:', error);
          alert(`Error: ${error.response.data}`);
        });
    } 
  };

  const onDelete = (): void => {
    if (!selectedBarItem) {
      alert("No row selected");
      return;
    }

    axios.post('http://localhost:8060/BarItem/Delete', selectedBarItem)
      .then((response) => {
        console.log(response);
        axios.get('http://localhost:8060/BarItem/FindAll')
        .then((response) => {
          setBarItems(response.data);
        })
        .catch((error) => {
          console.error('Error fetching bar items:', error);
        });
        alert("BarItem deleted successfully");
      })
      .catch((error) => {
        console.error('Error deleting bar item:', error);
        alert(`Error: ${error.message}`);
      });
  };

  const columns: GridColDef[] = [
    { field: 'name', headerName: 'Product Name', width: 150 },
    { field: 'price', headerName: 'Price', width: 100 },
    { field: 'description', headerName: 'Description', width: 200 },
    { field: 'stock', headerName: 'Stock', width: 100 },
  ];

  return (
    <div style={backgroundContainer}>
      <video autoPlay muted loop style={videoStyle}>
        <source src="/bucatarie.mp4" type="video/mp4" />
      </video>
      <div style={contentContainer}>
        <div style={{ height: 500, width: '100%' }}>
          <DataGrid
            style={{ ...tableStyle, ...gridStyle }}
            rows={barItems}
            columns={columns}
            autoPageSize
            checkboxSelection
            onRowSelectionModelChange={handleSelectionChange}
            getRowId={(row) => row.id}
          />
          <div style={ButtonStyle}>
            {isAdmin && (
              <>
                <Button style={buttonStyleText} variant="contained">
                  Buy
                </Button>
                <Button style={buttonStyleText} onClick={onInsert} variant="contained">
                  Add
                </Button>
                <Button style={buttonStyleText} onClick={onDelete} variant="contained">
                  Delete
                </Button>
                <Button style={buttonStyleText} onClick={onUpdate} variant="contained">
                  Update
                </Button>
              </>
            )}
            {!isAdmin && (
              <Button style={buttonStyleText} onClick={onBuy} variant="contained">
                Buy
              </Button>
            )}
          </div>
          {isAdmin && (
            <div style={textFieldDivStyle}>
              <TextField
                id="standard-basic"
                label="ProductName"
                variant="standard"
                InputProps={{ style: { ...labelStyle2, ...medievalType2 } }}
                InputLabelProps={{ style: { ...labelStyle, ...medievalType2 } }}
                style={textFieldBoxStyle}
                onChange={onChangeBarItemName}
              />
              <TextField
                id="standard-basic"
                label="Price"
                variant="standard"
                InputProps={{ style: { ...labelStyle2, ...medievalType2 } }}
                InputLabelProps={{ style: { ...labelStyle, ...medievalType2 } }}
                style={textFieldBoxStyle}
                onChange={onChangeBarItemPrice}
              />
              <TextField
                id="standard-basic"
                label="Description"
                variant="standard"
                InputProps={{ style: { ...labelStyle2, ...medievalType2 } }}
                InputLabelProps={{ style: { ...labelStyle, ...medievalType2 } }}
                style={textFieldBoxStyle}
                onChange={onChangeBarItemDescription}
              />
              <TextField
                id="standard-basic"
                label="Stock"
                variant="standard"
                InputProps={{ style: { ...labelStyle2, ...medievalType2 } }}
                InputLabelProps={{ style: { ...labelStyle, ...medievalType2 } }}
                style={textFieldBoxStyle}
                onChange={onChangeBarItemStock}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BarMenu;
