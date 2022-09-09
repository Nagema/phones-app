import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { NavBar } from './containers/NavBar/Navbar';
import PhoneListContainer from './containers/PhoneListContainer/PhoneListContainer';

function App() {

  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch('/phones')
      .then(response => response.json())
      .then((serverPhones) => {
        setPhones(serverPhones)
      })
  }, [])
  
  return (
    <BrowserRouter>
          <>
            <NavBar phones={phones}/>
            <Routes>
              <Route path='/' element={<PhoneListContainer phones={phones} /> }></Route>
              <Route path='/favorites' element={<PhoneListContainer phones={phones} />}></Route>
            </Routes>
          </>
      </BrowserRouter>
  );
}

export default App;
