import InfiniteScroll from "react-infinite-scroll-component";
import { useParams } from "react-router-dom";
import { useAppSelector } from "~/app/hooks";
// import Container from "~/components/Container";
import ChatStyle from "~/styles/ChatApp";

const Messages = ({ messages, totalCount }: { messages: messageType[]; totalCount: number }) => {
    const { id } = useParams<keyof { id: string }>() as { id: string };
    const user = useAppSelector((state) => state.auth.user);
    if (!user) return null;
    // const [page, setPage] = useState<number>(1);
    // const fetchMore = () => {
    //     setPage((prevPage) => prevPage + 1);
    // };

    // const [hasMore, setHasMore] = useState(true);
    // const dispatch = useAppDispatch();
    // useEffect(() => {
    //     if (totalCount > 0) {
    //         const more = Math.ceil(totalCount / 10) > page;
    //         setHasMore(more);
    //     }
    // }, [totalCount, page]);

    // useEffect(() => {
    // if (page > 1) {
    //     dispatch(
    //         // messageApi.endpoints.getMoreMessages.initiate({
    //         //     id,
    //         //     page,
    //         // }),
    //     );
    // }
    // }, [page, id, dispatch]);

    return (
        <ChatStyle.messages>
            <InfiniteScroll
                dataLength={10}
                next={() => {}}
                style={{ display: "flex", flexDirection: "column-reverse" }}
                inverse={true}
                hasMore={false}
                loader={<span>Loading...</span>}
                height={window.innerHeight - 115}
            >
                {messages.map((message: messageType) => {
                    return (
                        <ChatStyle.messageWrapper key={message._id} partner={message.sender.email != user.email}>
                            <ChatStyle.message partner={message.sender.email != user.email}>{message.message}</ChatStyle.message>
                        </ChatStyle.messageWrapper>
                    );
                })}
            </InfiniteScroll>
        </ChatStyle.messages>
    );
};

export default Messages;
