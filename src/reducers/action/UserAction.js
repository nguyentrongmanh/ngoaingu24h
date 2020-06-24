export const signin = (payload) => {
  return {
    type: "LOGIN",
    payload,
  };
};

export const logout = () => {
  return {
    type: "LOGOUT",
  };
};
