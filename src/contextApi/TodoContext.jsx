import { createContext, useState } from "react";
import { nanoid } from "nanoid";

export const todoData = createContext();

function TodoContext({ children }) {
	let [task, setTask] = useState([
		{ id: nanoid(), task: "sleep", isDone: false },
	]);

	return (
		<todoData.Provider value={{ task, setTask }}>{children}</todoData.Provider>
	);
}

export default TodoContext;
