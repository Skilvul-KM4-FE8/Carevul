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
import PaymentProvider from './context/paymentContext'
import BookingPage from './pages/BookingPage'
import Consult from './pages/Consult'
import Landing from './pages/Landing'




const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Ini Layout biar tetep ada di semua halaman. Misalnya Navbar, Footer Bisa di taroh sini */}
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />} >
            <Route path="/" element={<Landing />} />
            {/* Di bawah sini bisa di taroh tiap halaman yang kalian buat Contohnya :  */}
            {/* <Route path="/home" element={<Home />} /> */}
            {/* <Route path="/article" element={<About />} /> */}
            <Route path="/listdoctor" element={<ListDoctor />} />
            <Route path="/paymentdoctor/:id" element={<PaymentPage />} />
            <Route path="/bookingpage" element={<BookingPage />} />
            <Route path="/consult" element={<Consult />} >
              
            </Route>

      </Route>
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PaymentProvider>
      {/* Semua Router yang kita buat di atas,  nanti bakalan di load di Router Provider di bawah ini */}
      <RouterProvider router={router} />
    </PaymentProvider>
  </React.StrictMode>,
)
