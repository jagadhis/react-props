import React from 'react'

function Cart({name,description}) {
  return (
    <div>
        <p>{name}</p>
        <p><i>{description}</i></p>
    </div>
  )
}

export default Cart