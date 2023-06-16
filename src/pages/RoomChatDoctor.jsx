import { useContext, useEffect, useState } from "react";
import { RoomChatForDoctorContext } from "../context/roomChatForDoctor";
import { useNavigate } from "react-router-dom";
import { Avatar, Input, MessageBox, Navbar } from "react-chat-elements";
import axios from "axios";
import { FiRefreshCcw } from "react-icons/fi";
import { AiOutlineCloudSync } from "react-icons/ai";
import { RiSendPlaneLine } from "react-icons/ri";


const RoomChatDoctor = () => {
    const {roomChatDoctor} = useContext(RoomChatForDoctorContext);

    const [chatData, setChatData] = useState([]);
    const [inputChat, setInputChat] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        const getChatData = async () => {
            if (roomChatDoctor) {
                const roomWithChats = await axios.get(`http://sk-chat-api.vercel.app/api/chat?roomId=${roomChatDoctor?.id}`).then((res) => res.data);
                console.log(roomWithChats);
                setChatData(roomWithChats?.chats);
            }
        };

        getChatData();
    }, [roomChatDoctor]);

    // get data login from localstorage
    const loggedDoctor = JSON.parse(localStorage.getItem("idDoctor"));

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        await fetch(`http://sk-chat-api.vercel.app/api/chat?roomId=${roomChatDoctor?.id}`, {
            method: "POST",
            headers: {
                Accept: "*/*",
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
            },
            body: JSON.stringify({
                userId: loggedDoctor.id,
                message: inputChat,
            }),
        });

        setInputChat("");

        const roomWithChats = await axios.get(`http://sk-chat-api.vercel.app/api/chat?roomId=${roomChatDoctor?.id}`).then((res) => res.data);
        setChatData(roomWithChats?.chats);
    };
            
    const handleRefreshChat = async () => {
        const roomWithChats = await axios.get(`http://sk-chat-api.vercel.app/api/chat?roomId=${roomChatDoctor?.id}`).then((res) => res.data);
        setChatData(roomWithChats?.chats);
    };


    return (
        <>
            <Navbar left={<Avatar src={roomChatDoctor?.user?.image} alt="avatar" size="xlarge" type="rounded" />} center={<div>{roomChatDoctor?.user?.name}</div>} right={<div>Pasien</div>} type="light" />
            <div className="col">
                <div id="chatroom-box">
                    {chatData.map((item, index) => (
                        <MessageBox
                            {...console.log(item)}
                            position={(item.userId === loggedDoctor.id) ? "right" : "left"}
                            // title={item.message}
                            type="text"
                            text={item.message}
                            date={new Date()}
                        />
                    ))}
                </div>
            </div>
            <div className="col">
                <div className="container-fluid">
                    <div className="row">
                        <form className="d-flex justify-content-between align-items-center" onSubmit={(e) => handleSubmitForm(e)}>
                            <div className="col-11">
                                <Input placeholder="Type here..." type="text" value={inputChat} onChange={(e) => setInputChat(e.target.value)} /> 
                            </div>
                            <div className="col-1 d-flex justify-content-end">
                                <button className="btn color-carevul-gradient"><RiSendPlaneLine className="fs-2" /></button>
                                <span className="btn btn-secondary" onClick={handleRefreshChat}><FiRefreshCcw className="text-carevul fs-2" /></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default RoomChatDoctor;