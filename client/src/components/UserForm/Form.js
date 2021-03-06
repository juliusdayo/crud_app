import {Paper,TextField,Card,CardHeader,Button, Radio,RadioGroup,FormControl,FormControlLabel,FormLabel} from '@mui/material';
import React,{ useState } from 'react';
import { useDispatch  } from 'react-redux';
import { createUser } from '../../actions/users';



const Form = () =>{
    const [userData,setUserData ] = useState({firstName: '', lastName:'', gender:'',age:'',birthdate: ''});
    ;
    const dispatch = useDispatch();
    
    

    const handleSubmit =(e)=>{
        e.preventDefault();
        
            console.log(userData)
            dispatch(createUser(userData))           
    
    }

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
                
                <FormControl component="fieldset">
                    <FormLabel component="legend">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-label="gender"
                        defaultValue="female"
                        name="radio-buttons-group"
                        value={userData.gender}
                        onChange={(e)=> setUserData({...userData, gender:e.target.value})}
                    >
                        <FormControlLabel value="Female" control={<Radio />} label="Female" />
                        <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    </RadioGroup>
                    </FormControl>
                 <TextField
                type="date"
                
                value={userData.birthdate}
                onChange={(e)=> setUserData({...userData, birthdate:e.target.value, age:calculateAge(e.target.value)})}
                
                name="birthdate" 
                variant="standard" 
                label=" " 
                size="small"/>
                <TextField
                disabled
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