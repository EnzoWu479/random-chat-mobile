export interface chatParams {
    id: string;
    name: string;
    profileIcon: number,
}

export declare global {
    namespace ReactNavigation {
        interface RootParamList {
            login: undefined;
            register: undefined;
            home: undefined;
            chat: chatParams;
            settingsAccount: undefined;
        }
    }
}