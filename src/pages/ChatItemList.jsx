import { Col, Container, Row } from "react-bootstrap"
import { ChatItem } from "react-chat-elements"
import { useNavigate } from "react-router-dom"

const ChatItemList = ({ chatList, onClick, alt, title, subtitle, unread, id, avatar }) => {
    const navigate = useNavigate()

    // navigate to chatroom
    
    
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
                            onClick={()=> navigate(`/consult/chatroom/${id}`) }
                        />
                    {/* </Col>
                </Row>
            </Container> */}
        </>
    )
}

export default ChatItemList
