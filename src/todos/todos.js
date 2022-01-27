import React , {useState} from 'react'
import TodoExample from './todoExample';
import './todos.css'
import TodoInp from './todoInp';
function Todos() {
   
    const [state, setstate] = useState([
        {id:0 , title:'Arman Mesropyan' , done:false},
        {id:1 , title:'Aram Mesropyan' , done:false},
        {id:2 , title:'Albert Hovhannisyan' , done:false},
    ])

    const addTask = (val) =>{
   
        if(val){
            const newItem = {
                id:Math.random().toString(36).substr(2,9),
                title:val,
                done:false,
            }
            setstate([...state , newItem])
        }
    }
    const removeTask = (id) =>{
       
        setstate([...state.filter((todo)=> todo.id !== id )])
    }
    const handleToogle = (id) =>{
      
        setstate([
           
            ...state.map((todo) => 
            todo.id === id ? {...todo , done:!todo.done} : {...todo}
            )
            
        ])
    }
      
    


     return (
         <div className='parent_app'>
         <div className='TodoWrapper'>
              <div className='active_task'>
                    Active Task <span>{state.length}</span>
              </div>
              
              <div className='todos'>
                    <TodoInp addTask={addTask}  />
              </div> 

             <div className='todo__parent'>
                {state.map(elem =>{
                    return(
                        <TodoExample key={elem.id}elem={elem} handleToogle={handleToogle} 
                        removeTask={removeTask} />
                    )
                   
                })}

                    
              </div>
         </div>
         </div>
     )
 }
  
 export default Todos