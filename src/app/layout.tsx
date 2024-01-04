import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import React from 'react'
import { AuthProvider } from './contexts/AuthContext'
import CartContext from './contexts/cartContext'
import { LoginProvider } from './contexts/LoginContext'
import { ForgotPasswordProvider } from './contexts/forgotPassword'
import { ChangePasswordProvider } from './contexts/changePassword'
import Header from './components/Header'

const roboto = Roboto({weight: ["100", "300", "400", "500", "700", "900"], subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Plataforma de cursos',
  description: 'A Melhor plataforma de cursos de desenvolvimento web',
}

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-br">
        <body className={`${roboto.className} bg-slate-200`}>
            <AuthProvider>
              <CartContext>
                <LoginProvider>
                  <ForgotPasswordProvider>
                    <ChangePasswordProvider>
                      {children}
                    </ChangePasswordProvider>
                  </ForgotPasswordProvider>
                </LoginProvider>
              </CartContext> 
            </AuthProvider> 
        </body>
    </html>
  )
}
