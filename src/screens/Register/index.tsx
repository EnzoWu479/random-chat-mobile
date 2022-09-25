import React, { useState } from "react";
import { FlatList, Text } from "react-native";
import { Area, ButtonContent, Form, InputText, Line, LineText, LogoImg, RegisterButton, RegisterButtonText, SubmitButton } from "./style";
import logo from "../../../assets/logo.png";
import { useNavigation } from "@react-navigation/native";
import CarouselIcon from "../../components/CarouselIcon";

export default () => {
    const navigate = useNavigation();
    const [stage, setStage] = useState(1);
    const [avatar, setAvatar] = useState(0);
    return(
        <Area>
            <Form>
                <LogoImg source={logo} />
                {{
                    1: 
                    <>
                        <InputText label={"Name"} placeholder="Digite seu nome" />
                        <InputText label={"Username"} placeholder="Digite seu nome de usuario" />
                        <InputText label={"Email"} placeholder="Digite seu email" />
                        <InputText label={"Password"} placeholder="Digite sua senha" />
                        <InputText label={"Password"} placeholder="Confirme sua senha" />
                        <SubmitButton onPress={() => setStage(2)}>
                            <ButtonContent>Continuar</ButtonContent>
                        </SubmitButton>
                    </>,
                    2: 
                    <>
                        <CarouselIcon 
                        title="Escolha um ícone:"
                        avatar={avatar} 
                        changeAvatar={setAvatar} 
                        />
                        <SubmitButton>
                            <ButtonContent>Registrar</ButtonContent>
                        </SubmitButton>
                    </>
                }[stage]}
                
                <Line>
                    <LineText>Ja tem uma conta? Faça o</LineText>
                    <RegisterButton onPress={() => {navigate.goBack()}}>
                        <RegisterButtonText> login</RegisterButtonText>
                    </RegisterButton>
                </Line>
            </Form>
        </Area>
    )
}