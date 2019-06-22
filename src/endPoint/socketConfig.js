import socketIOClient from "socket.io-client";
import endPoint from "./index";
let socket = socketIOClient(endPoint);
export default socket;
