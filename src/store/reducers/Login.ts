import * as types from "../constants/actionsTypes";

const initialState={
    username: '',
    password:'',
    loginsucsses:false
}

const CheckLogin = (state = initialState, action: any) => {
  switch (action.type) {
    case types.CKECKLOGIN:
         if(action.username ==="phatdoan" && action.password === "123456")
            {    
               state.username = action.username;
               state.loginsucsses= true
            }
         return {...state};
    case types.LOGOUT:
            state.loginsucsses=false;
          return {...state};
    default:
        return state;
  }
  
};

export default CheckLogin;