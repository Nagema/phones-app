import React from 'react'
import { useParams } from 'react-router-dom'
import PhoneDetail from '../../components/PhoneDetail/PhoneDetail';

const PhoneDetailContainer = ({phones}) => {
  const { productId } = useParams();

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