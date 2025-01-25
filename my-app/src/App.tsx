import { useState } from 'react'
import { MakeTask } from './components/MakeTask'
import './style/app.css'
import { Itask } from './interface/Itask'

function App() {

  const [task, setTask] = useState<string>("") 
  const [todoList, setTodoList] = useState <Itask[]>([])

  function AddListTask(): void {

    if(task != "") {
      const idRandom = (num:number) => (Math.floor(Math.random() * num))

      const newList = {id: idRandom(100), name: task }

      setTodoList([...todoList, newList])
    }

  }

  function DeleteTask (deleteTaskId: number): void {
    setTodoList(todoList.filter((name) => name.id !== deleteTaskId))
  }

  return(
    <div className='App'>

      <header>
          <h2>Lists</h2>

          <input 
            type="text" autoComplete='off' 
            placeholder='Digite sua task...' 
            name='task'
            className='input'
            value={task}
            onChange={(event) => setTask(event.target.value)}
          />

          <button type='submit' onClick={AddListTask} className='btn-header'>
            Adicionar Task
          </button>

      </header>

      <div className='line'></div>


      {todoList.map((task, key) => (
          <MakeTask task={task} key={key} deleteTask={DeleteTask}/>
      ))}
        

    </div>
      
  ) 
}

export default App
