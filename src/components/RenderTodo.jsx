import { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { todoData } from "../contextApi/TodoContext";

function RenderTodo() {
	let { task, setTask } = useContext(todoData);

	let handleDelete = (id) => {
		let deleteTodo = task.filter((val) => val.id != id);
		setTask(deleteTodo);
	};

	let handleUpperCaseOne = (id) => {
		setTask(
			task.map((val) => {
				if (val.id === id) {
					return { ...val, isDone: true };
				} else {
					return val;
				}
			}),
		);
	};

	let handleUpperCase = () => {
		let val = task.map((val) => {
			return { ...val, isDone: true };
		});
		setTask(val);
	};

	// todo render
	let renderTask = task.map((val) => {
		return (
			<li key={val.id}>
				<span style={val.isDone ? { textDecoration: "line-through" } : {}}>
					{val.task}
				</span>
				&nbsp; &nbsp;
				<button onClick={() => handleDelete(val.id)}>delete</button>
				<button onClick={() => handleUpperCaseOne(val.id)}>Mark as done</button>
			</li>
		);
	});

	return (
		<div>
			<ol>{renderTask}</ol>
			<button onClick={handleUpperCase}>Upper Case All</button>
		</div>
	);
}

export default RenderTodo;
