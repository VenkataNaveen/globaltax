import React from "react";
import { AuthenicateWrapper } from "./style";


const AuthLayout = WrapperComponent =>{
    return () => {
     return (
        <AuthenicateWrapper>
            <div className="box">
                {/* <img src={require('../../static/common/logo.png')} alt="logo"/> */}
                <WrapperComponent />
            </div>
            <div className="box">
            <img src={require('../../static/auth/auth-img.jpg')} alt="dashboard logo" className="auth-img" />
            </div>
        </AuthenicateWrapper>
     )
    
    }
 }

 export default AuthLayout;