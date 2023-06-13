import { Link } from 'react-router-dom'
import noConsult from './../assets/no_booked_doctor.svg'
import { Container, Row } from 'react-bootstrap'
import { Avatar, ChatItem, Input, MessageBox, Navbar } from 'react-chat-elements'
import ChatItemList from './ChatItemList'

import './../styles/chatroom.css'

import "react-chat-elements/dist/main.css"
import RoomChat from './RoomChat'

const ConsultRoom = () => {
    return (
        <>
            {/* Section if no booked doctor here */}
                <section id="doctors-list">
                    <div className="row justify-content-md-center ">
                        <div className="col-md-7 text-center">
                            <p className="text-light-gray fw-light">
                                Silahkan berkonsultasi dengan dokter, ceritakan apa yang kamu rasakan kepada dokter agar dokter dapat memberi solusi buat kamu ya!
                            </p>
                        </div>
                        <div className="col-md-6 d-flex justify-content-center">
                                <img src={noConsult} />
                        </div>
                    </div>
                    <div className="row justify-content-md-center mt-2">
                        <div className="col-md-4 d-flex">
                            <Link to="/consult/category" className="btn color-carevul-gradient flex-fill text-white px-5 py-2">Mulai Konsultasi</Link>
                        </div>
                    </div>
                </section>
            {/* end of this section */}

            {/* Section for chat */}
                <section id="chat">
                    <Container className='border'>
                        <Row>
                            <div className="col-4">
                                <section id="chatListRoom">
                                    <Container>
                                        <Row>
                                                <ChatItemList 
                                                    avatar='https://avatars.githubusercontent.com/u/80540635?v=4'
                                                    alt='Reactjs'
                                                    title='Reactjs'
                                                    subtitle='What are you doing?'
                                                    date={new Date()}
                                                    unread={0}
                                                    id={"test"}
                                                />
                                        </Row>
                                        <Row>
                                                <ChatItemList 
                                                    avatar='https://avatars.githubusercontent.com/u/80540635?v=4'
                                                    alt='Reactjs'
                                                    title='Reactjs'
                                                    subtitle='What are you doing?'
                                                    date={new Date()}
                                                    unread={0}
                                                    id={"test"}
                                                />
                                        </Row>
                                    </Container>
                                </section>
                            </div>
                            <div className="col-8">
                                {/* Section room chat */}
                                <section id="roomchat">
                                    <RoomChat />
                                </section>
                                {/* end section room chat */}
                            <div className="col">
                            <form className='d-flex justify-content-between'>
                                <input placeholder="Type here..." type='text' /> <button className='btn color-carevul-gradient'>Send</button>
                            </form>
                            </div>
                            </div>
                        </Row>
                    </Container>
                </section>
            {/* End of Section for chat */}
        </>
    )
}

export default ConsultRoom