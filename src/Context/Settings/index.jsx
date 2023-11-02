import React, { useState, useEffect } from 'react';

// This is the object that will track values
export const SettingsContext = React.createContext();

// This is the Provider that must be present at the root of our app.
function SettingsProvider(props) {
	const [displayItems, setDisplayItems] = useState(3);
	const [hideCompleted, setHideCompleted] = useState(false);
	const [sort, setSort] = useState('difficulty');

	const toggleComplete = () => setHideCompleted(!hideCompleted);
	const changeDisplayItems = (num) => {
		if (typeof (parseInt(num)) === 'number') {
			setDisplayItems(num);
		} else {
			console.log('Choose the amount you want to list');
		}
	}
	

	useEffect(() => {
		let settingsValuesFromLocalStorage = JSON.parse(localStorage.getItem('settings'));
		if (settingsValuesFromLocalStorage) {
			setDisplayItems(settingsValuesFromLocalStorage.displayItems);
			setHideCompleted(settingsValuesFromLocalStorage.hideCompleted);
		}
	}, []); // runs once! When the component "mounts"

	useEffect(() => {
		// saving values to localstorage
		localStorage.setItem('settings', JSON.stringify({ displayItems, hideCompleted }));
		// console.log(localStorage);
	}, [hideCompleted, displayItems]);

	return (
		// The value prop must be called value
		<SettingsContext.Provider value={{ displayItems, hideCompleted, sort, toggleComplete, changeDisplayItems }}>
			{/* This is not banana*/}
			{props.children}
		</SettingsContext.Provider>
	)
}

export default SettingsProvider;