"use client"

import { ReactNode } from "react";
import Header from "./componentsPrivateRoute/Header";
import { CartProvider } from "react-use-cart";

function PrivateRouteLayout({children}: {children: ReactNode}) {
    return ( 
        <>
                <Header/>
            <CartProvider>    
                {children}
            </CartProvider>    
        </>
    )
}

export default PrivateRouteLayout;