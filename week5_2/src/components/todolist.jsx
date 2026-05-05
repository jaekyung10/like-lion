import react, { useState } from 'react'
import plus from '../assets/img/plus.png'
import deleteIcon from '../assets/img/delete.png'
import '../assets/style.scss'

const Todolist = () => {
    const [todoText, setTodoText] = useState('')
    const [todoList, setTodoList] = useState([])

    const handleAddTodo = () => {
        if (todoText.trim() === '') return

        setTodoList([...todoList, todoText])
        setTodoText('')
    }

    const handleDeleteTodo = (index) => {
        const newTodoList = todoList.filter((_,todoIndex) => todoIndex !== index)
        setTodoList(newTodoList)
    }
    
    return (
        <div id="Todo_Wrap">
            <h1>TO-DO LIST</h1>

            <div className='input_box'>
                <input type='text' placeholder='오늘 할 일을 입력해주세요!' value={todoText} 
                onChange={(e) => setTodoText(e.target.value)} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAddTodo()
                    }
                }}
                />

                <button onClick={handleAddTodo}>
                    <img src={plus} alt='추가' />
                </button>
            </div>

            <div className='todo_box'>
                {todoList.map((todo, index) => (
                    <div className='todo_item' key={index}>
                        <div className='todo_left'>
                            <input className="check_box" type="checkbox" />
                            <span>{todo}</span>
                        </div>

                        <button onClick={() => handleDeleteTodo(index)}>
                            <img src={deleteIcon} alt='삭제' />
                        </button>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default Todolist