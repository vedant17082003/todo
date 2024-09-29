"use client";
import React, { useState } from 'react';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { BackgroundBeamsWithCollisionDemo } from "@/app/component/background";

const validationSchema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required").min(6, "Password should be at least 6 characters long"),
});

type LoginData = {
    username: string;
    password: string;
}

const LoginPage: React.FC = () => {
    const [formData, setFormData] = useState<LoginData>({ username: "", password: "" });
    const [errors, setErrors] = useState<Partial<LoginData>>({});
    const [loading, setLoading] = useState(false); // New loading state
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = async () => {
        try {
            setErrors({});
            await validationSchema.validate(formData, { abortEarly: false });
            return true;
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                const validationErrors: Partial<LoginData> = {};
                err.inner.forEach((error) => {
                    validationErrors[error.path as keyof LoginData] = error.message;
                });
                setErrors(validationErrors);
            }
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = await validateForm();
        if (!isValid) return;

        setLoading(true); // Set loading state to true
        try {
            const response = await fetch("http://localhost:8000/users");
            const users = await response.json();

            const authenticatedUser = users.find((user: any) =>
                user.username === formData.username && user.password === formData.password
            );

            if (authenticatedUser) {
                toast.success("Login successful!", { position: "top-right", autoClose: 3000 });
                setTimeout(() => {
                    router.push("/User");
                }, 3000);
            } else {
                toast.error("Invalid username or password", { position: "top-right", autoClose: 3000 });
            }
        } catch (error) {
            console.error("Error logging in:", error);
            toast.error("Error logging in. Please try again.");
        } finally {
            setLoading(false); // Set loading state back to false
        }
    };

    return (
        <div className="flex min-h-screen">
            <div className="flex-1 flex justify-center items-center bg-gray-100">
                <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold mb-6">Login</h2>
                    <label className="block mb-2">Username</label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="border p-2 mb-1 w-full"
                        required
                    />
                    {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}

                    <label className="block mb-2">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="border p-2 mb-1 w-full"
                        required
                    />
                    {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}

                    <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded-lg" disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>

            <div className="flex-1 flex justify-center items-center bg-blue-500">
                <BackgroundBeamsWithCollisionDemo Message='Welcome Back !' />
            </div>

            <ToastContainer />
        </div>
    );
};

export default LoginPage;
