import React , {lazy, Suspense} from "react";
import { Spin } from "antd";
import  {Navigate, Route, Routes} from 'react-router-dom'
import Layout from "../containers/layout/layout";

const Login = lazy(()=>import('../containers/authentication/login'));


const NotFound= ()=>{
    return <Navigate to='/' />
}

const dashboardRoute = () =>{
    return (
        
           
              <Routes>
                <Route path="layout" element={<Layout />}>
                    <Route exact path='login' element={<Login/>} />
                    <Route exact path='*' element={<NotFound />} />
                </Route>
             </Routes>  
        
    )
}

export default dashboardRoute;