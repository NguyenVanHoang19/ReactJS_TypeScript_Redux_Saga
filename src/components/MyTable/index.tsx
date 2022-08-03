import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { selectUsers } from '../../redux/slice/users';
import { useAppSelector } from '../../redux/store/hooks';
import { DELETE_USER_BY_ID, GET_USERS } from '../../redux/types';

const MyTable = () => {
    const dispatch = useDispatch();
    const users = useAppSelector(selectUsers);

    useEffect(() => {
        dispatch({ type: GET_USERS });
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ mixWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Email</TableCell>
                        <TableCell align="right">Password</TableCell>
                        <TableCell align="right">Edit</TableCell>
                        <TableCell align="right">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((item) => (
                        <TableRow
                            key={item.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="item">
                                {item.name}
                            </TableCell>
                            <TableCell align="right">{item.email}</TableCell>
                            <TableCell align="right">{item.password}</TableCell>
                            <TableCell align="right">
                                <Button fullWidth variant="contained">Edit</Button>
                            </TableCell>
                            <TableCell align="right">
                                <Button onClick={() => dispatch({ type: DELETE_USER_BY_ID, data: { id: item.id } })} fullWidth variant="contained">Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default MyTable;