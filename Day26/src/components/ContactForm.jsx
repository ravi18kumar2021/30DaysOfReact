import { useState } from 'react';
import './ContactForm.css';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '', email: ''
    });
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [error, setError] = useState('');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormSubmitted(false);
        if (formData.name.trim() === '' || formData.email.trim() === '') {
            alert('Please fill out the form');
            return
        }
        if (!validateEmail(formData.email)) {
            setError('Invalid Email');
            return
        }
        setError('');
        setFormSubmitted(true);
    };
    return (
        <div className='form-container'>
            <h1>Contact Us</h1>
            <form onSubmit={handleSubmit} noValidate>
                <div className='flex'>
                    <label htmlFor="name">Name :</label>
                    <input type="text"
                        id='name'
                        name='name'
                        value={formData.name}
                        onChange={handleChange} />
                </div>
                <div className='flex'>
                    <label htmlFor="email">Email :</label>
                    <input type="email"
                        id='email'
                        name='email'
                        value={formData.email}
                        onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
            {error && (
                <p data-testid="error-message" className='error'>{error}</p>
            )}
            {formSubmitted && (
                <p data-testid="success-message" className='success'>Form Submitted Successfully!</p>
            )}
        </div>
    )
}