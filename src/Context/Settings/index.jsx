import React, { useState, useEffect } from 'react';

// This is the object that will track values
export const SettingsContext = React.createContext();

// This is the Provider that must be present at the root of our app.
function SettingsProvider(props) {
	const [displayItems, setDisplayItems] = useState(3);
	const [hideCompleted, setHideCompleted] = useState(false);
	const [sort, setSort] = useState('difficulty');

	const toggleCompleted = () => {
		if (hideCompleted === false) {
			setHideCompleted(true);	
		} else {
			setHideCompleted(false);
		}
	}
	

	useEffect(() => {
		if (hideCompleted === true) {
			setHideCompleted(true);
		} else {
			setHideCompleted(false);
		}
	}, [displayItems] )

	return (
		// The value prop must be called value
		<SettingsContext.Provider value={{ displayItems, hideCompleted, sort, toggleCompleted }}>
			{/* This is not banana*/}
			{props.children}
		</SettingsContext.Provider>
	)
}

export default SettingsProvider;