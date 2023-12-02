const initialState = {
    isAuthenticated: false,
    token: null,
    refresh: null,
    expire: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          isAuthenticated: true,
          token: action.accessToken,
          refresh: action.refreshToken,
          expire: action.expiration 
        };
      case 'LOGOUT':
        return {
          ...state,
          isAuthenticated: false,
          token: null,
          refresh: null,
          expire: null
        };
      default:
        return state;
    }
};

export default authReducer;