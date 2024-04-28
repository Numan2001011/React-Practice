import { useState } from "react"
const Product = () => {
    const [product, selectProd] = useState({
        discount : 0.1,
        items : [
            {id:1, title: "Arduino", quantity: 1},
            {id:2, title: "IR Sensor", quantity:1}
        ]
    });

    const handleClick = () => {
        selectProd({...product, items:product.items.map(item => item.id===1 ? {...item, quantity: item.quantity + 1} : item )})
    }
  return (
    <>
    
    </>
  )
}

export default Product