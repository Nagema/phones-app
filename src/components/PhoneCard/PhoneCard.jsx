import React from 'react';
import Card from 'react-bootstrap/Card';

function PhoneCard({phone}) {

  return (
    <Card style={{width: "15em",  margin:"auto", height:"30em"}} >
        <Card.Img variant="top" src={phone.imageFileName} style={{width: "10em", margin:"auto", paddingTop:"30px"}} />
        <Card.Body>
        <Card.Title>{phone.name}</Card.Title>
        <Card.Text>{phone.description}</Card.Text>
        </Card.Body>
    </Card>
  );
}

export default PhoneCard