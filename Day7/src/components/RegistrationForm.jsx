import { useState } from "react";

function RegistrationForm() {
    const [userData, setUserData] = useState({
        name: '', email: '', age: '', gender: ''
    });
    const [userAgree, setUserAgree] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);

    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    function validateAge(age) {
        return age > 0 && age <= 120;
    }

    function isFormFilled() {
        const userName = userData.name.trim();
        const userEmail = userData.email.trim();
        const userAge = userData.age.trim();
        const userGender = userData.gender.trim();
        return (userName != '' && userEmail != '' && userAge && userGender && userAgree);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setUserData((prev) => ({
            ...prev,
            [name]: value
        }));
        setFormSubmitted(false);
        setError('');
        setSuccess('');
    }

    function handleForm(e) {
        e.preventDefault();
        const userName = userData.name.trim();
        const userEmail = userData.email.trim();
        const userAge = userData.age.trim();
        const userGender = userData.gender.trim();
        if (!validateEmail(userEmail)) {
            setError('Invalid Email Address');
            setSuccess('');
            return
        }
        if (!validateAge(userAge)) {
            setError('Invalid Age');
            setSuccess('');
            return
        };
        if (userName.length < 2) {
            setError('Name must be at least 2 characters');
            setSuccess('');
            return
        }
        if (!userGender || !userAgree) {
            setError('Please Fill all the fields.');
            setSuccess('');
            return
        };
        setError('');
        setSuccess('Form submitted successfully');
        setFormSubmitted(true);
    }
    return (
        <div>
            <div style={{
                width: "450px",
                margin: "0 auto",
                border: "5px double yellow",
                borderRadius: "10px"
            }}>
                <h3>Registration Form</h3>
                <form style={{
                    width: "350px",
                    margin: "0 auto"
                }} onSubmit={handleForm} noValidate>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "10px"
                    }}>
                        <label htmlFor="name">Name : </label>
                        <input type="text" name="name" value={userData.name} onChange={handleChange} />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "10px"
                    }}>
                        <label htmlFor="email">Email : </label>
                        <input type="email" name="email" value={userData.email} onChange={handleChange} />
                    </div>

                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "10px"
                    }}>
                        <label htmlFor="age">Age : </label>
                        <input type="number" name="age" value={userData.age} onChange={handleChange} />
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "10px"
                    }}>
                        <label htmlFor="gender">Gender : </label>
                        <div>
                            <input type="radio" name="gender" value="Male" onChange={handleChange} />Male
                        </div>
                        <div>
                            <input type="radio" name="gender" value="Female" onChange={handleChange} />Female
                        </div>
                        <div>
                            <input type="radio" name="gender" value="Others" onChange={handleChange} />Others
                        </div>
                    </div>
                    <div style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        margin: "10px"
                    }}>
                        <input type="checkbox" checked={userAgree} onChange={() => {
                            setUserAgree(!userAgree);
                            setFormSubmitted(false);
                            setError('');
                            setSuccess('');
                        }} />
                        <label htmlFor="agreement">I Agree with the Terms and Conditions</label>
                    </div>
                    <button style={{
                        marginBottom: "10px",
                        background: "green"
                    }} disabled={!isFormFilled()} type="submit">Register</button>
                </form>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {success && <p style={{ color: 'green' }}>{success}</p>}
            {formSubmitted && (
                <div style={{
                    width: "240px",
                    margin: "0 auto",
                    textAlign: "left"
                }}>
                    <h4 style={{textAlign: "center"}}>User Data Summary:</h4>
                    <p style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}><strong>Name : </strong><span>{userData.name}</span></p>
                    <p style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}><strong>Email : </strong><span>{userData.email}</span></p>
                    <p style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}><strong>Age : </strong><span>{userData.age}</span></p>
                    <p style={{
                        display: "flex",
                        justifyContent: "space-between"
                    }}><strong>Gender : </strong><span>{userData.gender}</span></p>
                </div>
            )}
        </div>
    )
};

export default RegistrationForm;