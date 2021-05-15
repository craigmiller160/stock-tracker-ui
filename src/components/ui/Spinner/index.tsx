import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Spinner.scss';

const style = {
	width: '100%',
	height: '100%'
};

const Spinner = (): JSX.Element => (
	<div className="SpinnerRoot">
		<CircularProgress style={style} />
	</div>
);

export default Spinner;
