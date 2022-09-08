import { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [phones, setPhones] = useState([]);

  useEffect(() => {
    fetch('/phones')
      .then(response => response.json())
      .then((serverPhones) => {
        setPhones(serverPhones)
      })
  }, [])
  console.log(phones)

  return (
    <div className="App">
      <h2>phones</h2>
      <ul>
        { phones.map(phone => ( 
          <li key={phone.id}>
            {phone.name}
          </li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
