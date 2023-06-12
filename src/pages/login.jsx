import React, { useState } from 'react'
import "./../styles/loginregis.css"
import loginLogo from './../assets/login.svg'
import { Link } from "react-router-dom";
import axios from 'axios';

function Login() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  const handleLogin=async(e)=>{
    e.preventDefault()

    let res = await axios.get("https://6454b891f803f345762f6469.mockapi.io/users");
    let data = await res.data;

    const ambilData = () => {
      const result = [];
      for (let i = 0; i < data.length; i++) {
        if (data[i].email == email && data[i].password == password) {
          result.push(data[i]);
        }
      }

      if (result < 1) {
    alert("Gagal Login")
      } else {
    alert("Berhasil Login")
    localStorage.setItem("idUser", result[0].id)
      }
    };
    ambilData();
  };

  return (
    <div>
    <section className="login d-flex">
      <div className="login-left h-100">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-7">
            <div className="header">
              <h1>Halo, Carefriends</h1>
              <p>Login dulu yuk sebelum kamu mengakses Carevul</p>
            </div>
            <div className="login-form">

              <form id="form-login" onSubmit={handleLogin}>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Masukkan Email" />

                <label htmlFor="password" className="form-label mrgn-1">Password</label>
                <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Masukkan Password" />

                <button className="btn-2" type="submit">Login</button>
              </form>
              <p className="fsize-15 d-block text-center">
                Kamu belum punya akun?
                <Link to={"/regis"} style={{ textDecoration: "none" }}>
                <span className="regis">Daftar Disini</span>
              </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="login-right w-50 h-100 bg-color">
        <div className="d-flex justify-content-center py-5">
          <img src={loginLogo} alt="" />
        </div>
      </div>
    </section>

    </div>
  )
  }

export default Login