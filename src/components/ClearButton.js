import React, { useContext } from 'react';
import { NumberContext } from './NumberProvider';

const ClearButton = () => {
	const { handleClearValue } = useContext(NumberContext);
	return (
		<button type="button" className="white-button" onClick={() => handleClearValue()} >
            CLS
		</button>
	);
};

export default ClearButton;