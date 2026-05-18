import { Children, createContext, useReducer } from "react";

const TitleColorContext = createContext();
export default TitleColorContext;

export const titleColorReducer = (state, action) => { 
    switch (action.type) { 
        case "RED":
            return {... state, color: "red"}
        case "BLUE":
            return { ...state, color: "blue" }
        case "GREEN":
            return { ...state, color: "green" }  
        default:
            return state;
    }
}

export const TitleColorContextProvider = ({ children }) => { 
    
    const [state, dispatch] = useReducer(titleColorReducer, { color: "white" });
    
    return (
        <TitleColorContext.Provider value={{... state, dispatch}}>
        { children }
    </TitleColorContext.Provider >);
}