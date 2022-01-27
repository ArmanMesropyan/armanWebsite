import React , {useState} from 'react';
import './cart.scss'

 function Cart({cartProduct ,   setCartProduct}) {
    const [closeCart , setCloseCart ] = useState(false)

     const Cart = () =>{
        setCloseCart(!closeCart)
     }

     const remove = (itemId) =>{
       const newOrder = cartProduct.filter((el) => el.id !== itemId)
       setCartProduct(newOrder)
       }

       const orderId = Object.keys(cartProduct)
       const total = orderId.reduce((prevTotal , key) =>{
            const products = cartProduct[key].price
            const count = cartProduct[key].total
            return prevTotal + products * count
       }, 0)
  
       
  return (
      <div className='cart__parent'>
        {!closeCart ? <div className='cart_wrapper'>
           <div className='close__cart'>
               <button onClick={Cart}>&times;</button>
           </div>
           <div className='cart__item'>
               {cartProduct.map(item => {
                  return (
                  <div key={item.id} className='item__child'>
                          <div className='item__img'>
                             <img src={item.image} alt="product IMG" />
                          </div>
                          <div className='item__content'>
                              <p>{item.name}</p>
                              <p>selected: <b>{item.total}</b></p>
                              <b>{item.price * item.total} $</b>
                             
                          </div>
                          <div>
                          <button className='item__btn' onClick={()=>remove(item.id)}>&times;</button>
                          <button className='item__buy' 
                          onClick={()=>alert('you purchased' + ' ' + item.total  + 
                          ' ' + item.name  + ' ' + 'price:'  + ' ' + item.price * item.total + '$')}>Buy</button>
                          </div>
                        
                  </div>
                  
                  )
               })}


           </div>
             {total > 0 ? <div className='all__sum'>total cost: <b> {total} $</b> </div>: null}
          </div> : null}
    </div>
  )
}
export default Cart