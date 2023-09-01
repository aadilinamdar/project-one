import React from 'react';
import Button from '@mui/material/Button';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import Stack from '@mui/material/Stack';



const Fileds = ({ Name, Department, Mobile, index }) => {
    return (

        <div className='data_val'>
            <h3>{Name}</h3>
            <h3>{Department}</h3>
            <h3>{Mobile}</h3>
            <Stack >
                <Button variant="text" color="error">
                    <RemoveCircleIcon />
                </Button>
            </Stack>
        </div>

    );
}

export default Fileds;
