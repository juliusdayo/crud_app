import { useSelector } from "react-redux"
import {Button,Paper,Table, TableBody, TableCell,TableContainer, TableHead,TableRow} from '@mui/material';
import { useDispatch } from "react-redux";
<<<<<<< Updated upstream
import { deleteUser } from "../../actions/users";
=======
import { deleteUser,updateUser } from "../../actions/users";
import {Modal,Button,Paper,Box,Table, TableBody, TableCell,TableContainer, TableHead,TableRow} from '@mui/material';
import {TextField,Card,CardHeader} from '@mui/material';
import { useState } from "react";

const Users = () => {

    const [modalData, setModalData] = useState({firstName: '', lastName:'', gender:'',age:'',birthdate: ''});
    const [open, setOpen] = useState(false);
    const [currentId, setCurrentId] = useState(null);
    const handleOpen = (e) =>{setOpen(true); console.log(modalData); setCurrentId(e.target.value)};
    const handleClose = () => setOpen(false);

    const calculateAge = (date) =>{
        const birthdate = new Date(date);
        const monthDiff = Date.now() - birthdate.getTime();
        const ageDiff  = new Date(monthDiff);
        const year = ageDiff.getUTCFullYear();
        const aget = year-1970;
        if(aget<0 || aget==='NaN'){
            return 'Invalid Birthdate'
        }
        return aget
        
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        
        dispatch(updateUser(currentId,modalData))
    }
   
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
       </TableCell>
    </TableRow>
    )
        
   
=======
           <Button onClick={handleOpen}
           onMouseUp={()=>setModalData({...modalData, ...user})} value={user._id}>Update</Button>
           
       </TableCell>
    </TableRow>
    )
    
    const modal = (

        <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
        <form>
            <Card variant="dark">
                <CardHeader title="Update User"/>
{/* First Name */}
                <TextField v
                value={modalData.firstName} 
                name="firstName" 
                variant="standard" 
                label="First Name" 
                size="small"
                onChange={(e)=> setModalData({...modalData, firstName:e.target.value})} />
{/* Last Name */}
                <TextField 
                value={modalData.lastName}
                onChange={(e)=> setModalData({...modalData, lastName:e.target.value})} 
                name="lastName" 
                variant="standard" 
                label="Last Name" 
                size="small"
                required/>
                <TextField 
                value={modalData.gender}
                onChange={(e)=> setModalData({...modalData, gender:e.target.value})}
                name="gender" 
                variant="standard" 
                label="Gender" 
                size="small"/>
                 <TextField
                type="date"
                
                value={modalData.birthdate}
                onChange={(e)=> setModalData({...modalData, birthdate:e.target.value, age:calculateAge(e.target.value)})}
                
                name="birthdate" 
                variant="standard" 
                label=" " 
                size="small"/>
                <TextField
                
                value={modalData.age}
                
                name="age" 
                variant="standard" 
                label="Age" 
                size="small"/>
                
                
               <Button type="submit" variant="contained" onClick={handleSubmit} >Submit</Button>
            </Card>
            </form>
        </Box>
        </Modal>
        )

>>>>>>> Stashed changes
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