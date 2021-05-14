import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import store from '../store';
import Root from './Root';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

const App = (): JSX.Element => (
    <ReduxProvider store={ store }>
        <BrowserRouter basename="/stock-tracker">
            <ThemeProvider theme={ theme }>
                <Root />
            </ThemeProvider>
        </BrowserRouter>
    </ReduxProvider>
);

export default App;
