import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function WindowFrame() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <div className={`${theme} w-4xl mx-auto text-center`}>
            <div className={`border-5 border-orange-600 rounded-lg h-96 my-4 flex flex-col justify-evenly
                ${theme === 'dark'
                    ? "text-white bg-gray-900"
                    : "text-black"}`}>
                <h1 className={`text-5xl ${theme === 'light' ? "text-blue-600" : ""}`}>Day 22 of 30DaysOfReact</h1>
                <h2 className={`text-2xl ${theme === 'light' ? "text-red-700" : ""}`}>This theme toggler is built using custom hook.</h2>
                <p className={`text-lg ${theme === 'light' ? "text-green-800" : ""}`}>Clicking the theme toggler button will switch the theme, changing the background and text colors of this window frame.</p>
            </div>
            <button onClick={toggleTheme} className="border-3 rounded-md px-3 py-2 bg-violet-400 hover:bg-violet-600 transition">Toggle Theme</button>
        </div>
    )
}