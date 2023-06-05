//components
import Header from './components/header/Header'
import Home from './components/home/Home';
import { Box } from '@mui/system';
import DataProvider from './context/DataProvider';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Detailview from './components/details/DetailView';
import Cart from './components/cart/Cart';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header/>
      <Box style={{marginTop:54}}>
       <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/product/:id' element={<Detailview/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        </Box>
        </BrowserRouter>
    </DataProvider>
  );
}

export default App;
