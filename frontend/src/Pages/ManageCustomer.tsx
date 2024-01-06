import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { ButtonStyle, backgroundContainer, buttonStyleText, gridStyle, inputTextStyle, labelStyle, tableContainer, tableStyle, textFieldBoxStyle, textFieldDivStyle } from './ManageCustomer.styles';
import { Button, TextField } from '@mui/material';
import axios from 'axios';

interface Customer {
  id: number;
  customerName: string;
  email: string;
  age: number;
  password: string;
  wage: number; 
}


const ManageCustomer = () => {
  const location = useLocation();
  
  const id = parseInt(location.state?.key, 10);
  const [email, setEmail] = React.useState<string>("");
  const [name, setName] = React.useState<string>("");
  const [age, setAge] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [wage, setWage] = React.useState<string>("");
 
  
  const onChangeEmail = (event: any): void => {
    setEmail(event.target.value)
  }

  const onChangeName = (event: any): void => {
    setName(event.target.value)
  }

  const onChangeAge = (event: any): void => {
    setAge(event.target.value)
  }

  const onChangePassword = (event: any): void => {
    setPassword(event.target.value)
  }

  const onChangeWage = (event: any): void => {
    setWage(event.target.value)
  }

  

  console.log("admin id", id);

  const [customers, setCustomers] = useState<Customer[]>([]);
  const [selectedCustomer, setSelectedCustomer] = React.useState<Customer | null>(null);



  useEffect(() => {
    axios.get('http://localhost:8060/Customer/FindAll')
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching customers:', error);
      });
  }, []); 

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'customerName', headerName: 'customerName', width: 130 },
    { field: 'email', headerName: 'email', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    { field: 'wage', headerName: 'Wage', width: 130 },
  ];

  const handleSelectionChange = (selectionModel: any): void => {
    if (selectionModel.length > 0) {
      const   selectedCustomerId = selectionModel[0]; 
      const customer = customers.find((c) => c.id === selectedCustomerId) || null;
      setSelectedCustomer(customer);
      console.log("Selected customer", customer);
    } else {
      setSelectedCustomer(null);
      console.log("No row selected");
    }
  };


  const handleAddClick = () => {
  
    const customer = {
      email: email,
      customerName: name,
      age: age,
      password: password,
      wage: wage
    }

    axios.post(
      'http://localhost:8060/Customer/Insert',
      customer,
      {
        headers: {
          "Content-Type": "application/json",
        }
      }
    )
      .then((response) => {
        console.log(response);

        axios.get('http://localhost:8060/Customer/FindAll')
        .then((response) => {
          setCustomers(response.data);
        })
        .catch((error) => {
          console.error('Error fetching customers:', error);
        });

        alert(`Account Created Successfully`);
      })
      .catch((error) => {
        console.error(error.response.data);
        alert(`Error: ${error.response.data}`);
      });
  };

  const handleUpdateClick = () => {
    if (selectedCustomer) {
      const updatedCustomer: Partial<Customer> = {
        id: selectedCustomer.id,
        email: undefined,
        customerName: undefined,
        age: undefined,
        password: undefined,
        wage: undefined,
      };
  
      if (email !== null && email !== "") {
        updatedCustomer.email = email;
      }
      else
      {
        updatedCustomer.email = selectedCustomer.email
      }
  
      if (name !== null && name !== "") {
        updatedCustomer.customerName = name;
      }
      else
      {
        updatedCustomer.customerName = selectedCustomer.customerName
      }
  
      if (age !== null && age !== "") {
        updatedCustomer.age = parseInt(age, 10);
      }
      else
      {
        updatedCustomer.age = selectedCustomer.age
      }
  
      if (password !== null && password !== "") {
        updatedCustomer.password = password;
      }
      else
      {
        updatedCustomer.password = selectedCustomer.password
      }

      if (wage !== null && wage !== "") {
        updatedCustomer.wage = parseInt(wage, 10);
      }
      else
      {
        updatedCustomer.wage = selectedCustomer.wage
      }
  
      const filteredCustomer = Object.fromEntries(
        Object.entries(updatedCustomer).filter(([_, v]) => v !== undefined)
      );
  
      axios.post(
        'http://localhost:8060/Customer/Update',
        filteredCustomer,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
        .then((response) => {
          console.log(response);
  
          axios.get('http://localhost:8060/Customer/FindAll')
            .then((response) => {
              setCustomers(response.data);
            })
            .catch((error) => {
              console.error('Error fetching customers:', error);
            });
  
          setEmail("");
          setName("");
          setAge("");
          setPassword("");
        })
        .catch((error) => {
          console.error('Error updating customer:', error);
          alert(`Error: ${error.response.data}`);
        });
    } 
  };
  
  

  const handleDeleteClick = () => {
    if (selectedCustomer) {
    
      axios.post(
        'http://localhost:8060/Customer/Delete',
        selectedCustomer,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      )
        .then((response) => {
          console.log('Customer deleted successfully:', response.data);
          setCustomers((prevCustomers) =>
          prevCustomers.filter((customer) => customer.id !== selectedCustomer.id)
          );

          setSelectedCustomer(null);
        })
        .catch((error) => {
          console.error('Error deleting customer:', error);
        });
    } else {
      console.log('No customer selected for deletion');
    }
  };

  return (
    <div style={backgroundContainer}>
      <div style={tableContainer}>
        <DataGrid
          style={{ ...tableStyle, ...gridStyle }}
          rows={customers}
          columns={columns}
          autoPageSize
          pageSizeOptions={[5, 10]}
          checkboxSelection
          onRowSelectionModelChange={handleSelectionChange}
          getRowId={(row) => row.id}
        />
        <div style={ButtonStyle}>
          <Button style={buttonStyleText} onClick={handleAddClick} variant="contained">
            Add
          </Button>
          <Button style={buttonStyleText} onClick={handleDeleteClick} variant="contained">
            Delete
          </Button>
          <Button style={buttonStyleText} onClick={handleUpdateClick} variant="contained">
            Update
          </Button>
        </div>
        <div style={textFieldDivStyle}>
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            InputProps={{ style: labelStyle }}
            InputLabelProps={{ style: inputTextStyle }}
            style={textFieldBoxStyle}
            onChange={onChangeEmail}
          />
          <TextField
            id="standard-basic"
            label="Name"
            variant="standard"
            InputProps={{ style: labelStyle }}
            InputLabelProps={{ style: inputTextStyle }}
            style={textFieldBoxStyle}
            onChange={onChangeName}
          />
          <TextField
            id="standard-basic"
            label="Age"
            variant="standard"
            InputProps={{ style: labelStyle }}
            InputLabelProps={{ style: inputTextStyle }}
            style={textFieldBoxStyle}
            onChange={onChangeAge}
          />
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            InputProps={{ style: labelStyle }}
            InputLabelProps={{ style: inputTextStyle }}
            style={textFieldBoxStyle}
            onChange={onChangePassword}
          />
          <TextField
            id="standard-basic"
            label="Wage"
            variant="standard"
            InputProps={{ style: labelStyle }}
            InputLabelProps={{ style: inputTextStyle }}
            style={textFieldBoxStyle}
            onChange={onChangeWage}
          />
        </div>
      </div>
    </div>
  );
};

export default ManageCustomer;
