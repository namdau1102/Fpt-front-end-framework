export const getUser = () => {
    const userStr = sessionStorage.get('user');
    if (userStr) {
        return JSON.parse(userStr);
    } else {
        return null
    }
}
export const getToken = () => {
    return sessionStorage.get('token') || null;
}
export const setUserSession = (token, user) => {
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('user', JSON.stringify(user))
}
export const removeUserSession = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user')
}