import React, { useState } from 'react';

// This is the object that will track values
export const ThemeContext = React.createContext();

// This is the Provider that must be present at the root of our app.
function ThemeProvider(props) {
	const [mode, setMode] = useState('light');

	const [primaryColor, setPrimaryColor] = useState('baby-blue');

	return (
		// The value prop must be called value
		<ThemeContext.Provider value={{ mode, primaryColor }}>
			{/* This is not banana*/}
			{props.children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider;