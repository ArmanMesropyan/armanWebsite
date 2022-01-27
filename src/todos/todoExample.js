import React  from 'react'
import './example.css'

const TodoExample = ({elem , removeTask , handleToogle}) =>  {

    


const deleteTask = () =>{

    removeTask(elem.id)
}
const lineText = () =>{
    handleToogle(elem.id)
}


    return (
        <div className='todo__example__wrapper' >
              <div className='example ' key={elem.id}>
                <h5 onClick={lineText} className={elem.done ? 'line' : 'item-text'}>{elem.title}</h5>
              
                <button onClick={deleteTask}>&times;</button>
        </div>
        </div>
    )
}
export default TodoExample