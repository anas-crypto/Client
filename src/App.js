
import { Fragment } from 'react';

import IndexPage from './componenets/Pages/IndexPage';
import AboutUs from './componenets/Pages/AboutUs';
import './componenets/css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Fragment>
    
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={< IndexPage/>}></Route>
    <Route exact path='AboutUs' element={< AboutUs/>}> 
      
        
      </Route>
    </Routes>
    </BrowserRouter>
    
    </Fragment>
  );
}

export default App;
