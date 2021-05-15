import React from 'react';
import { CircularProgress } from '@material-ui/core';
import './Spinner.scss';

const Spinner = () => (
    <div className="SpinnerRoot">
        <CircularProgress />
    </div>
);

export default Spinner;
