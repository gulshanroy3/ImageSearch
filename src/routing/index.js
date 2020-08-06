import React, { memo } from 'react';
import { Route } from 'react-router-dom';
import { withAuthentication } from './auth';
import { withRouter } from 'react-router';
import routes from "./routes"


function Routing() {
    return (

           routes.map((eachRoute,index)=>{
             return(
                <eachRoute.layout>
                <Route path={eachRoute.path} component={eachRoute.component} key={index} />
           </eachRoute.layout>
             )
           })
         
    );
}

export default memo(withRouter((withAuthentication(Routing))));
