import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Chat from "../screens/Chat";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";
import SettingsAccount from "../screens/SettingsAccount";
const {Navigator, Screen} = createNativeStackNavigator();

export function AppRoutes(){
    return(
        <Navigator screenOptions={{headerShown: false}}>
            <Screen name="login" component={Login} />
            <Screen name="register" component={Register} />
            <Screen name="home" component={Home} />
            <Screen name="chat" component={Chat} />
            <Screen name="settingsAccount" component={SettingsAccount} />
        </Navigator>
    )
}