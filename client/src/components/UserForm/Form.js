import {Paper,TextField,Card,CardHeader,Button} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/users';
<<<<<<< Updated upstream
const Form = ()=>{
    const [userData,setUserData ] = useState({
        firstName: '', lastName:'', gender:'',age:'',birthdate:''
    });
=======

const Form = (currentId, setCurrentId) =>{
    const [userData,setUserData ] = useState({firstName: '', lastName:'', gender:'',age:'',birthdate: ''});
    ;
    
>>>>>>> Stashed changes
    const dispatch = useDispatch();
    
    const handleSubmit =(e)=>{
        e.preventDefault();

        dispatch(createUser(userData))
        console.log(userData)
    }
    const calculateAge = (date) =>{
        const birthdate = new Date(date);
        const monthDiff = Date.now() - birthdate.getTime();
        const ageDiff  = new Date(monthDiff);
        const year = ageDiff.getUTCFullYear();
        const aget = Math.abs(year-1970);
        setUserData({...userData,age:aget})
        console.log(aget)
        return aget
        
    }
    

    return(

        <Paper sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}>
              <form>
            <Card variant="dark">
                <CardHeader title="Add User"/>
{/* First Name */}
                <TextField v
                value={userData.firstName} 
                name="firstName" 
                variant="standard" 
                label="First Name" 
                size="small"
                onChange={(e)=> setUserData({...userData, firstName:e.target.value})} />
{/* Last Name */}
                <TextField 
                value={userData.lastName}
                onChange={(e)=> setUserData({...userData, lastName:e.target.value})} 
                name="lastName" 
                variant="standard" 
                label="Last Name" 
                size="small"
                required/>
                <TextField 
                value={userData.gender}
                onChange={(e)=> setUserData({...userData, gender:e.target.value})}
                name="gender" 
                variant="standard" 
                label="Gender" 
                size="small"/>
                 <TextField
                type="date"
                
                value={userData.birthdate}
                onChange={(e)=> setUserData({...userData, birthdate:e.target.value, age:calculateAge(e.target.value)})}
                
                name="birthdate" 
                variant="standard" 
                label=" " 
                size="small"/>
                <TextField
                
                value={userData.age}
                
                name="age" 
                variant="standard" 
                label="Age" 
                size="small"/>
                
                
               <Button type="submit" variant="contained" onClick={handleSubmit} >Submit</Button>
            </Card>
            </form>
        </Paper>
    )
}

export default Form;