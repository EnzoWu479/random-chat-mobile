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
