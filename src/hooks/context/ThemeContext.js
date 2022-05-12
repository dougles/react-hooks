import { useState, useContext } from "react";

const ThemeContext = React.createContext();
const ThemeUpdateContext = React.createContext();

export function useTheme() {
    return useContext(ThemeContext);
}

export function useThemeUpdate() {
    return useContext(ThemeUpdateContext);
}

export function ThemeProvider({children}) {
    const [darkTheme, setDarkTheme] = useState(true);

    function toggle() {
        setDarkTheme( prev =>  !prev);
    }

    return(
        <ThemeContext.Provider value={darkTheme}>
            <ThemeUpdateContext.Provider value={toggle}>
                {children}
            </ThemeUpdateContext.Provider>            
        </ThemeContext.Provider>
    )

}