import { useNavigation } from "@react-navigation/native";
import Navbar from "../../components/Navbar";
import ProfileContainer from "../../components/ProfileContainer";
import ProfileContainerRandom from "../../components/ProfileContainerRandom";
import { Area } from "./style";

export default () => {
    const navigate = useNavigation();
    return (
    <Area>
        <Navbar/>
        <ProfileContainerRandom />
        <ProfileContainer 
            data={{name:"fulanos", profileIcon:1}} 
            onPress={() => navigate.navigate("chat", {
                id: "1",
                name: "fulanos",
                profileIcon: 1,
            })} 
        />
        <ProfileContainer 
            data={{name:"fulanos", profileIcon:1}} 
            onPress={() => navigate.navigate("chat", {
                id: "1",
                name: "fulanos",
                profileIcon: 2,
            })} 
        />
        <ProfileContainer 
            data={{name:"fulanos", profileIcon:1}} 
            onPress={() => navigate.navigate("chat", {
                id: "1",
                name: "fulanos",
                profileIcon: 2,
            })} 
        />
    </Area>
    );
};
