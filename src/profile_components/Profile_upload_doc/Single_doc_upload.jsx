import React, { useState } from 'react';
import { Button, Paper, Typography } from '@mui/material';

const Single_doc_upload = ({ label }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    return (
        <Paper style={{ padding: '20px', margin: '10px 0' }}>
            <Typography variant="h6">{label}</Typography>
            <input type="file" onChange={handleFileChange} />
            {file && <Typography variant="body1">{file.name}</Typography>}
        </Paper>
    );
};

export default Single_doc_upload;
