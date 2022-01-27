import React , { useState , useMemo} from 'react'
import './newPage.scss'
import ProductExample from './productExample/productExample'
import { LocalState } from './productExample/localState'
import Categorys from './category/categorys'
import Cart from './cart/cart'


export default function NewPage() {


  const fileInput = React.createRef()
  const [btn, setBtn] = useState(false)
  const [product,setProduct] = useState(LocalState)  
  const [val , setValue] = useState('')
  const [price , setPrice] = useState('')
  const [img, setImg] = useState(null)
  const [category , SetCategory] = useState('')
  const [selectedCategory,setSelectedCategory] = useState('All')
  const [cart , setCart] = useState(null)
  const [cartProduct , setCartProduct] = useState([])
 
  const newProduct = () =>{
    setBtn(!btn)
    }

 

 //form _----------------------------_ 

    const addProduct  = (val , price , image , category) =>{
        
      if(val && price  && category !== ''){
        const newProd = {
            id:Math.random().toString(36).substr(2,9),
            name:val,
            price,
            image,
            category,
        
        }
        setProduct([...product,newProd])
      }
      else{
          return null
      }
            
        
    }

    const handleSubmit  = (e) =>{
            e.preventDefault();
            e.target.reset()
            addProduct(  val , price , img ,category,)
          
            
    }

    const handleText  = (e) =>{
        setValue(e.currentTarget.value)
     
    }   
    const handleCategory = (e) =>{
      SetCategory(e.currentTarget.value)
    }
    const handlePrice  = (e) =>{
        setPrice(e.currentTarget.value)
       
    }
    const imgUpload = (event) => {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
              setImg(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);
          }
        
    }
    
    const closeAdminMenu = () =>{
      setBtn(!btn)
    }
    
    const displayedProducts = useMemo(()=>{
      if(selectedCategory ===  'All') {
        return product
       }
        return product.filter(product => product.category === selectedCategory)
  })



// end form ======================================

// cart ======================================


  const openCart =() =>{
    setCart(!cart)
  }




    return (
    <div>
      <div className='wrapp__prod'>
      <div className='bar'>
      <button className='add__product' onClick={newProduct}>New Product</button>
         <Categorys category={selectedCategory} setCategory={setSelectedCategory} allProducts={product}/>
      </div>
      <div className='product_count'>
        Products <b>{displayedProducts.length}</b>
        <div className='cart'>
                <button className='cart__btn' onClick={openCart}><i className="fas fa-shopping-cart"></i></button>
                {cartProduct.length > 0 ? <div className='cartItems'>{cartProduct.length }</div> : null }
        </div>
      </div>
      </div>
      {cart ? <Cart cartProduct={cartProduct} setCartProduct={setCartProduct} /> : null}



       {btn ?<div className='Shop'>
                <form onSubmit={handleSubmit}>
                   {!btn ? null :<div className='close__admin__menu' onClick={closeAdminMenu}>
                         <button className='close__add'>&times;</button> 
                    </div> }

                    <div className='all__inputs'>
                    <input className='text__input'
                     type={'text'} placeholder='Category'
                      onChange={handleCategory}
                      
                      />
                    
                    <input className='text__input' 
                    type={'text'} placeholder='Name' 
                    onChange={handleText}
                   
                    />
                    
                    <input className='text__input'
                     type={'text'} placeholder='Price'
                     onChange={handlePrice}
                    
                     />
                    <div>
                    <input className="custom-file-input" type={'file'}  accept="image/*" ref={fileInput} onChange={imgUpload} /><br/>
                    </div>
                    </div>
                    <button type='submit' className='add_submit'>Add</button>
                   
                </form>
        </div> : null} 

        <div className='global__example'>
        {displayedProducts.map(elem => {
            return <ProductExample cartProduct={cartProduct} setCartProduct={setCartProduct} key={elem.id} elem={elem}/>
        })}
        </div>



    </div>
    )
}




