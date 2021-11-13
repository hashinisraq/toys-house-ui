import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { TextField, Typography, Button, Alert } from '@mui/material';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };


        fetch('https://immense-lake-11478.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setSuccess(true);
                }
            })


        e.preventDefault();
    }
    return (
        <Box sx={{ fontFamily: "Roboto", textAlign: "center", padding: "20px" }}>
            <Typography variant="h5" gutterBottom component="div">
                Make Admin
            </Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%', paddingBottom: "10px" }}
                    label="Email Address"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <br />
                <Button type="submit" variant="outlined">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Admin Made  successfull</Alert>}
        </Box>
    );
};

export default MakeAdmin;