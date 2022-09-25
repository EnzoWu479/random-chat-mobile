import { StatusBar } from "react-native";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    background-color: #004aad;
    height: 100px;
    justify-content: center;
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: ${StatusBar.currentHeight};
`;
export const TextNav = styled.Text`
    color: #fff;
    font-size: 20px;
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
    color: #fff;
`;
export const BackButton = styled.TouchableOpacity``;