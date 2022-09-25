import { Container, ProfileContainerInfo, ProfileImg, ProfileName } from "./style";

import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import { Text, TouchableOpacityProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { profileIcon } from "../../utils/profileIcon";

interface ProfileProps  {
    name: string;
    profileIcon: number;
}
interface Props extends TouchableOpacityProps {
    data: ProfileProps;
}
export default function ProfileContainer({data, ...rest}: Props) {
    
    return (
        <Container {...rest}>
            <ProfileContainerInfo>
                <ProfileImg source={profileIcon[data.profileIcon - 1]} />
                <ProfileName>{data.name}</ProfileName>
            </ProfileContainerInfo>
            <Menu>
                <MenuTrigger style={{
                    width:50,
                    height: 50,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Ionicons name="ellipsis-vertical" size={22} color={"#000"} />
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption style={{ flexDirection: "row", alignItems: "center"}}>
                        <Ionicons name="pin" size={18} style={{marginRight: 5}} />
                        <Text>Fixar</Text>
                    </MenuOption>
                    <MenuOption style={{ flexDirection: "row", alignItems: "center"}}>
                        <Ionicons name="eye" size={18} style={{marginRight: 5}} />
                        <Text>Permitir Vizualização</Text>
                    </MenuOption>
                    <MenuOption 
                        style={{ flexDirection: "row", alignItems: "center"}}
                    >
                        <Ionicons name="trash" size={18} style={{marginRight: 5}} />
                        <Text>Deletar</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </Container>
    )
}