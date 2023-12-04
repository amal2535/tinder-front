import { useState, createContext } from "react";

export const ConversationContext = createContext()
export const ConversationProvider = ({ children }) => {
    const [open, setOpen] = useState(false)
    const [chatID, setChatID] = useState('')
    return (
        <ConversationContext.Provider value={{ open, setOpen, chatID, setChatID }} >
            {children}
        </ConversationContext.Provider>
    )
}