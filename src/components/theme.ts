import { createMuiTheme } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';

const theme = createMuiTheme({
	palette: {
		primary: {
			main: green[500]
		},
		secondary: {
			main: green[200]
		}
	}
});

export default theme;
