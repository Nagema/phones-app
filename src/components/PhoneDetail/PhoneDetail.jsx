import React from 'react'
import './styles.css';
import Card from 'react-bootstrap/Card';

const PhoneDetailContainer = ({phone}) => {

  return (
      <div className='phone-detail-wrapper'>
        <Card style={{width: "15em",  margin:"auto", height:"38em"}} >
            <Card.Img variant="top" src={phone.imageFileName} style={{width: "10em", margin:"auto", paddingTop:"30px"}} />
            <Card.Body>
                <Card.Title>{phone.name}</Card.Title>
                <Card.Text>Color: {phone.color}</Card.Text>
                <Card.Text>Price: {phone.price}</Card.Text>
                <Card.Text>Dimensions: {phone.dimensions}</Card.Text>
                <Card.Text>Processor: {phone.processor}</Card.Text>
            </Card.Body>
        </Card>
      </div>
  )
}

export default PhoneDetailContainer