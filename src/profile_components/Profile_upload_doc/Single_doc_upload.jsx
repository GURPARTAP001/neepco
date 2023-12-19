import React, { useState } from 'react';
import { Paper, Typography, TextField } from '@mui/material';

const Single_doc_upload = ({ label }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

   
    

    return (
        <Paper style={{ padding: '20px', margin: '10px 0' }}>
            <Typography variant="h6">{label}</Typography>
            <TextField id='Single_doc_upload'
              label="Input" 
              variant="outlined" 
              fullWidth 
              onChange={handleInputChange} 
              value={inputValue}
              style={{ marginTop: '10px' }}
            />
            {inputValue && <Typography variant="body1">Entered: {inputValue}</Typography>}
        </Paper>
    );
};

export default Single_doc_upload;
