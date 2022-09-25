import { StatusBar, Text } from "react-native";
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import { BackButton, Container, ProfileContainerInfo, ProfileImg, ProfileName, TextNav } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { chatParams } from "../../@types/@navigation";
import { profileIcon } from "../../utils/profileIcon";

interface Props {
    data: chatParams
}

export default ({data}: Props) => {
    const navigate = useNavigation();
    return (
        <Container>
            <StatusBar
                backgroundColor="#0005"
                barStyle="light-content"
                translucent
            />
            
            <ProfileContainerInfo>
                <BackButton onPress={() => navigate.goBack()}>
                    <Ionicons name="arrow-back" size={22} color={"#fff"} />
                </BackButton>
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
                    <Ionicons name="ellipsis-vertical" size={22} color={"#fff"} />
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption 
                        onSelect={() => navigate.navigate("login")}
                        style={{ flexDirection: "row", alignItems: "center"}}
                    >
                        <Ionicons name="trash" size={18} style={{marginRight: 5}} />
                        <Text>Deletar conversa</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
           
        </Container>
    )
}