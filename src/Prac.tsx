import React from 'react';

const Prac = () => {
	const abc = 'abc';
	const abcd = 'abcd';
	const ab = {
		ab: abc,
		abcd: abcd,
	};
	const abcde = {
		ab: abc,
		abcd: abcd,
	};
	const fruit = ['apple', 'banana', 'grape'];

	const eat = () => {
		console.log(fruit);
	};

	console.log(abc, abcd, ab);

	return <div>hello</div>;
};

export default Prac;
