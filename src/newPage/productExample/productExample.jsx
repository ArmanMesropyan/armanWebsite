import React from 'react'
import './productExample.scss'

 const ProductExample = ({elem ,cartProduct, setCartProduct,}) => {
 
    const addToCart = () =>{
     const index = cartProduct.findIndex(prod => prod.name === elem.name)
        if(index === -1) {
          const product = {};
          Object.assign(product, elem, {total: 1})
          setCartProduct([...cartProduct, product])
        } 
        else {
          const newArr = [...cartProduct];
          ++newArr[index].total
          setCartProduct(newArr)
        
        }
        
    }
  
    return(
      
        <div className='example__wrapper' key={elem.id}>
             <img src={elem.image} alt='img' className='img__example' />
            <div className='first__input'>
            <h5>{elem.name}</h5>
            <p>{elem.price}<sub>$</sub></p>
            
            </div>
            <button className='btn__shop' onClick={addToCart}>
                 <i className="fal fa-cart-plus"></i>
            </button>
        </div>
    )
}
export default ProductExample