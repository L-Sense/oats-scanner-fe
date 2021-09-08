import React from "react";
import Header from "../components/header";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';
import { authenticationService } from "../services/authenticationService";

function DefaultLayout ({children}){
    const history = useHistory()
    useEffect(()=>{
		authenticationService.authorize()
		.catch( res => {
            history.push('/login')
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
    
    return(
        <div>
        <Header login={true}/>
        {children}
    </div>
    )
};

export default DefaultLayout;