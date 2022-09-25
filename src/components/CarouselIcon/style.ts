import styled from "styled-components/native";

export const ToggleGroup = styled.View`
    margin-bottom: 20px;
`;
export const ToggleGroupTitle = styled.Text`
    margin-bottom: 10px;
    font-weight: bold;
`;
export const ToggleGroupOptions = styled.View`
    display: flex;
    flex-direction: row;
`;
interface OptionProps {
    active: boolean;
}
export const ToggleGroupOption = styled.Pressable<OptionProps>`
    border-radius: 50;
    margin: 0 5px;
    opacity: ${props => props.active ? '1' : '0.5'};
    ${props => props.active ? `
        border-width: 1px;
        border-color: #000;
    ` : `
        border-width: 1px;
        border-color: transparent;
    `}
`;
export const ToggleGroupImage = styled.Image`
    width: 80px;
    height: 80px;
    border-radius: 50;
    
`;