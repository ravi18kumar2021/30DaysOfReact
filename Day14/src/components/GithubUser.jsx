import { useState } from "react";

function GithubUser() {
    const [input, setInput] = useState('');
    const [userData, setUserData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const fetchData = async () => {
        const username = input.trim();
        if (username === '') return alert('Please fill the input');
        setError('');
        setUserData({});
        setLoading(true);
        const url = `https://api.github.com/users/${username}`;
        try {
            const response = await fetch(url);
            if (!response) throw new Error('Network Issue');
            const data = await response.json();
            if (data.status === '404') {
                setError('Profile Not Found');
                setLoading(false);
                return
            }
            setUserData({
                name: data.name, avatar_url: data.avatar_url, bio: data.bio, twitter_username: data.twitter_username, created_at: new Date(data.created_at).toDateString(), location: data.location, public_repos: data.public_repos, login: data.login, html_url: data.html_url
            });
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="max-w-3xl">
            <h1>Github User Profile Information</h1>
            <p className="w-sm mx-auto text-left text-xl my-5">Enter your Github Username :</p>
            <div className="w-sm mx-auto flex justify-between">
                <input type="text"
                    className="border-1 border-gray-200 rounded-sm w-64 text-xl px-2"
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                <button onClick={fetchData}>Search</button>
            </div>
            {loading && (
                <div className="w-sm mx-auto my-6">
                    <div className="w-24 h-24 mx-auto border-10 border-t-transparent border-green-300 rounded-full animate-spin"></div>
                </div>
            )}
            {error && (
                <div className="w-sm mx-auto my-6">
                    <h2 className="text-center text-xl text-red-600">{error}</h2>
                </div>
            )}
            {Object.keys(userData).length > 0 && (
                <div className="w-sm mx-auto my-6 p-3 border-3 border-orange-300">
                    <div className="flex gap-6">
                        {userData.avatar_url && (
                            <img className="w-32 h-32 rounded-2xl border-2 border-gray-200" src={userData.avatar_url} alt={userData.login} />
                        )}

                        <div className="text-left">
                            <h2><strong>Name : </strong>{userData.name || "Not Available"}</h2>
                            <p><strong>Bio : </strong>{userData.bio || "Not Available"}</p>
                        </div>
                    </div>
                    <div className="flex flex-col my-3 gap-2">
                        <p><strong>Twitter : </strong>{userData.twitter_username || "Not Available"}</p>
                        <p><strong>Location : </strong>{userData.location || "Not Available"}</p>
                        <p><strong>Account Created @ </strong>{userData.created_at}</p>
                        <p><strong>No. of Public Repos : </strong>{userData.public_repos}</p>
                        <a href={userData.html_url} target="_blank">View Profile</a>
                    </div>
                </div>
            )}
        </div>
    )
}

export default GithubUser;