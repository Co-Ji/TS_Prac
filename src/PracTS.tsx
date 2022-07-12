/* eslint-disable no-unused-vars */

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 300px;
	margin: 100px auto;
`;
const TodoInput = styled.input``;
const TodoContainer = styled.div`
	display: flex;
`;

const PracTS = () => {
	type Todo = {
		id: number;
		text: string;
		done: boolean;
	};

	const todo1: Todo = {
		id: 1,
		text: 'First todo',
		done: false,
	};

	const todo2: Todo = {
		id: 1,
		text: 'Second todo',
		done: false,
	};

	const todoComplete = (e: { target: any }) => {
		console.log(e.target.value);
	};

	return (
		<Container>
			<TodoContainer>
				<TodoInput type="checkbox" onClick={todoComplete} />
				<div>{todo1.text}</div>
			</TodoContainer>
			<TodoContainer>
				<TodoInput type="checkbox" />
				<div>{todo2.text}</div>
			</TodoContainer>
			<p>Mark all as completed</p>
		</Container>
	);
};

export default PracTS;
