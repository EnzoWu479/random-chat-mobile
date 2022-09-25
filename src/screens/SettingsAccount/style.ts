import styled from "styled-components/native";
import AreaGlobal from "../../shared/GlobalStyleComponents/AreaGlobal";
import Button from "../../shared/GlobalStyleComponents/Button";
import ButtonText from "../../shared/GlobalStyleComponents/ButtonText";
import Input from "../../shared/GlobalStyleComponents/Input";

export const Area = styled.SafeAreaView`
    display: flex;
    align-items: center;
    height: 100%;
    overflow-y: scroll;
`;
export const ProfileContainer = styled.View`
    margin-top: 20px;
`;
export const ProfileImage = styled.Image`
    width: 150px;
    height: 150px;
    border-radius: 75;
`;
export const ProfileName = styled.Text`
    text-align: center;
`;
export const ProfileUsername = styled.Text`
    text-align: center;
    font-size: 22px;
    color: #000;
`;
export const Form = styled.KeyboardAvoidingView`
    width: 90%;
    margin-top: 20px;
`;
export const InputText = styled(Input)`
    width: 100%;
    padding: 0 10px;
`;
export const SubmitButton = styled.TouchableOpacity`
    ${Button}
    width: 100%;
`;
export const ButtonContent = styled.Text`
    color: #fff;
`;