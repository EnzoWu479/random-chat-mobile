import styled from "styled-components/native";
import Input from "../../shared/GlobalStyleComponents/Input";

export const Area = styled.SafeAreaView`
    display: flex;
    justify-content: space-between;
    height: 100%;

`;
export const AreaBallons = styled.View`
    
`;
export const InputContainer = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
`;
export const InputButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    min-width: 46px;
`;
export const InputChat = styled(Input)`
    margin-bottom: 0;
    width: 85%;
    min-height: 50px;
    margin-left: 5px;
    padding: 0 10px;
`;