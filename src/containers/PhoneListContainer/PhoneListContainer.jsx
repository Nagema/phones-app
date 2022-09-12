
import React, { useContext } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhoneCard from '../../components/PhoneCard/PhoneCard'
import { Phones } from '../../context/PhoneContext';
import { useParams } from 'react-router-dom';
import './styles.css';

function PhoneListContainer() {
  const { brandId } = useParams();
  const { phones } = useContext(Phones);

  const fileteredPhones = phones.filter(phone=> {
    if(!brandId) return true; 
    return phone.manufacturer === brandId
  })

  return (
    <div className='phone-list-container'>
        <Row xs={1} md={2} className="g-4">
            {fileteredPhones.map((phone) => (
            <Col key={phone.id}>
                <div className='phone-container'>
                    <PhoneCard phone={phone}/>
                </div>
            </Col>))}
        </Row>
    </div>
  )
}

export default PhoneListContainer