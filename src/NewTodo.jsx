import { useState } from "react"
// import App from "./App"


const NewTodo = () => {

const [todo,setTodo] = useState('')

    const handleChange = (e) => {
        e.preventdefault
        setTodo = e.target.value
    }

    return (
        <div>
            <h1>New Todo</h1>
            <input type="text" defaultValue={'New Todo'} onSubmit={handleChange} />
            {/* <button onClick={handleSubmit}>Submit Todo</button> */}
        </div>
    )
}

export default NewTodo;