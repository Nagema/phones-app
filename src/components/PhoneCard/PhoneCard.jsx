import React from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function PhoneCard({phone}) {

    const navigate = useNavigate();
    const handleDetail = () => {
      navigate(`/detail/${phone.id}`)
    }

  return (
    <Card style={{width: "15em",  margin:"auto", height:"30em"}} onClick={handleDetail} >
        <Card.Img variant="top" src={phone.imageFileName} style={{width: "10em", margin:"auto", paddingTop:"30px"}} />
        <Card.Body>
          <Card.Title>{phone.name}</Card.Title>
          <Card.Text>{phone.description}</Card.Text>
        </Card.Body>
    </Card>
  );
}

export default PhoneCard