const BookingPage = () => {
    return (
        <>
            <h1>booking page</h1>
            <h5>Jadwal Anda</h5>
                            <p>Tanggal : 12 Jun 2023 | 20:00 WIB <br />
                            Nama Dokter : <span className="text-carevul">dr. Jakwan Bagung</span></p>
                            <h6>Nama Lengkap :  </h6>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Masukkan Nama Lengkap" aria-label="Username" aria-describedby="basic-addon1" name="client_name" id="input-name" />
                            </div>
                            <h6>Keluhan : </h6>
                            <div className="form-floating">
                                <textarea className="form-control" placeholder="Leave a comment here" id="input-keluhan"></textarea>
                                <label for="input-keluhan">Silahkan tuliskan keluhan anda : </label>
                            </div>
                            <div className="text-center mt-4">
                                <p className="fw-light text-carevul"> Harap memasuki roomchat konsultasi pada jadwal yang di tentukan</p>

                                <button id="btn-confirm" className="btn color-carevul-gradient text-white" type="submit" name="confirm">Konfirmasi</button>
                            </div>
        </>
    )
}

export default BookingPage