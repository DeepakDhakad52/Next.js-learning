'use client'

function Product({title, price}) {
  return (
    <button onClick={()=>alert(`Price of ${title} is ${price}`)}>Check Price</button>
  )
}

export default Product
