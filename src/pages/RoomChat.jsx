import { Avatar, MessageBox, Navbar } from "react-chat-elements"

const RoomChat = () => {
    return (
        <>
            <Navbar
                left={<Avatar
                    src="https://avatars.githubusercontent.com/u/80540635?v=4"
                    alt="avatar"
                    size="xlarge"
                    type="rounded"
                />}
                center={<div>Jakwan Bagung</div>}
                right={<div>Pasien</div>}
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
        </>
    )
}

export default RoomChat