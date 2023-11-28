"use client"

import Link from "next/link";


import { useState } from 'react';
import styles from './RegisterForm.module.scss';
import axios from "axios";
import { Toaster,toast } from "react-hot-toast";

const page = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        await axios.post("/api/auth/register", formData).then((e) => {
            console.log("Form submitted");
            console.log(e);
            if (e.response.data.success === true) {
                toast.success(e.response.data.message);
            }
        }).catch((err) => {
            console.log(err);
            if (err.response.data.success === false) {
                toast.error(err.response.data.message);
            }
        })

    };

    return (
        <form className={styles.registerForm} onSubmit={handleSubmit}>
            <h1>Register</h1>
            <label>
                First Name:
                <input
                    type="text"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Last Name:
                <input
                    type="text"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </label>

            <label>
                Password:
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    minLength="6"
                    required
                />
            </label>
            <button type="submit">Register</button>
            <h2>Already have an account <Link href={'/auth/login'}>Login</Link></h2>
            <Toaster/>
        </form>
    );
};
export default page;
