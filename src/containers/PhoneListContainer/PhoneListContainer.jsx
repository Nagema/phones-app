
import React from 'react'

function PhoneListContainer({phones}) {
  return (
    <div>
    <h2>Phone Catalog</h2>
    <ul>
        {phones.map(phone => ( 
        <li key={phone.id}>
        {phone.name}
        </li>
        ))
    }
    </ul>
</div>
  )
}

export default PhoneListContainer

