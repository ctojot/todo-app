import React from 'react';
import Todo from './Components/Todo';
import ThemeProvider from './Context/Settings'
import ThemeSettings from 

export default class App extends React.Component {
	render() {
		return (
			// Anything between the opening and closing is a child, any child can be a consumer
			<ThemeProvider>

				<Todo />
			</ThemeProvider>
		);
	}
}