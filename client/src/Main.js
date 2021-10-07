
import { useDispatch } from "react-redux";
import React,{ useState,useEffect } from "react";

import {getUsers} from './actions/users';

import { Container,Grid } from "@mui/material";
import Users from './components/UserList/Users';
import Form from './components/UserForm/Form';


function Main(){
    const [currentId, setCurrentId] = useState(null);
    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getUsers());
    },[dispatch]);

    return(
        <Container>
            <Grid container spacing={5}>
                <Grid item xs>
                   <Form currentId={currentId} setCurrentId={setCurrentId}/>
                </Grid>
                <Grid item xs={7}>
                    <Users setCurrentId={setCurrentId}/>
                </Grid>
            </Grid>
        
        </Container>
    )
}

export default Main;