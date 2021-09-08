import { Container, Typography, Button } from "@material-ui/core";
import oatslogo from '../../assets/oatslogo.png';

export default function NotFound(){
    return(
        <div>
          <br/>
          <br/>
          <br/>
          <br/>
          <Container maxWidth="sm" align="center">
            <img src={oatslogo} alt="oats logo" width="15%"/>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Page not found :(
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Maybe the page you are looking for has been removed, or you typed in the wrong URL
            </Typography>
            <br/>
            <Button variant="contained" color="primary" align="center" href="/">
              Go to homepage
            </Button>
          </Container>
        </div>
    )
}