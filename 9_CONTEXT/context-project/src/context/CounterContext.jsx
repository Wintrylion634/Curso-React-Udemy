 // 1 - criar context
import {createContext, useState } from "react";

const CounterContext = createContext();
export default CounterContext;

// 2 - Criar Provider

export const CounterContextProvider = ({ children }) => { 
    const [counter, setCounter] = useState(0);

    return (
        <CounterContext.Provider value={{ counter, setCounter }}>
            {children}
        </CounterContext.Provider>
    )
}