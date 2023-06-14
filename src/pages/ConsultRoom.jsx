import { Link, Outlet } from "react-router-dom";
import noConsult from "./../assets/no_booked_doctor.svg";
import { Col, Container, Row } from "react-bootstrap";
import { Avatar, ChatItem, Input, MessageBox, Navbar } from "react-chat-elements";
import ChatItemList from "./ChatItemList";

import "./../styles/chatroom.css";

import "react-chat-elements/dist/main.css";
import RoomChat from "./RoomChat";
import { useEffect, useState } from "react";
import axios from "axios";

const ConsultRoom = () => {
  // const [bookedDoctors, setBookedDoctors] = useState([
  //     {
  //     "id": 6,
  //     "userId": "32",
  //     "doctorId": "1"
  //     },
  //     {
  //     "id": 7,
  //     "userId": "32",
  //     "doctorId": "1"
  //     }
  //     ])

  const [bookedDoctors, setBookedDoctors] = useState(false);

  const [chatList, setChatList] = useState([]);

  // get data logged user from localstorage
  const loggedUser = JSON.parse(localStorage.getItem("idUser"));
  // console.log(loggedUser.id);

  let tempChat = [];

  useEffect(() => {
    const getBookedDoctors = async () => {
      await axios.get(`https://sk-chat-api.vercel.app/api/room?userId=${loggedUser.id}`).then((response) => setBookedDoctors(response.data));
      // console.log(bookedDoctors);
    };
    getBookedDoctors();
  }, []);

  useEffect(() => {
    if (bookedDoctors) {
      // console.log(bookedDoctors);
      bookedDoctors.map((doctor) => {
        // console.log(doctor.doctorId);
        fetch(`https://6487fbcf0e2469c038fcbc44.mockapi.io/doctor/${doctor.doctorId}`)
          .then((response) => response.json())
          .then(async (data) => {
            await tempChat.push({ ...data, idRoom: doctor.id, idUser: loggedUser.id });
            await setChatList(tempChat);
            // console.log(data);
            // console.log(chatList);
          })
          .catch((err) => console.log(err));
      });
    }
  }, [bookedDoctors]);

  // console.log(chatList);
  // console.log(bookedDoctors);

  return (
    <>
      {/* Section if no booked doctor here */}
      <section id="doctors-list">
        {/* Section no doctor */}
        <div className="row justify-content-md-center ">
          <div className="col-md-7 text-center">
            <p className="text-light-gray fw-light">Silahkan berkonsultasi dengan dokter, ceritakan apa yang kamu rasakan kepada dokter agar dokter dapat memberi solusi buat kamu ya!</p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img src={noConsult} />
          </div>
        </div>
        <div className="row justify-content-md-center mt-2">
          <div className="col-md-4 d-flex">
            <Link to="/consult/category" className="btn color-carevul-gradient flex-fill text-white px-5 py-2">
              Mulai Konsultasi
            </Link>
          </div>
        </div>

        {/* end section no doctor */}
      </section>
      {/* end of this section */}

      {/* Section for chat */}
      <section id="chat">
        <Container className="border">
          <Row>
            <div className="col-4">
              <section id="chatListRoom">
                <Container>
                  <Row>
                    {/* {console.log(chatList)} */}
                    {chatList.map((data) => (
                      <ChatItemList key={data.id} avatar={data.image} alt={data.email} title={data.name} subtitle={data.instansi} date={new Date()} unread={0} id={data.idRoom} data={data}  />
                    ))}
                  </Row>
                </Container>
              </section>
            </div>
            <div className="col-8">
              {/* Section room chat */}
              <section id="roomchat">
                {/* <RoomChat /> */}
                <Outlet />
              </section>
              {/* end section room chat */}
            </div>
          </Row>
        </Container>
      </section>
      {/* End of Section for chat */}
    </>
  );
};

export default ConsultRoom;
