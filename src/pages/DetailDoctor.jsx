import { useEffect } from "react";
import ChatItemList from "./ChatItemList";
import { Outlet } from "react-router-dom";

const DetailDoctor = () => {
    const [availableChatRooms, setAvailableChatRooms] = useState([]);

    // get data logged doctor from localstorage
    const loggedDoctor = JSON.parse(localStorage.getItem("idDoctor"));

    useEffect(() => {
        const getBookedUsers = async () => {
            const doctorChatRooms = await axios.get(`https://sk-chat-api.vercel.app/api/room?doctorId=${loggedDoctor.id}`).then((res) => res.data);
            const usersData = await axios.get(`https://6454b891f803f345762f6469.mockapi.io/users`).then((res) => res.data);

            const chatRooms = doctorChatRooms.map((room) => {
                const user = usersData.find((user) => user.id === room.userId);
                return { ...room, user, idDoctor: loggedDoctor.id, idUser: user.id };
            });

            console.log({ chatRooms });
            setAvailableChatRooms(chatRooms);
        };
        getBookedUsers();
    }, []);

    return (
        <>
            <section id="chat-user">
                <div className="border container rounded shadow">
                    <div className="row">
                        <div className="col-4">
                            <section id="chatListRoom">
                                <div className="container-fluid">
                                    {availableChatRooms.map((roomData) => (
                                        <div className="row">
                                            <div className="col-12">
                                                <ChatItemList 
                                                    key={roomData.id}
                                                    avatar={roomData.user.image}
                                                    alt={roomData.user.email}
                                                    title={roomData.user.name}
                                                    subtitle={roomData.user.email}
                                                    date={new Date()}
                                                    unread={0}
                                                    id={roomData.id}
                                                    data={roomData}
                                                />
                                            </div>
                                        </div>
                                    ))}     
                                </div>
                            </section>
                        </div>
                        <div className="col-8">
                            <section id="room-chat">
                                <Outlet />
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DetailDoctor