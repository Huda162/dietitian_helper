import USERS from "../../data/users";

const loginUser = (email, password) => {
    const user = USERS.find(user => user.email === email && user.password === password);
    return user || null;  
};

export {
  loginUser
};
