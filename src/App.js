import React, { useState } from 'react';
import Calculator from './components/Calculator';
import NumberProvider from './components/NumberProvider';

// const App = () => <h1>Hello, World! <img src={pic} alt="image"/></h1> ;

const App = () => {
	/**
     * The useState hook sort of stores state in functional component.
     * It returns a tuple with a state holder property and a setter method.
     * You invoke useState with the initial value for your state.
     * To update the state you call the setName function
     */
	const [name, setName] = useState(' World!');
	return (
		<div className="App">
			<NumberProvider>
				<Calculator />
			</NumberProvider>
		</div>
	);
};

export default App;
