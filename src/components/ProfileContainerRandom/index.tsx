import { Container, ProfileContainerInfo, ProfileImg, ProfileName } from "./style";

import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import { Text, TouchableOpacityProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { profileIcon } from "../../utils/profileIcon";
import RandomIcon from "../../../assets/RandomPerson.png";
interface Props extends TouchableOpacityProps {

}
export default ({...rest}: Props) => {
    
    return (
        <Container {...rest}>
            <ProfileContainerInfo>
                <ProfileImg source={RandomIcon} />
                <ProfileName>Encontrar um chat aleatório</ProfileName>
            </ProfileContainerInfo>
        </Container>
    )
}