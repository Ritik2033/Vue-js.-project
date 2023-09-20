export function isAuthenticated() {
    const userToken = sessionStorage.getItem('token');
    return userToken !== null && userToken !== undefined;
}