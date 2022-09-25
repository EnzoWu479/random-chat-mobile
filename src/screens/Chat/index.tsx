import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { chatParams } from "../../@types/@navigation";
import Ballon from "../../components/Ballon";
import NavbarChat from "../../components/NavbarChat"
import { Area, AreaBallons, InputButton, InputChat, InputContainer } from "./style"

export default () => {
    const route = useRoute();
    const chat = route.params as chatParams;
    return (
        <Area>
            <View>
            <NavbarChat data={chat} />
            <AreaBallons>
                <Ballon data={{
                    id: "1",
                    message: "mensagem testeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
                    userIsSender: false
                }}/>
                <Ballon data={{
                    id: "1",
                    message: "mensagem teste",
                    userIsSender: true
                }}/>
                <Ballon data={{
                    id: "1",
                    message: "mensagem teste",
                    userIsSender: true
                }}/>
            </AreaBallons>
            </View>
            <InputContainer>
                <InputChat type="text" placeholder="Digite sua mensagem" />
                <InputButton>
                    <Ionicons name="arrow-forward-circle" color={"#004aad"} size={42} style={{marginRight: 5}} />
                </InputButton>
            </InputContainer>
            
        </Area>
    )
}