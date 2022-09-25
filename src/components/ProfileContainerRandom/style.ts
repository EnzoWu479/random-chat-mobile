import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    width: 100%;
    padding: 10px 0;
    border-bottom-width: 1px;
    border-bottom-color: #0002;
`;
export const ProfileContainerInfo = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
export const ProfileImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50;
    margin-left: 10px;
`;
export const ProfileName = styled.Text`
    margin-left: 10px;
    font-size: 18px;
`;