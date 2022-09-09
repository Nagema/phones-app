
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PhoneCard from '../../components/PhoneCard/PhoneCard'

import './styles.css';

function PhoneListContainer({phones}) {
  return (
    <div className='phone-list-container'>
        <Row xs={1} md={2} className="g-4">
            {phones.map((phone) => (
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

