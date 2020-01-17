export const validateUsername = (username: string) => {
    const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return username.match(regex);
};

export const validateEmail = (email: string) => {
    const regex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    return email.match(regex);
};

export const validatePassword = (password: string) => {
    const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return password.match(regex);
};