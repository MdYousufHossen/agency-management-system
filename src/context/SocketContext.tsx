import { createContext, useRef, useState } from "react";
import { io } from "socket.io-client";
const SocketContext = createContext<null | any>(null);

const socket = io(import.meta.env.VITE_API_URL as string);

const SocketProvider = ({ children }: any) => {
    const [callAccepted, setCallAccepted] = useState(false);
    const [callEnded, setCallEnded] = useState(false);
    const [stream, setStream] = useState<any>();
    const [name, setName] = useState("");
    const [call, setCall] = useState<any>({});
    const [me, setMe] = useState("");

    const myVideo = useRef<any>();
    const userVideo = useRef<any>();
    const connectionRef = useRef<any>();

    // useEffect(() => {
    //     // UserStream();
    //     navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then((currentStream) => {
    //         setStream(currentStream);

    //         myVideo.current.srcObject = currentStream;
    //     });
    //     // socket.on("me", (id) => setMe(id));

    //     socket.on("callUser", ({ from, name: callerName, signal }) => {
    //         setCall({ isReceivingCall: true, from, name: callerName, signal });
    //     });
    // }, []);

    // const answerCall = () => {
    //     setCallAccepted(true);

    //     const peer = new Peer({ initiator: false, trickle: false, stream });

    //     peer.on("signal", (data: any) => {
    //         socket.emit("answerCall", { signal: data, to: call.from });
    //     });

    //     peer.on("stream", (currentStream: any) => {
    //         userVideo.current.srcObject = currentStream;
    //     });

    //     peer.signal(call.signal);

    //     connectionRef.current = peer;
    // };

    // const callUser = (id: string) => {
    //     const peer = new Peer({ initiator: false, trickle: false, stream });
    //     peer.on("signal", (data: any) => {
    //         socket.emit("callUser", { userToCall: id, signalData: data, from: me, name });
    //     });
    //     peer.on("stream", (currentStream: any) => {
    //         userVideo.current.srcObject = currentStream;
    //     });
    //     socket.on("callAccepted", (signal) => {
    //         setCallAccepted(true);
    //         peer.signal(signal);
    //     });
    // };

    // const leaveCall = () => {
    //     setCallEnded(true);

    //     connectionRef.current.destroy();

    //     window.location.reload();
    // };

    return (
        <SocketContext.Provider
            value={{
                call,
                callAccepted,
                myVideo,
                userVideo,
                stream,
                name,
                setName,
                callEnded,
                me,
                // callUser,
                // leaveCall,
                // answerCall,
            }}
        >
            {children}
        </SocketContext.Provider>
    );
};

export { SocketContext, SocketProvider };