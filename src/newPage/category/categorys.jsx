import React from 'react'
import './category.scss'
import {uniqBy} from "lodash"
import { v4 as uuidv4 } from 'uuid';
export default function Categorys({category , setCategory , allProducts}) {
    const filtrCategory = (event) =>{
    const filterKey = event.target.value;
      setCategory(filterKey)
    }
    
    const uniqueCategories = uniqBy(allProducts, (productItem)=>productItem.category)
    .map(product=>product.category)
    return (
        <div key={uuidv4()}  className='parent__bar' >
            <select  value={category} className='category__list' onChange={filtrCategory}>
                <option value='All'>All</option>
                {uniqueCategories.map(category => <option
                key={uuidv4()} 
                value={category}>{category}</option>) }
            </select>
        </div>
    )
}

