import { useState } from "react";

function BasicForm() {
    const [formData, setFormData] = useState({
        name: "", email: ""
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!formData.name || !formData.email) {
            setError("Input fields are required");
            setSuccess("");
            return
        }
        if (!validateEmail(formData.email)) {
            setError("Invalid email address");
            setSuccess("");
            return
        }
        setSuccess("Form data submitted !!!");
        setError("");
        setFormData({name: "", email: ""});
        return
    }

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email);
    }

    return (
        <div>
            <form style={{
                border: "2px solid yellow",
                width: "300px",
                margin: "0 auto",
                padding: "0 20px"
            }} onSubmit={handleSubmit} noValidate>
                <h3>Basic Form</h3>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})}/>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "10px 0"
                }}>
                    <label htmlFor="email">Email : </label>
                    <input type="email" id="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                </div>
                <button style={{
                    background: "purple",
                    marginBottom: "20px"
                }} type="submit">SUBMIT</button>
            </form>
            <div style={{
                height: "50px"
            }}>
                <p style={{
                    color: "red"
                }}>{error}</p>
                <p style={{
                    color: "green"
                }}>{success}</p>
            </div>
        </div>
    )
};

export default BasicForm;