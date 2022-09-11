import React, { useContext } from 'react';
import { useParams } from 'react-router-dom'
import PhoneDetail from '../../components/PhoneDetail/PhoneDetail';
import { Phones } from '../../context/PhoneContext';

const PhoneDetailContainer = () => {
  const { productId } = useParams();
  const { phones } = useContext(Phones);

  return (
    <div> {
      phones.filter((phone) =>  phone.id === Number(productId))
        .map((phone) => (   
          <div key={phone.id}>
            <PhoneDetail phone={phone}/>
          </div>
          ))
        }
        </div>
  )
}

export default PhoneDetailContainer