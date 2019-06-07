import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NumberButton = ({ buttonValue }) => {
	/**
     * The useContext use it in conjunction with Reactjs Context API.
     * When the React Context provider updates, this hook will trigger render with
     * the latest context value.
     */
	const { handleSetDisplayValue } = useContext(NumberContext);
	return (
		<button type="button" onClick={() => handleSetDisplayValue(buttonValue)}>
			{buttonValue}
		</button>
	);
};

export default NumberButton;