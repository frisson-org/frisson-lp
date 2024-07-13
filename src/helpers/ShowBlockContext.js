import React, { createContext, useContext, useState } from 'react';

const ShowBlockContext = createContext();

export function ShowBlockProvider( { children } ) {
	const [ showBlock, setShowBlock ] = useState( false );

	return (
		<ShowBlockContext.Provider value={ { showBlock, setShowBlock } }>
			{ children }
		</ShowBlockContext.Provider>
	);
}

export function useShowBlock() {
	return useContext( ShowBlockContext );
}
