import { useContext } from "react";
import { todoData } from "../contextApi/todoContext";

function RenderTodo() {
	let { task, setTask } = useContext(todoData);

	let handleDelete = (id) => {
		setTask(task.filter((val) => val.id != id));
	};

	let handleUpperCaseOne = (id) => {
		setTask(
			task.map((val) => (val.id === id ? { ...val, isDone: true } : val)),
		);
	};

	let handleUpperCase = () => {
		setTask(task.map((val) => ({ ...val, isDone: true })));
	};

	let renderTask = task.map((val, index) => {
		return (
			<li
				key={val.id}
				className="flex items-center gap-4 px-5 py-4
    bg-white border border-gray-200 rounded-xl"
			>
				<span
					className={`flex-1 text-lg ${
						val.isDone ? "line-through text-gray-400" : "text-gray-800"
					}`}
				>
					{val.task}
				</span>

				<div className="flex gap-2">
					<button
						onClick={() => handleUpperCaseOne(val.id)}
						disabled={val.isDone}
						className="text-sm px-4 py-2 rounded-lg border
        border-green-300 text-green-600
        hover:bg-green-50 hover:cursor-pointer transition-colors
        disabled:opacity-30 disabled:cursor-not-allowed"
					>
						Mark done
					</button>
					<button
						onClick={() => handleDelete(val.id)}
						className="text-sm px-4 py-2 rounded-lg border
        border-red-300 text-red-500 hover:cursor-pointer
        hover:bg-red-50 transition-colors"
					>
						Delete
					</button>
				</div>
			</li>
		);
	});

	return (
		<div className="max-w-2xl mx-auto mt-6 px-4">
			<div className="bg-blue-100 rounded-2xl p-6 border border-blue-200">
				<ol className="flex flex-col gap-3 mb-5">{renderTask}</ol>
				<button
					onClick={handleUpperCase}
					className="w-full py-3 rounded-xl border border-gray-400
          text-white text-base font-medium bg-amber-500 hover:cursor-pointer"
				>
					Mark all done
				</button>
			</div>
		</div>
	);
}

export default RenderTodo;
