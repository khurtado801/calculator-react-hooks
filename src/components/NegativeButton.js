import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const NegativeButton = ({ buttonValue }) => {
	const { handleToggleNegative } = useContext(NumberContext);
	return (
		<button type="button" className="white-button" onClick={() => handleToggleNegative()}>
            -/+
		</button>
	);
};

export default NegativeButton;