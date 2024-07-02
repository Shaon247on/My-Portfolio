import { createContext, useEffect, useState } from "react";

export const ProviderContext = new createContext(null)
const Provider = ({children}) => {
    const [theme, setTheme] = useState('winter')
    console.log(theme);
    useEffect(()=>{
        localStorage.setItem('theme', theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    },[theme])
    const values= {
        theme,
        setTheme
    }
    return (
        <ProviderContext.Provider value={values}>
            {children}
        </ProviderContext.Provider>
    );
};

export default Provider;