import React from 'react';

import TodosInput from './TodosInput';
import TodosList from './TodosList';
import TodosFilter from './TodosFilter';

export default function Todos() {
	return (
		<div id="Todos" className="container">
			<div className="row justify-content-center">
				<div className="col-6 alert alert-info">
					<h1> Todos List </h1>
					<TodosInput />
					<TodosList />
					<TodosFilter />
				</div>
			</div>
		</div>
	);
}
