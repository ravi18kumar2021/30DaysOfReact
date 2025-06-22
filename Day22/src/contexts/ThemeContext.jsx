import { createContext } from "react"
import useLocalStorage from "../useLocalStorage";

export const ThemeContext = createContext();

export default function ThemeProvider({children}) {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    const toggleTheme = () => {
        setTheme((prev) => (
            prev === 'light' ? 'dark' : 'light'
        ))
    }
    return (
        <ThemeContext.Provider value={ {theme, toggleTheme} } >
            {children}
        </ThemeContext.Provider>
    )
}