import { Link } from "react-router";

export default function Contact() {
    return (
        <div className="w-lg bg-gray-700 p-4 rounded-lg">
            <h2 className="text-2xl">This is Contact Page</h2>
            <h4 className="my-3">Feel free to connect with me on :</h4>
            <p>Github : <Link to="https://github.com/ravi18kumar2021" target="_blank" className="italic underline">ravi18kumar2021</Link>
            </p>
            <p>LinkedIn : <Link to="https://www.linkedin.com/in/programmerravi/" target="_blank" className="italic underline">Programmer Ravi</Link>
            </p>
        </div>
    )
}