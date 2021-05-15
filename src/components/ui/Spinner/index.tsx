import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './Spinner.scss';

const style = {
	width: '100%',
	height: '100%'
};

const Spinner = () => (
	<div className="SpinnerRoot">
		<CircularProgress style={style} />
	</div>
);

export default Spinner;
