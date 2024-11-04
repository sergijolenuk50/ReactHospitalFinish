import { createContext, useState } from "react";

export const DoctorContext = createContext({
    // properties
    count: 0,
    // methods
    setCount: () => null,
    clear: () => null
});

export const DoctorsProvider = ({ children }) => {

    const [count, setCount] = useState(0);
    const clear = () => setCount(0);

    const value = { count, setCount, clear };

    return <DoctorContext.Provider value={value}>{children}</DoctorContext.Provider>
}