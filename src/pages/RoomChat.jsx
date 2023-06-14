import { useContext, useEffect, useState } from "react";
import { Avatar, Input, MessageBox, Navbar } from "react-chat-elements";
import { RoomChatContext } from "../context/roomChatContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RoomChat = () => {
  const { roomChat } = useContext(RoomChatContext);

  const [chatData, setChatData] = useState([]);
  const [inputChat, setInputChat] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getChatData = async () => {
      if (roomChat) {
        const roomWithChats = await axios.get(`http://sk-chat-api.vercel.app/api/chat?roomId=${roomChat?.id}`).then((res) => res.data);
        console.log(roomWithChats);
        setChatData(roomWithChats?.chats);
      }
    };

    getChatData();
  }, [roomChat]);

  // get data login from localstorage
  const loggedUser = JSON.parse(localStorage.getItem("idUser"));

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    await fetch(`http://sk-chat-api.vercel.app/api/chat?roomId=${roomChat?.id}`, {
      method: "POST",
      headers: {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      },
      body: JSON.stringify({
        userId: loggedUser.id,
        message: inputChat,
      }),
    });

    setInputChat("");

    const roomWithChats = await axios.get(`http://sk-chat-api.vercel.app/api/chat?roomId=${roomChat?.id}`).then((res) => res.data);
    setChatData(roomWithChats?.chats);
  };

  return (
    <>
      <Navbar left={<Avatar src={roomChat?.doctor?.image} alt="avatar" size="xlarge" type="rounded" />} center={<div>{roomChat?.doctor?.name}</div>} right={<div>Dokter {roomChat?.doctor?.kategori}</div>} type="light" />
      <div className="col ">
        <div id="chatroom-box">
          {chatData.map((item, index) => (
            <MessageBox
              position="left"
              // title={item.message}
              type="text"
              text={item.message}
              date={new Date()}
              replyButton={true}
            />
          ))}
          {/* <MessageBox
                    position='right'
                    title='Burhan'
                    type='text'
                    text="Hi there !"
                    date={new Date()}
                    replyButton={true}
                /> */}
        </div>
      </div>
      <div className="col">
        <form className="d-flex justify-content-between" onSubmit={(e) => handleSubmitForm(e)}>
          <Input placeholder="Type here..." type="text" value={inputChat} onChange={(e) => setInputChat(e.target.value)} /> <button className="btn color-carevul-gradient">Send</button>
        </form>
      </div>
    </>
  );
};

export default RoomChat;
