import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export default function WindowFrame() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className={theme}>
            <div className={`border-5 border-orange-600 rounded-lg w-4xl h-96 mx-auto my-4 flex flex-col justify-evenly
                ${theme === 'dark' 
                ? "text-white bg-gray-900" 
                : "text-black"}`}>
                <h1 className="text-5xl">Day 19 of 30DaysOfReact</h1>
                <p className="text-lg">Today, I am building a theme toggler in React using the useContext hook.</p>
                <p className="text-lg">Clicking the theme toggler button will switch the theme, changing the background and text colors of this window frame.</p>
            </div>
            <button onClick={toggleTheme} className="border-3 rounded-md px-3 py-2 bg-violet-400 hover:bg-violet-600 transition">Toggle Theme</button>
        </div>
    )
}