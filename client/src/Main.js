
import { useDispatch } from "react-redux";
import React,{ useEffect } from "react";

import {getUsers} from './actions/users';

import { Container,Grid } from "@mui/material";
import Users from './components/UserList/Users';
import Form from './components/UserForm/Form';


function Main(){

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getUsers());
    },[dispatch]);

    return(
        <Container>
            <Grid container spacing={5}>
                <Grid item xs>
                   <Form/>
                </Grid>
                <Grid item xs={7}>
                    <Users/>
                </Grid>
            </Grid>
        
        </Container>
    )
}

export default Main;