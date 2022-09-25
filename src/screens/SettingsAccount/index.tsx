import { useState } from "react";
import CarouselIcon from "../../components/CarouselIcon";
import NavbarSettingsAccount from "../../components/NavbarSettingsAccount";
import { profileIcon } from "../../utils/profileIcon";
import { Area, ButtonContent, Form, InputText, ProfileContainer, ProfileImage, ProfileName, ProfileUsername, SubmitButton } from "./style";

export default () => {
    const [avatar, setAvatar] = useState(1);
    return (
        <Area>
            <NavbarSettingsAccount />
            <ProfileContainer>
                <ProfileImage source={profileIcon[0]} />
                <ProfileUsername>
                    Fulanow
                </ProfileUsername>
                <ProfileName>
                    Nome real
                </ProfileName>
            </ProfileContainer>
            <Form behavior="height" >
                <InputText placeholder="Username" value={"Fulanow"} />
                <InputText placeholder="Name" value={"Nome real"} />
                <CarouselIcon 
                    title="Escolha um ícone para trocar:"
                    avatar={avatar}
                    changeAvatar={setAvatar}
                />
                <SubmitButton>
                    <ButtonContent>
                        Atualizar Perfil
                    </ButtonContent>
                </SubmitButton>
            </Form>
        </Area>
    );
};
