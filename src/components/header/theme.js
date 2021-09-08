import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	appbar:{
		background : '#2E3B55',
	},
	root: {
	  flexGrow: 1,
	},
	logoutButton: {
      color:'#e4675d',
	},
	title: {
	  flexGrow: 1,
	},
}));

export default useStyles;