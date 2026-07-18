import React, { useState } from 'react'
import { useAdminAuth } from '../hooks/useAdminAuth'
import { useNavigate } from 'react-router'

const AdminAuth = () => {
    const { loading, handleAdminLogin } = useAdminAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState({ email: '', password: '', form: '' })

    const validateForm = () => {
        const nextErrors = { email: '', password: '', form: '' }
        const trimmedEmail = email.trim()

        if (!trimmedEmail) {
            nextErrors.email = 'Email is required'
        } else if (!/^\S+@\S+\.\S+$/.test(trimmedEmail)) {
            nextErrors.email = 'Please enter a valid email address'
        }

        if (!password) {
            nextErrors.password = 'Password is required'
        } else if (password.length < 6) {
            nextErrors.password = 'Password must be at least 6 characters long'
        }

        setErrors(nextErrors)
        return !nextErrors.email && !nextErrors.password
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!validateForm()) {
            return
        }

        const result = await handleAdminLogin({ email: email.trim(), password });

        if (result.success) {
            navigate('/admin/dashboard');
            return
        }

        setErrors((prev) => ({
            ...prev,
            form: result.errors?.[0]?.message || result.message || 'Something went wrong. Please try again.'
        }))
    }

    if (loading) {
        return (
            <div className="h-screen flex items-center justify-center bg-(--primaryBackground)">
                <div className="rounded-full h-20 w-20 bg-(--primary) animate-ping"></div>
            </div>
        )
    }

    return (
        <div className="h-screen flex items-center justify-center bg-(--primaryBackground) montserrat-font">
            <div
                className="relative mx-auto w-full max-w-md bg-white px-6 pt-15 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:rounded-xl sm:px-10">
                <div className="w-full">
                    <div className="text-center">
                        <h1 className="text-3xl font-semibold text-gray-900">Admin Login</h1>
                        <p className="mt-2 text-gray-500">Login below to access admin panel</p>
                    </div>
                    <div className="mt-5">
                        <form onSubmit={handleSubmit}>
                             <div className="relative mt-10">
                                <input minLength={5} maxLength={100} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" placeholder="Email Address" className="peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" autoComplete="off" required />

                                <label htmlFor="email" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Email Address</label>
                                {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email}</p>}
                            </div>
                            <div className="relative mt-10">
                                <input minLength={6} maxLength={100} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" placeholder="Password" className="peer peer mt-1 w-full border-b-2 border-gray-300 px-0 py-1 placeholder:text-transparent focus:border-gray-500 focus:outline-none" required />

                                <label htmlFor="password" className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-gray-800 opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-gray-800">Password</label>
                                {errors.password && <p className="mt-2 text-sm text-red-600">{errors.password}</p>}
                            </div>
                            {errors.form && <p className="mt-6 text-sm text-red-600 text-center">{errors.form}</p>}
                            <div className="mt-10">
                                <button type="submit" className="w-full primary-button">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminAuth