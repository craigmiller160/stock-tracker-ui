import React, { useEffect } from 'react';
import StockNavbar from './StockNavbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { loadAuthUser } from '../../store/auth/actions';
import Content from './Content';
import Spinner from '../ui/Spinner';

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
			<Spinner />
			{hasChecked && <Content />}
		</div>
	);
};

export default Root;
