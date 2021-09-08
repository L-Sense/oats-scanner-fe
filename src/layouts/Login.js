import React from "react";
import Header from "../components/header";

const LoginLayout = ({children}) => (
    <div>
        <Header login={false}/>
        {children}
    </div>
);

export default LoginLayout;