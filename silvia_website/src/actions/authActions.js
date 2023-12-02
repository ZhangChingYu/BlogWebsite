export const login = (token, refresh, expire) => ({
    type: 'LOGIN',
    accessToken: token,
    refreshToken: refresh,
    expiration: expire
});
  
export const logout = () => ({
    type: 'LOGOUT',
});