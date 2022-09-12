import React, { useState } from 'react'
import PhoneForm from '../../components/PhoneForm/PhoneForm';
import './styles.css';

function PhoneFormContainer() {
  const [phoneName, setPhoneName] = useState('')

  const onChangePhoneName = event => {
    setPhoneName(event.target.value);
  };

  const [manufacturer, setmanufacturer] = useState('')

  const onChangeManufacturer = event => {
    setmanufacturer(event.target.value);
  };
  const [description, setDescription] = useState('')

  const onChangeDescription = event => {
    setDescription(event.target.value);
  };
  const [color, setColor] = useState('')

  const onChangeColor = event => {
    setColor(event.target.value);
  };
  const [price, setPrice] = useState('')

  const onChangePrice = event => {
    setPrice(event.target.value);
  };
  const [image, setImage] = useState('')

  const onChangeImage = event => {
    setImage(event.target.value);
  };

  const [dimensions, setDimensions] = useState('')

  const onChangeDimensions = event => {
    setDimensions(event.target.value);
  };

  const [processor, setProcessor] = useState('')

  const onChangeProcessor = event => {
    setProcessor(event.target.value);
  };

  const handleForm = async (event) => {
    event.preventDefault();
    const newPhone = {
      name: phoneName,
      manufacturer,
      description,
      color,
      price: parseInt(price),
      imageFileName: image,
      dimensions,
      processor
    }
    fetch('/phones', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newPhone),
    })
      .then(() => {
        setPhoneName('');
        setmanufacturer('');
        setDescription('');
        setColor('');
        setPrice('');
        setImage('');
        setDimensions('');
        setProcessor('')
      })
  }

  return (
    <div className='form-container'>
        <PhoneForm
          phoneName={phoneName}
          onChangePhoneName={onChangePhoneName}
          manufacturer={manufacturer}
          onChangeManufacturer={onChangeManufacturer}
          description={description}
          onChangeDescription={onChangeDescription}
          color={color}
          onChangeColor={onChangeColor}
          price={price}
          onChangePrice={onChangePrice}
          image={image}
          onChangeImage={onChangeImage}
          dimensions={dimensions}
          onChangeDimensions={onChangeDimensions}
          processor={processor}
          onChangeProcessor={onChangeProcessor}
          handleForm={handleForm}
        />
    </div>
  )
}

export default PhoneFormContainer