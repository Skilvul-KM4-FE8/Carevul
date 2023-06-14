import { useContext } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ChatItem } from "react-chat-elements"
import { useNavigate } from "react-router-dom"
import { RoomChatContext } from "../context/roomChatContext"

const ChatItemList = ({ chatList, onClick, alt, title, subtitle, unread, id, avatar, data }) => {
    const navigate = useNavigate()

    const {roomChat, setRoomChat} = useContext(RoomChatContext)
    console.log(roomChat)
    // navigate to chatroom
    const handleClickChatItem = async() => {
        // e.preventDefault()
        await setRoomChat(data)
         console.log(data)
        navigate(`/consult/chatroom/${id}`)
    }

    
    
    return (
        <>
            {/* <Container>
                <Row>
                    <Col> */}
                        <ChatItem avatar={avatar}
                            alt={alt}
                            title={title}
                            subtitle={subtitle}
                            date={new Date()}
                            unread={unread}
                            id={id}
                            // onClick={()=> navigate(`/consult/chatroom/${id}`) }
                            onClick={() => handleClickChatItem()}
                        />
                    {/* </Col>
                </Row>
            </Container> */}
        </>
    )
}

export default ChatItemList
