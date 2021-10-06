import {Paper,TextField,Card,CardHeader,Button} from '@mui/material';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../../actions/users';
const Form = ()=>{
    const [userData,setUserData ] = useState({
        firstName: '', lastName:'', gender:'',age:0,birthdate:''
    });
    const dispatch = useDispatch();
    
    const handleSubmit =(e)=>{
        e.preventDefault();

        dispatch(createUser(userData))
        console.log(userData)
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
                alue={userData.firstName} 
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
                size="small"/>
                <TextField 
                value={userData.gender}
                onChange={(e)=> setUserData({...userData, gender:e.target.value})}
                name="gender" 
                variant="standard" 
                label="Gender" 
                size="small"/>
                 <TextField
                type="date"
                
                value={userData.birthday}
                onChange={(e)=> setUserData({...userData, birthdate:e.target.value})}
                name="birthdate" 
                variant="standard" 
                label=" " 
                size="small"/>
                <TextField
                
                value={userData.age}
                onChange={(e)=> setUserData({...userData, age:e.target.value})}
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