import React , {useState} from 'react'

export default function TodoInp({addTask}) {
    
    const [val , setValue] = useState('')

    const handleChange = (e) =>{
        setValue(e.currentTarget.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        addTask(val)
        setValue('')
    }
  
    const handleKeyDown = (e) =>{
        if(e.key === 'Enter'){
            handleSubmit(e)
        }
    }
  
    return (

        
        <div>
            <form className='add__todo' onSubmit={handleSubmit} >
            <input name='title'  type='text' placeholder='add todo' value={val} onKeyDown={handleKeyDown}  onChange={handleChange}/>
             <button type='submit'> Plus </button>
            </form>
        </div>
    )
}
