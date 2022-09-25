import { MessageArea, MessageContainer, MessageContent } from "./style";

interface MessageProps {
    id: string;
    message: string;
    userIsSender: boolean;
};

interface Props {
    data: MessageProps;
};

export default ({data, ...rest}: Props) => {
    return (
        <MessageArea isSender={data.userIsSender}>
            <MessageContainer>
                <MessageContent>
                    {data.message}
                </MessageContent>
            </MessageContainer>
        </MessageArea>
    );
};
