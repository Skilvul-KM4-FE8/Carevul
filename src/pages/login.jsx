import React from 'react'
import "./../styles/loginregis.css"
import loginLogo from './../assets/login.svg'
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
    <section class="login d-flex">
      <div class="login-left h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-7">
            <div class="header">
              <h1>Halo, Carefriends</h1>
              <p>Login dulu yuk sebelum kamu mengakses Carevul</p>
            </div>
            <div class="login-form">

              <form id="form-login">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Masukkan Email" />

                <label for="password" class="form-label mrgn-1">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Masukkan Password" />

                <button class="btn-2" type="submit">Login</button>
              </form>
              <p class="fsize-15 d-block text-center">
                Kamu belum punya akun?
                <Link to={"/regis"} style={{ textDecoration: "none" }}>
                <span class="regis">Daftar Disini</span>
              </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="login-right w-50 h-100 bg-color">
        <div class="d-flex justify-content-center py-5">
          <img src={loginLogo} alt="" />
        </div>
      </div>
    </section>

    </div>
  )
}

export default Login