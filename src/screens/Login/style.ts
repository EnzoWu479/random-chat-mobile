import styled from "styled-components/native";
import AreaGlobal from "../../shared/GlobalStyleComponents/AreaGlobal";
import Button from "../../shared/GlobalStyleComponents/Button";
import ButtonText from "../../shared/GlobalStyleComponents/ButtonText";
import Input from "../../shared/GlobalStyleComponents/Input";

export const Area = styled(AreaGlobal)`
    
`;

export const Form = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
`;
export const InputText = styled(Input)`
    text-align: center;
`;
export const LogoImg = styled.Image`
    width: 300px;
    height: 195px;
    resize: both;
    margin-bottom: 30px;
`;
export const SubmitButton = styled.Pressable`
    ${Button}
    padding-right: 10px;
`;
export const ButtonContent = styled.Text`
    ${ButtonText}
`;
export const Line = styled.View`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
`;
export const LineText = styled.Text``;
export const RegisterButton = styled.Pressable`
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;
export const RegisterButtonText = styled.Text`
    color: #17A2B8;
`;