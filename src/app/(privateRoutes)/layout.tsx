"use client"

import { ReactNode } from "react";
import Header from "./componentsPrivateRoute/Header";

function PrivateRouteLayout({children}: {children: ReactNode}) {
    return ( 
        <>
            <Header/>
            {children} 
        </>
    )
}

export default PrivateRouteLayout;