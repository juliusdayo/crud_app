import { useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { deleteUser,updateUser } from "../../actions/users";
import {Modal,Button,Paper,Box,Table, TableBody, TableCell,TableContainer, TableHead,TableRow} from '@mui/material';
import {TextField,Card,CardHeader,Radio,RadioGroup,FormControl,FormControlLabel,FormLabel} from '@mui/material';
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
        if(aget<0 || isNaN(aget)){
            return 'Invalid Birthdate'
        }
        return aget
        
    }
    const handleSubmit =(e)=>{
        e.preventDefault();
        
        dispatch(updateUser(currentId,modalData))
        handleClose();
    }
   



    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
    const dispatch = useDispatch();
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
       <TableCell>
           <Button onClick={()=>dispatch(deleteUser(user._id))}>Delete</Button>

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
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                        value={modalData.gender}
                        onChange={(e)=> setModalData({...modalData, gender:e.target.value})}
                    >
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    </RadioGroup>
                    </FormControl>
                 <TextField
                type="date"
                
                value={modalData.birthdate}
                onChange={(e)=> setModalData({...modalData, birthdate:e.target.value, age:calculateAge(e.target.value)})}
                
                name="birthdate" 
                variant="standard" 
                label=" " 
                size="small"/>
                <TextField
                disabled
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


    return(
        <Paper>
            {modal}
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