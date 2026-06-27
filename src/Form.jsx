import { useState } from "react";

export default function Form() {
	let [formData, setFormData] = useState({
		username: "",
		fullname: "",
		password: "",
	});

	let handleFormChage = (e) => {
		let fieldname = e.target.name;
		let value = e.target.value;

		setFormData((curData) => {
			return { ...curData, [fieldname]: value };
		});
	};

	let handleSubmit = (e) => {
		e.preventDefault();
		// console.log(formData);
	};

	return (
		<div>
			<h1>Todo List</h1>

			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="enter username"
					value={formData.username}
					onChange={handleFormChage}
					name="username"
				/>
				<br />
				<br />

				<input
					type="text"
					placeholder="enter fullname"
					value={formData.fullname}
					onChange={handleFormChage}
					name="fullname"
				/>
				<br />
				<br />

				<input
					type="text"
					placeholder="enter password"
					value={formData.password}
					onChange={handleFormChage}
					name="password"
				/>
				<br />
				<br />

				<button>Add Task</button>
			</form>
		</div>
	);
}
