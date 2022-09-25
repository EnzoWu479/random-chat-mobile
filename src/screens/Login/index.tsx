import React from "react";
import { Text } from "react-native";
import Navbar from "../../components/Navbar";
import ProfileContainer from "../../components/ProfileContainer";
import profileIcon1 from "../../../assets/PerfilIcon1.jpeg";
import { Area, ButtonContent, Form, InputText, Line, LineText, LogoImg, RegisterButton, RegisterButtonText, SubmitButton } from "./style";
import logo from "../../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";

export default () => {
    const navigate = useNavigation();
    return(
        <Area>
            <Form>
                <LogoImg source={logo} />
                <InputText label={"Email"} placeholder="Digite seu email" />
                <InputText label={"Senha"} placeholder="Digite sua senha" />
                <SubmitButton onPress={() => navigate.navigate("home")}>
                    <ButtonContent>Fazer Login</ButtonContent>
                </SubmitButton>
                <Line>
                    <LineText>Não tem conta? </LineText>
                    <RegisterButton onPress={() => {navigate.navigate("register")}}>
                        <RegisterButtonText>Cadastre-se</RegisterButtonText>
                    </RegisterButton>
                </Line>
            </Form>
        </Area>
    )
}