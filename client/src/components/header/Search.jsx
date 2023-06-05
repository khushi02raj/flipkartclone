import React from 'react'
import { InputBase,Box,styled, List, ListItem } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/productActions';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
  border-radius: 2px;
  margin-left: 10px;
  width: 38%;
  background-color: #fff;
  display: flex;
`;
const InputSearchBase = styled(InputBase)`
  font-size: unset;
  width: 100%;
  padding-left: 20px;
`;
const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`;
const ListWrapper=styled(List)`
  margin-top:36px;
  position:absolute;
  color:black;
  background:#FFFFFF;
  
`;
function Search() {
   const [text,setText]=useState('');
   const {products}=useSelector(state=>state.getProducts);//for getting prducts to match

   const dispatch=useDispatch();
   useEffect(() => { //for calling api
    dispatch(getProducts())
  }, [dispatch])
  function getText(text)
  {
      setText(text);
  }
 
  return (
    <SearchContainer>
      <InputSearchBase onChange={(e)=>getText(e.target.value)} 
      placeholder='Search for prducts,brands and more'
      value={text}/>
      <SearchIconWrapper>
        <SearchIcon/>
      </SearchIconWrapper>
      {
        text && 
        <ListWrapper>
        {  
        products.filter(product=> product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(
          product=>(
            <ListItem>
              <Link to={`/product/${product.id}`}
              onClick={()=>setText('')}
              style={{textDecoration:'none',color:'inherit'}}>
              {product.title.longTitle}
              </Link>
            </ListItem>
          ))
        }
        </ListWrapper>
      }
    </SearchContainer>
  )
}

export default Search
