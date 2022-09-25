import { FlatList } from "react-native"
import { profileIcon } from "../../utils/profileIcon"
import { ToggleGroup, ToggleGroupImage, ToggleGroupOption, ToggleGroupOptions, ToggleGroupTitle } from "./style"

interface Props {
    title: string;
    avatar: number;
    changeAvatar: (arg0: number) => void;
}

export default (props: Props) => {
    return (
        <ToggleGroup>
            <ToggleGroupTitle>{props.title}</ToggleGroupTitle>
            <ToggleGroupOptions>
                <FlatList 
                    data={profileIcon}
                    keyExtractor={item => item}
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    renderItem={(item) => (
                        <ToggleGroupOption 
                            onPress={() => props.changeAvatar(item.index + 1)}
                            active={props.avatar === item.index + 1}
                        >
                            <ToggleGroupImage source={item.item} />
                        </ToggleGroupOption>
                    )}
                />
            </ToggleGroupOptions>
        </ToggleGroup>
    )
}