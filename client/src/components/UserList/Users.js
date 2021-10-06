import { useSelector } from "react-redux"
import {Button,Paper,Table, TableBody, TableCell,TableContainer, TableHead,TableRow} from '@mui/material';
import { useDispatch } from "react-redux";
import { deleteUser } from "../../actions/users";

const Users = () => {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
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
       <TableCell>
           <Button onClick={()=>dispatch(deleteUser(user._id))}>Delete</Button>
       </TableCell>
    </TableRow>
    )
        
   
    return(
        <Paper>
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
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    )
}
export default Users;