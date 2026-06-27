import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
	let [dataII, setData] = useState([]);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm();

	let handleForm = (data) => {
		data.id = "101";
		console.log(data);

		let copyData = [...dataII];
		copyData.push(data);
		setData(copyData);

		reset();
	};

	return (
		<div>
			<h1>React Hook Form</h1>
			<form onSubmit={handleSubmit(handleForm)}>
				<input type="text" placeholder="username" {...register("firstName")} />
				<br />
				<br />
				<input type="text" placeholder="fullname" {...register("fullname")} />
				<br />
				<br />
				<input type="text" placeholder="password" {...register("password")} />
				<br />
				<br />

				<button>Submit</button>
			</form>
		</div>
	);
}

export default ReactHookForm;
