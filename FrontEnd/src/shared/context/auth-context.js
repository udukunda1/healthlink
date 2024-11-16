import { createContext, useState } from "react";


export const authContext = createContext({
    isLoggedIn: false,
    login: () => {},
    logout: () => {}
})

function ContextProvider({children}){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login(obj){
    setIsLoggedIn(obj);
  }
  function logout(){
    setIsLoggedIn(false);
  }

  return (
    <authContext.Provider value={{isLoggedIn, login, logout}}>
        {children}
    </authContext.Provider>
  )
}

export default ContextProvider;