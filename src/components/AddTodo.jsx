import { useContext, useState } from "react";
import { todoData } from "../contextApi/todoContext";
import { nanoid } from "nanoid";

function AddTodo() {
	let { task, setTask } = useContext(todoData);
	let [addTask, setAddTask] = useState("");

	// todo input change
	let handleChangeTask = (e) => {
		setAddTask(e.target.value);
	};

	// todo add on button click
	let handleClick = (e) => {
		e.preventDefault();
		setTask([...task, { task: addTask, id: nanoid(), isDone: false }]);
		setAddTask("");
	};

	return (
		<div>
			<h1>Todo List</h1>

			<input
				type="text"
				placeholder="enter task"
				onChange={handleChangeTask}
				value={addTask}
			/>

			<button onClick={handleClick}>Add Task</button>
		</div>
	);
}

export default AddTodo;
