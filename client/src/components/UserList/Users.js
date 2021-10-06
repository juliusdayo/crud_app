import { useSelector } from "react-redux"
import {Box,Table, TableBody, TableCell,TableContainer, TableHead,TableRow} from '@mui/material';

const Users = () => {
    const users = useSelector((state) => state.users);
    
   const list = users.map((user,key)=>
   <TableRow key={key}>
       <TableCell>
           {key+1}
       </TableCell>
       <TableCell>
           {user.firstName}
       </TableCell>
       <TableCell>
           {user.lastName}
       </TableCell>
       <TableCell>
           {user.gender}
       </TableCell>
       <TableCell>
           {user.age}
       </TableCell>
       <TableCell>
           {user.birthdate}
       </TableCell>
    </TableRow>
    )
        
   
    return(
        <Box>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Row ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Gender</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Birthdate</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}
export default Users;