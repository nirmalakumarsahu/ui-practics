const userName = "John";

function hello() {
    return `Hello ! ${userName}`;
}

export function welcomeMsg() {
    return `${hello()} Welcome to my app!`;
}