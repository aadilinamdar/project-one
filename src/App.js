import './App.css';
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Header from './Components/Header';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


function App() {
  const [Name, setName] = useState(" ")
  const [Department, setDepartment] = useState(" ")
  const [Mobile, setMobile] = useState(" ")
  const [data, setdata] = useState([])

  const addData = () => {
    setdata([...data, { Name, Department, Mobile }]);
    setName("");
    setDepartment("");
    setMobile("");
  }
  const deleteItem = (index) => {
    let arr = data;
    arr.splice(index, 1)
    setdata([...arr])
  }

  return (
    <div className="App">
      <Header />
      <div className='form'>
        <Stack direction="row" spacing={2}>
          <TextField value={Name} onChange={(e) => setName(e.target.value)} id="filled-basic" label="Name" variant="filled" />
          <TextField value={Department} onChange={(e) => setDepartment(e.target.value)} id="filled-basic" label="Department" variant="filled" />
          <TextField value={Mobile} onChange={(e) => setMobile(e.target.value)} id="filled-basic" label="Mobile" variant="filled" />
          <Button onClick={addData} variant="contained" color="success">
            Add
          </Button>
        </Stack>
      </div>

      {/*data */}
      <div className='data'>
        <div className='data_val'>
          <h3>Name</h3>
          <h3>Department</h3>
          <h3>Mobile</h3>
          <h3>Remove</h3>
        </div>
        {
          data.map((e, index) => {
            return (
              <div key={index} className='field_val'>
                <h3>{e.Name}</h3>
                <h3>{e.Department}</h3>
                <h3>{e.Mobile}</h3>
                <Stack >
                  <Button onClick={() => deleteItem(index)} variant="text" color="error">
                    <RemoveCircleIcon />
                  </Button>
                </Stack>
              </div>)
          })
        }
      </div>
    </div>
  );
}

export default App;
