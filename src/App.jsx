import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './containers/NavBar/Navbar';
import PhoneDetailContainer from './containers/PhoneDetailContainer/PhoneDetailContainer';
import PhoneListContainer from './containers/PhoneListContainer/PhoneListContainer';
import PhonesProvider from './context/PhoneContext';

function App() {
  
  return (
          <>
          <PhonesProvider>
            <BrowserRouter>
              <NavBar />
              <Routes>
                <Route path='/' element={<PhoneListContainer/> }></Route>
                <Route path='/favorites' element={<PhoneListContainer/>}></Route>
                <Route path='/manufacturer/:brandId' element={<PhoneListContainer/>}></Route>
                <Route path='/detail/:productId' element={<PhoneDetailContainer/>}></Route>
              </Routes>
            </BrowserRouter>
          </PhonesProvider>
          </>
  );
}

export default App;
