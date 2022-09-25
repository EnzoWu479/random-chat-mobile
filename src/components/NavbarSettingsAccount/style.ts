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
    width: 100%;
    padding-top: ${StatusBar.currentHeight};
`;
export const ProfileContainerInfo = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ProfileName = styled.Text`
    margin-left: 10px;
    font-size: 18px;
    color: #fff;
`;
export const BackButton = styled.TouchableOpacity``;