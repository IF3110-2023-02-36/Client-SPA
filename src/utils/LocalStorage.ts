
export function setUser(username : string) {
    // TODO : async issue
    localStorage.setItem('username', username);
}

export function unsetUser() {
    localStorage.removeItem('username');
}

export function getUser() {
    const username = localStorage.getItem('username');
    return username;
}

export function isLoggedIn() {
    const loggedIn = (getUser() !== null);
    return loggedIn;
}