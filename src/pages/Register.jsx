import React from 'react'
import "./../styles/loginregis.css"
import regisLogo from './../assets/register.svg'
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
    <section class="login d-flex">
      <div class="login-left h-100">
        <div class="row justify-content-center align-items-center h-100">
          <div class="col-7">
            <div class="header">
              <h1>Daftar dulu yuk</h1>
              <p>Gratis konsultasi di Carevul dimanapun dan kapanpun</p>
            </div>
            <div class="login-form">

              <form id="form-register">
                <label for="name" class="form-label">Nama</label>
                <input type="text" class="form-control" id="name" placeholder="Masukkan Nama" />

                <label for="email" class="form-label mrgn-1">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Masukkan Email" />

                <label for="password" class="form-label mrgn-1">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Masukkan Password" />

                <button class="btn-regis" type="submit">Daftar</button>
              </form>
              <p class="fsize-15 d-block text-center">
                Sudah punya akun?
                <Link to={"/login"} style={{ textDecoration: "none" }}>
                <span class="regis">Silahkan Login</span>
              </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="login-right w-50 h-100 bg-color">
        <div class="d-flex justify-content-center py-5">
        <img src={regisLogo} alt="" />
        </div>
      </div>
    </section>
    </div>
  )
}

export default Register