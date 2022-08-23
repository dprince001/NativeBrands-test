import { createContext, useState } from "react"

export const UserContext = createContext({
    isOpen: false,
    setIsOpen: () => {}
})

export const UserProvider = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);
    const value = {isOpen, setIsOpen};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}