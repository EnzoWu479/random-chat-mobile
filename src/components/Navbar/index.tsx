import { StatusBar, Text } from "react-native";
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from "react-native-popup-menu";
import { Container, TextNav } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Navbar(){
    const navigate = useNavigation();
    return (
        <Container>
            <StatusBar
                backgroundColor="#0005"
                barStyle="light-content"
                translucent
            />
            <TextNav>Random Chat</TextNav>
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
                        onSelect={() => navigate.navigate("settingsAccount")}
                        style={{ flexDirection: "row", alignItems: "center"}}
                    >
                        <Ionicons name="person" size={18} style={{marginRight: 5}} />
                        <Text>Configurações da conta</Text>
                    </MenuOption>
                    <MenuOption 
                        onSelect={() => navigate.navigate("login")}
                        style={{ flexDirection: "row", alignItems: "center"}}
                    >
                        <Ionicons name="log-out" size={18} style={{marginRight: 5}} />
                        <Text>Deslogar</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
           
        </Container>
    )
}