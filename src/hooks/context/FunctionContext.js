import { useContext } from "react"
import { useTheme, useThemeUpdate } from "./ThemeContext"


export default function FunctionContext() {
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdatee();

    const themeStyle = {
        backgroundColor: darkTheme ? 'green' : 'red',
        color: darkTheme ? 'gray' : 'black',
    }

    return (
        <>
            <button onClick={toggleTheme}></button>
            <div styles={themeStyle}> Function Context </div>
        </>
    )
}
