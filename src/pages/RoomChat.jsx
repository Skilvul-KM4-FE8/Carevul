import { useContext, useEffect, useState } from "react"
import { Avatar, Input, MessageBox, Navbar } from "react-chat-elements"
import { RoomChatContext } from "../context/roomChatContext"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const RoomChat = () => {
    const {roomChat, setRoomChat} = useContext(RoomChatContext)

    const [inputChat, setInputChat] = useState('')

    const navigate = useNavigate()

    // if room chat false, navigate to chatroom
    // (!roomChat) && navigate('/consult/chatroom')
    // move to /consult/chatroom if roomChat is false
    // if (!roomChat) {
    //     window.location.href = '/consult/chatroom'
    // } else {
    //     window.location.href = `/consult/chatroom/${roomChat.idRoom}`
    // }
    // (roomChat) ? navigate('/consult/chatroom') : navigate(`/consult/chatroom/${roomChat.idRoom}}`)

    // get data login from localstorage
    const loggedUser = JSON.parse(localStorage.getItem("idUser"))

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        console.log(loggedUser.id)
        console.log(roomChat.idRoom)
        console.log(inputChat)
        // await axios.post(`http://sk-chat-api.vercel.app/api/room/${roomChat.idRoom}/chat`, {
        //     userId: loggedUser.id,
        //     message: inputChat
        // })
        fetch(`http://sk-chat-api.vercel.app/api/room/${roomChat.idRoom}/chat`, {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: loggedUser.id,
                message: inputChat
            })
        })
        setInputChat('')
        
        console.log(inputChat)
    }

    useEffect(() => {

        fetch(`https://sk-chat-api.vercel.app/api/room/${roomChat.idRoom}`)
        const   getRoomChat = async () => {
            let res = await axios.get(`https://sk-chat-api.vercel.app/api/room/${roomChat.idRoom}`)
            // let res = await axios.get(`https://6454b891f803f345762f6469.mockapi.io/users`)
            let result = await res.data
            console.log(res)
            setRoomChat(result)
            console.log(result)
        }

        getRoomChat()
        console.log(roomChat)
    }, [])

    return (
        <>
            <Navbar
                left={<Avatar
                    src={roomChat.image}
                    alt="avatar"
                    size="xlarge"
                    type="rounded"
                />}
                center={<div>{roomChat.name}</div>}
                right={<div>Dokter {roomChat.kategori}</div>}
                type="light"
            />
            <div className="col ">
                <div id="chatroom-box">
                <MessageBox
                    position='left'
                    title='Burhan'
                    type='text'
                    text="Hi there !"
                    date={new Date()}
                    replyButton={true}
                />
                <MessageBox
                    position='right'
                    title='Burhan'
                    type='text'
                    text="Hi there !"
                    date={new Date()}
                    replyButton={true}
                />

                </div>
            </div>
            <div className="col">
                <form className='d-flex justify-content-between' onSubmit={e => handleSubmitForm(e)}>
                    <Input placeholder="Type here..." type='text' value={inputChat} onChange={e => setInputChat(e.target.value)} /> <button className='btn color-carevul-gradient'>Send</button>
                </form>
            </div>
        </>
    )
}

export default RoomChat