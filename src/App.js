import logo from './logo.svg';
import './App.css';

//components
import Header from './components/Header/Header';
import Home from "./components/Home/Home";
import Cart from './components/Cart/Cart';
import Success from './components/Payment/Success';
import Cancel from './components/Payment/Cancel';

import DataProvider from './context/DataProvider';

import DetailView from './components/Details/DetailView';

import {Box} from "@mui/material";

import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style = {{marginTop : 55}}>
          <Routes>
            <Route path='/' element= {<Home />}/>
            <Route path='/product/:id' element= {<DetailView/>}/>
            <Route path='/cart' element={<Cart/>} />
            <Route path='/success' element={<Success/>} />
            <Route path='/cancel' element={<Cancel/>} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
