import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import SideBarProvider from './context/SideBarProvider.tsx';
import DashBoardProvider from './context/DashBoardProvider.tsx';
import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <CookiesProvider defaultSetOptions={{ path: '/', sameSite: 'strict', secure: true, domain: 'localhost' }}>
        <SideBarProvider>
          <DashBoardProvider>
            <App />
          </DashBoardProvider>
        </SideBarProvider>
      </CookiesProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
