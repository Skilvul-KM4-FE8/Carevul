import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

import ListDoctor from './pages/ListDoctor.jsx'
import Layout from './components/Layout.jsx'
import PaymentPage from './pages/PaymentPage'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Ini Layout biar tetep ada di semua halaman. Misalnya Navbar, Footer Bisa di taroh sini */}
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />} >
        {/* Di bawah sini bisa di taroh tiap halaman yang kalian buat Contohnya :  */}
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route path="/article" element={<About />} /> */}
        <Route path="/paymentdoctor" element={<PaymentPage />} />
        <Route path="/listdoctor" element={<ListDoctor />} />

      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Semua Router yang kita buat di atas,  nanti bakalan di load di Router Provider di bawah ini */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
