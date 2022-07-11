import { Fragment } from 'react';

import IndexPage from './pages/IndexPage';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Products from './pages/Products';
import './componenets/css/style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './componenets/Nav';
function App() {
  return (
    <Fragment>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<IndexPage />}></Route>
          <Route exact path='/about-us' element={<AboutUs />}></Route>
          <Route exact path='/contact-us' element={<ContactUs />}></Route>
          <Route exact path='/products' element={<Products />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
