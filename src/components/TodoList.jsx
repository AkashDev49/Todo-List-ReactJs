import { useState } from "react";
import { nanoid } from "nanoid";

function TodoList() {
	let [task, setTask] = useState([
		{ id: nanoid(), task: "sleep", isDone: false },
	]);
	let [addTask, setAddTask] = useState("");

	// // todo render
	// let renderTask = task.map((val) => {
	// 	return (
	// 		<li key={val.id}>
	// 			<span style={val.isDone ? { textDecoration: "line-through" } : {}}>
	// 				{val.task}
	// 			</span>
	// 			&nbsp; &nbsp;
	// 			<button onClick={() => handleDelete(val.id)}>delete</button>
	// 			<button onClick={() => handleUpperCaseOne(val.id)}>Mark as done</button>
	// 		</li>
	// 	);
	// });

	// todo input change
	// let handleChangeTask = (e) => {
	// 	setAddTask(e.target.value);
	// };

	// todo add on button click
	// let handleClick = (e) => {
	// 	e.preventDefault();
	// 	setTask([...task, { task: addTask, id: nanoid(), isDone: false }]);
	// 	setAddTask("");
	// };

	// todo delete
	// let handleDelete = (id) => {
	// 	let deleteTodo = task.filter((val) => val.id != id);
	// 	setTask(deleteTodo);
	// };

	// todo update
	// let handleUpperCase = () => {
	// 	let val = task.map((val) => {
	// 		return { ...val, isDone: true };
	// 	});
	// 	setTask(val);
	// };

	// let handleUpperCaseOne = (id) => {
	// 	setTask(
	// 		task.map((val) => {
	// 			if (val.id === id) {
	// 				return { ...val, isDone: true };
	// 			} else {
	// 				return val;
	// 			}
	// 		}),
	// 	);
	// };

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

			<ol>{renderTask}</ol>
			<button onClick={handleUpperCase}>Upper Case All</button>
		</div>
	);
}

export default TodoList;
