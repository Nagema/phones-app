import React from 'react';
import Card from 'react-bootstrap/Card';

function PhoneCard({phone}) {

  return (
    <Card>
        <Card.Img variant="top" src={phone.imageFileName} style={{width: "300px"}} />
        <Card.Body>
        <Card.Title>{phone.name}</Card.Title>
        <Card.Text>
            {phone.description}
        </Card.Text>
        </Card.Body>
    </Card>
  );
}

export default PhoneCard