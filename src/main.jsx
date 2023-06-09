import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/Layout.jsx'
import ArticleHome from './pages/ArticleHome'
import ArticleAltruisme from './pages/ArticleAltruisme'
import ArticleHeatwave from './pages/ArticleHeatwave'
import ArticleCascara from './pages/ArticleCascara'
import ArticleKeluarga from './pages/ArticleKeluarga'
import ArticleMood from './pages/ArticleMood'
import ArticleSelingkuh from './pages/ArticleSelingkuh'
import ArticleStalk from './pages/ArticleStalk'
import ArticleStress from './pages/ArticleStress'
import ArticleVita from './pages/ArticleVita'


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Ini Layout biar tetep ada di semua halaman. Misalnya Navbar, Footer Bisa di taroh sini */}
      <Route path="/" element={<Layout />} errorElement={<ErrorPage />} >
        {/* Di bawah sini bisa di taroh tiap halaman yang kalian buat Contohnya :  */}
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/articlehome" element={<ArticleHome />}/>
        <Route path="/articlevita" element={<ArticleVita />}/>
        <Route path="/articlecascara" element={<ArticleCascara />}/>
        <Route path="/articleheatwave" element={<ArticleHeatwave />}/>
        <Route path="/articleselingkuh" element={<ArticleSelingkuh />}/>
        <Route path="/articlemood" element={<ArticleMood />}/>
        <Route path="/articlestress" element={<ArticleStress />}/>
        <Route path="/articlekeluarga" element={<ArticleKeluarga />}/>
        <Route path="/articlestalk" element={<ArticleStalk />}/>
        <Route path="/articlealtruisme" element={<ArticleAltruisme />}/>
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
