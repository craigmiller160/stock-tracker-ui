import React from 'react';
import { useSelector } from 'react-redux';
import { isAuthorized } from '../../../store/auth/selectors';
import { RootState } from '../../../store';
import { Navbar } from '@craigmiller160/react-material-ui-common';

const StockNavbar = (): JSX.Element => {
	const isAuth = useSelector(isAuthorized);
	const hasChecked = useSelector<RootState, boolean>(
		(state) => state.auth.hasChecked
	);

	return (
		<Navbar
			isAuth={isAuth}
			showAuthBtn={hasChecked}
			login={() => {}}
			logout={() => {}}
			title="Stock Tracker"
			items={[]}
		/>
	);
};

export default StockNavbar;
