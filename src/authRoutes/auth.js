import React , {lazy, Suspense} from "react";
import { Spin } from "antd";
import  {Route, Routes, Navigate} from 'react-router-dom'
import AuthLayout from "../containers/authentication/wrapped";

const Login = lazy(()=>import('../containers/authentication/login'));


const NotFound= ()=>{
    return <Navigate to='/' />
}

const AuthenticateRoute = () =>{
    return (
        <Routes>
            <Route exact path='/' element={<Login />} />
            <Route exact path='*' component={<NotFound />} />
        </Routes>
    )
}

export default AuthLayout(AuthenticateRoute)