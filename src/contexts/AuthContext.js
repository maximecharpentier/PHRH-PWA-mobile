import React, { createContext, useReducer } from 'react';
import { AsyncStorage } from "react-native";

import { API } from '../utils/api'

export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {

//     const [state, dispatch] = React.useReducer(
//         (prevState, action) => {
//             switch (action.type) {
//                 case 'SIGN_IN':
//                     return {
//                         ...prevState,
//                         isSignout: false,
//                         userToken: action.token,
//                         userInfos: action.infos,
//                     };
//                 case 'SIGN_OUT':
//                     return {
//                         ...prevState,
//                         isSignout: true,
//                         userToken: null,
//                         userInfos: null,
//                     };
//             }
//         },
//         {
//             isLoading: true,
//             isSignout: false,
//             userToken: null,
//             userInfos: null,
//         }
//     );

//     const aie = React.useMemo(
//         () => ({
//             signIn: async data => {
//                 API.post('auth/login/', data).then((response) => {
//                     console.log(response)
//                     dispatch({ type: 'SIGN_IN', token: response.data.token, infos: response.data.user });
//                     AsyncStorage.setItem('userToken', response.data.token);
//                     AsyncStorage.setItem('userInfos', response.data.user);
//                 }).catch(error => {
//                     console.log(error.response)
//                 });
//             },
//             signOut: () => dispatch({ type: 'SIGN_OUT' }),
//         }),
//         []
//     );

//     return (<AuthContext.Provider value={{
//         token: state.token,
//         signIn: aie.signIn
//     }}>
//         {children}
//     </AuthContext.Provider>);
// }