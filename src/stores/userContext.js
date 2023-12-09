import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({children}) => {
    const [login, setLogin] = useState(false);

    const produtos = [
        {nome: 'batedeira', id: 24},
        {nome: 'ventilador', id: 27},
        {nome: 'computador', id: 31}
    ]

    return (
        <UserContext.Provider value={{login, setLogin, produtos}}>
            {children}
        </UserContext.Provider>
    )
}