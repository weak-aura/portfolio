import React from "react";

type MyContextProviderProps = {
  children: React.ReactNode
}

type ContextProps = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MyContext= React.createContext<ContextProps | false>(false)

export const MyContextProvider: React.FC<MyContextProviderProps> = ({children}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <MyContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </MyContext.Provider>
  )
}

export const useMyContext = () => {
  const context = React.useContext(MyContext)
  
  if(context === false) {
    throw new Error("some Error")
  }
  return context
}