import { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({});

    const setDataContext = (data) => {
        setData(data);
    };

    return (
        <DataContext.Provider value={{ data, setDataContext }}>
            {children}
        </DataContext.Provider>
    );
};