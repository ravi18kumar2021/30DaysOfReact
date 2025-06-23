export default function CardLayout({title, children}) {
    return (
        <div className="bg-blue-300 text-gray-800 p-4 my-4 rounded-md">
            <h2 className="text-2xl mb-3 text-blue-800">{title}</h2>
            <div className="bg-red-800 h-24 p-2 text-left text-red-100 rounded-md">{children}</div>
        </div>
    )
}