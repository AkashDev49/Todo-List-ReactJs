import { useContext, useState } from "react";
import { todoData } from "../contextApi/TodoContext.jsx";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

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
		toast.success("Task Added!");
	};

	return (
		<div className="text-center mt-10 bg-gray-900 max-w-xl mx-auto px-8 py-10 rounded-2xl ">
			<h1 className="font-serif text-5xl mb-7 text-gray-100 tracking-tight">
				Todo List
			</h1>

			<div className="flex items-center gap-3">
				<input
					type="text"
					placeholder="Enter task..."
					onChange={handleChangeTask}
					value={addTask}
					className="flex-1 text-lg px-5 py-3.5 rounded-xl
        bg-gray-800 text-gray-100 placeholder-gray-500
        border border-gray-700 focus:border-amber-400
        outline-none transition-colors"
				/>

				<button
					onClick={handleClick}
					className="text-base font-semibold bg-amber-400 text-gray-900
        px-6 py-3.5 rounded-xl hover:bg-amber-500
        transition-colors whitespace-nowrap hover:cursor-pointer"
				>
					Add Task
				</button>
			</div>
		</div>
	);
}

export default AddTodo;
