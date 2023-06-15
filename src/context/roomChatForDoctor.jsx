import { createContext, useState } from "react";

export const RoomChatForDoctorContext = createContext();

const RoomChatForDoctorProvider = ({ children }) => {
  const [roomChatDoctor, setRoomChatDoctor] = useState();

  return <RoomChatContext.Provider value={{ roomChatDoctor, setRoomChatDoctor }}>{children}</RoomChatContext.Provider>;
};

export default RoomChatForDoctorProvider;
