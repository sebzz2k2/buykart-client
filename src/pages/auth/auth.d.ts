export interface IUser {
    userName: string;
    email: string;
    password: string;
    isUser: boolean;
}

export interface IState {
    bodyContent: string;
    modalType: "success" | "error" | "info" | "warning";
    headingContent: string;
}

export interface ILogUser {
    userName: string;
    password: string;
}