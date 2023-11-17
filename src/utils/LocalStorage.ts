
export function setUser(username : string, jwt : string) {
    // TODO : async issue
    localStorage.setItem('username', username);
    localStorage.setItem('jwt', jwt);
}

export function unsetUser() {
    localStorage.removeItem('username');
    localStorage.removeItem('jwt');
}

export function getUser() {
    const username = localStorage.getItem('username');
    const jwt = localStorage.getItem('jwt');
    return {username, jwt};
}

export function isLoggedIn() {
    const loggedIn = (getUser().jwt !== null);
    return loggedIn;
}
