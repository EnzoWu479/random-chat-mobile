import { StatusBar } from "react-native";
import { BackButton, Container, ProfileContainerInfo, ProfileName } from "./style";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default () => {
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
                <ProfileName>Configurações da conta</ProfileName>
            </ProfileContainerInfo>
        </Container>
    )
}