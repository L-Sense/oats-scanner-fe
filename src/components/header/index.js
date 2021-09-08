import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import oatslogo from '../../assets/oatslogo.png' 
import { authenticationService } from '../../services/authenticationService';
import useStyles from './theme';
import { useHistory } from 'react-router-dom';


export default function Header(props){
	const classes = useStyles();
	const history = useHistory();

	function handleLogout(){
		authenticationService.logout();
		history.push('/login')
	}

	return (
	<header>
		<AppBar position="static" className={classes.appbar}>
		<Toolbar>
			<Avatar alt="OATS icon" src={oatslogo}/>
			<Typography variant="h6" align="left" className={classes.title}>
				<Box fontFamily="Monospace" letterSpacing={5} fontSize={25} m={2}>
					OATS
				</Box>
			</Typography>
			{props.login && 
				<Button className={classes.logoutButton} 
				variant="outlined" 
				color="inherit" 
				size="small"
				onClick={handleLogout}
			>
				Logout
			</Button>
			}
		</Toolbar>
		</AppBar>
	</header>
	)
};
