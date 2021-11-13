import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const url = `https://immense-lake-11478.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);


    const handleUpdate = order => {
        const selectedOrder = { order };
        if (window.confirm("Are you sure to shipped the order?")) {
            fetch('https://immense-lake-11478.herokuapp.com/orders', {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectedOrder)
            })
                .then(res => res.json())
                .then(data => {
                })
        }
    };

    const handleDelete = id => {
        if (window.confirm("Are you sure to delete your order?")) {
            const url = `https://immense-lake-11478.herokuapp.com/addToCart/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = orders.filter(order => order._id !== id);
                    setOrders(remaining);
                })
        }

    }


    return (
        <Box sx={{ fontFamily: "Roboto" }}>
            <h4 style={{ textAlign: "center" }}>All Orders</h4>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Toys Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.toyName}
                                </TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.phone}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">
                                    {row.status === "pending" ? <Box>
                                        <Button
                                            onClick={() => handleUpdate(row)}
                                            variant="outlined">Update</Button>
                                        <Button
                                            onClick={() => handleDelete(row._id)}
                                            variant="outlined" color="error">Delete</Button>
                                    </Box> : <Box>
                                        <Button
                                            onClick={() => handleUpdate(row)}
                                            variant="outlined" disabled>Update</Button>
                                        <Button
                                            onClick={() => handleDelete(row._id)}
                                            variant="outlined" color="error">Delete</Button>
                                    </Box>}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ManageOrders;