import styled from "styled-components/native";

interface Props {
    isSender: boolean;
}
export const MessageArea = styled.View<Props>`
    display: flex;
    flex-direction: row;
    justify-content: ${props => props.isSender ? 'flex-end' : 'flex-start'};
    margin: 5px 10px;
`;
export const MessageContainer = styled.View`
    background-color: #0001;
    min-width: 80px;
    max-width: 70%;
    min-height: 30px;
    padding: 10px;
    border-radius: 10;
`;
export const MessageContent = styled.Text``;