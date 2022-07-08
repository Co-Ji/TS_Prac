import React from 'react';

const PracType = () => {
	/* eslint-disable no-unused-vars */

	type Todo = {
		id: number;
		text: string;
		done: boolean;
	};

	type ReadonlyTodo = Readonly<Todo>;

	const todo1: Todo = {
		id: 1,
		text: 'todo1',
		done: false,
	};

	const toggleTodo = (todo: Todo): Todo => {
		todo1.done = !todo1.done;

		return {
			id: todo.id,
			text: todo.text,
			done: !todo.done,
		};
	};

	return <div>타입스크립트 연습1</div>;
};

export default PracType;
