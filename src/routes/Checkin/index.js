import Webcam from "react-webcam";
import React from 'react';
import { Grid, Button, ButtonGroup } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';
import { useState } from "react";
import { attendanceService } from "../../services/attendanceService";

export default function Home() {
	const webcamRef = React.useRef(null);
    const [isCheckin, setIsCheckin] = useState(true);
	const capture = React.useCallback(
		() => {
		const imageSrc = webcamRef.current.getScreenshot();
		// console.log(imageSrc);
        attendanceService.checkin(imageSrc, isCheckin);
	}, [isCheckin] );

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
                <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    startIcon={<SaveIcon />}
                    onClick={capture}
                >
                    Capture
                </Button>
            </Grid>
		</div>
	);
};
