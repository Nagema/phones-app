import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import './styles.css';

function PhoneForm({
  phoneName,
  onChangePhoneName,
  manufacturer,
  onChangeManufacturer,
  description,
  onChangeDescription,
  color,
  onChangeColor,
  price,
  onChangePrice,
  image,
  onChangeImage,
  dimensions,
  onChangeDimensions,
  processor,
  onChangeProcessor,
  handleForm
}) {
  return (
    <>
      <Form onSubmit={handleForm}>
        <Form.Group className="mb-3">
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              type="text"
              placeholder="Phone name"
              value={phoneName}
              onChange={onChangePhoneName}
              />
            <label htmlFor="floatingInputCustom">Phone name</label>
          </Form.Floating>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="text"
              placeholder="Manufacturer"
              value={manufacturer}
              onChange={onChangeManufacturer}
              />
            <label htmlFor="floatingPasswordCustom">Manufacturer</label>
          </Form.Floating>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3}
            value={description}
            onChange={onChangeDescription} />
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Floating>
          <Form.Control
            id="floatingPasswordCustom"
            type="text"
            placeholder="Color"
            value={color}
            onChange={onChangeColor}
            />
            <label htmlFor="floatingPasswordCustom">Color</label>
          </Form.Floating>
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="text"
              placeholder="Price"
              value={price}
              onChange={onChangePrice}
              />
            <label htmlFor="floatingPasswordCustom">price</label>
          </Form.Floating>
        </Form.Group>

        <InputGroup className="mb-3">
          <InputGroup.Text id="basic-addon3">
            https://example.com/users/
          </InputGroup.Text>
          <Form.Control 
            id="basic-url" 
            aria-describedby="basic-addon3" 
            value={image}
            onChange={onChangeImage} />
        </InputGroup>


        <Form.Group className="mb-3">
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="text"
              placeholder="Dimensions"
              value={dimensions}
              onChange={onChangeDimensions}
              />
            <label htmlFor="floatingPasswordCustom">Dimensions</label>
          </Form.Floating>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Floating>
            <Form.Control
              id="floatingPasswordCustom"
              type="text"
              placeholder="Processor"
              value={processor}
              onChange={onChangeProcessor}
              />
            <label htmlFor="floatingPasswordCustom">Processor</label>
          </Form.Floating>
        </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
      </Form>
    </>
  );
}

export default PhoneForm;