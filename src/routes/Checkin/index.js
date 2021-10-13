import Webcam from "react-webcam";
import React from 'react';
import { Grid, Button, ButtonGroup, Typography, CircularProgress } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useState } from "react";
import { attendanceService } from "../../services/attendanceService";

export default function Home() {
	const webcamRef = React.useRef(null);
    const [isCheckin, setIsCheckin] = useState(true);
    const [checking, setChecking] = useState(false);
    const [show, setShow] = useState('');

    async function getImage(){
        const imageSrc = webcamRef.current.getScreenshot();
        setChecking(true);
        const result = await attendanceService.checkin(imageSrc.slice(23), isCheckin);
        setChecking(false);
        console.log(result)
        setShow(result);
        setTimeout(() => {
            setShow('');
        }, 3000);
    }

	return (
		<div>
            <br/>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <ButtonGroup disableElevation variant="contained" color="primary">
                    <Button onClick={()=> setIsCheckin(true)} color={isCheckin?"primary":"default"}>Check In</Button>
                    <Button onClick={()=> setIsCheckin(false)} color={isCheckin?"default":"primary"}>Check Out</Button>
                </ButtonGroup>
            </Grid>
            <br/>

            <Grid container direction="row" justifyContent="center" alignItems="center">
			    <Webcam audio ={false} ref={webcamRef} />
            </Grid>
            <br/>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                {checking && <CircularProgress />}
                <Typography variant="h6" component="div" gutterBottom sx={{ marginX: 'auto' }}>
                    {show}
                </Typography>
            </Grid>
            <br/>

            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                    onClick={getImage}
                >
                    Capture
                </Button>
            </Grid>
		</div>
	);
};
