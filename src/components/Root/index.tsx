import React, { useEffect } from 'react';
import StockNavbar from './StockNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { loadAuthUser } from '../../store/auth/actions';
import Content from './Content';

const Root = (): JSX.Element => {
	const dispatch = useDispatch();
	const hasChecked = useSelector((state: RootState) => state.auth.hasChecked);
	useEffect(() => {
		dispatch(loadAuthUser());
	}, [dispatch]);

	// TODO include spinner until auth is checked

	return (
		<div>
			<StockNavbar />
			{hasChecked && <Content />}
		</div>
	);
};

export default Root;
