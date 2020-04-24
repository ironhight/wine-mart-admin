import * as types from "../constants/actionsTypes";



export const CkeckLoginCALLAPI = (username:string, password:string) => {
    return (dispatch:any)=>{
        // return API
            // dispatch(CkeckLogin(username:string, password:string))
        
    }
};
  

export const CkeckLogin = (username:string, password:string) => {
  return {
    type: types.CKECKLOGIN,
    username,
    password
  };
};

export const LogoutCallApi = () => {
  return (dispatch:any)=>{
      // return API
          // dispatch(Logout())
  }
};



export const Logout = () => {
  return {
    type: types.LOGOUT
  };
};

