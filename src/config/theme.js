import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
  palette: {
    main: '#fff',
  },
  background: {
    primary: '#000',
  },
  typography: {
    fontSize: 12,
    fontFamily: "'Ubuntu', sans-serif, Verdana, 'Trebuchet MS', 'Tahoma'",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    useNextVariants: true,
  },
});
