import React from 'react'
import { useState,useContext} from 'react';
import { DataContext } from '../../context/DataProvider';
import { Box,Button,Typography,styled, Badge } from '@mui/material'
import LoginDialog from '../login/LoginDialog';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';  
import Profile from './Profile';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';
const Wrapper = styled(Box)`
    display:flex;
    margin: 0 3% 0 auto;
    & > button,& > p,& > div{
        margin-right:40px;
        font-size:14px;
        align-items: center;
    }
`;
    
const Container = styled(Link)`
    display: flex;
    text-decoration:none;
    color:inherit;
`;

const LoginButton = styled(Button)`
color: #2874f0;
background: #FFFFFF;
text-transform: none;
font-weight: 600;
border-radius: 2;
padding: 5px 40px;
height: 32;
box-shadow: none;
margin-left:20px;
`;
const CustomButtons=() =>{
  
  const [open,setOpen]=useState(false);
  const {account,setAccount}=useContext(DataContext);
  const {cartItems}=useSelector(state=>state.cart);
  const openDialog=()=>{
      setOpen(true);
    }

    return (
   // <Box sx={{ display: 'flex' }}>
   <Wrapper>
    {
      account?<Profile account={account} setAccount={setAccount}/>
      :
      <LoginButton variant='contained' onClick={()=> openDialog()}>Login</LoginButton>
    }
      
      <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container to='/cart'>
        <Badge badgeContent={cartItems?.length} color='primary'>
          <ShoppingCartIcon/>
          </Badge>
          <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  )
}

export default CustomButtons
