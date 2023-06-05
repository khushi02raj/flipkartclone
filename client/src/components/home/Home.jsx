import React, { useEffect } from 'react'
import Navbar from '../home/Navbar';
import Banner from './Banner';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';
import { Box,styled } from '@mui/material';
import {getProducts} from '../../redux/actions/productActions';
import {useDispatch, useSelector} from'react-redux';
const Container = styled(Box)`
     padding: 10px;
     background:#f2f2f2;
`;
const Home=()=> {
  //accessing state for getting data
  const {products}=useSelector(state=>state.getProducts)//here getProducts is not function but reducer as we have used conbinedReducer name in store
  
  const dispatch=useDispatch();
  
  useEffect(()=>{
    dispatch(getProducts())//reducer function can't be calle directly thus inside dispatch
  }
  ,[dispatch])//componentDidUpdate
  return (
    <>
    <Navbar/>
    <Container>
    <Banner/>
    <MidSlide
                    products={products} 
                    title='Deal of the Day'
                    timer={true} 
                    // multi={true} 
                />
                <MidSection/>
                <Slide
                    products={products} 
                    title='Suggested Items'
                    timer={false} 
                    // multi={true} 
                />
                <Slide
                    products={products} 
                    title='Top Selection'
                    timer={false} 
                    // multi={true} 
                />
                <Slide
                    products={products} 
                    title='Recommended Items'
                    timer={false} 
                    //multi={true} 
                />
    </Container>
    </>

  )
}

export default Home
