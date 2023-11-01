import SettingsProvider, { SettingsContext } from "./index";
import { useContext, userContext } from 'react'
import { render, screen } from '@testing-library/react'

describe('Settings Context', () => {
	test('Should give sort, hideCompleted, and showItems to children', () => {

		render(
			<SettingsProvider>
				<SettingsContext.Consumer>
					{(context) => (
						<>
							<p>{context.sort}</p>
							<p>{context.displayItems}</p>
							<p>{`${context.hideCompleted}`}</p>
						</>
					)}

				</SettingsContext.Consumer>
			</SettingsProvider>
		);
		expect(screen.getByText('3')).toBeVisible();
		expect(screen.getByText('false')).toBeVisible();
		expect(screen.getByText('difficulty')).toBeVisible();
	});
});