export default function Greeting({user}) {
    return (
        <h1>Hello {user || "World"}!</h1>
    )
}