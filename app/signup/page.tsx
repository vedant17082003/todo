"use client";

import React, { useState } from 'react';
import * as yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import { BackgroundBeamsWithCollisionDemo } from "@/app/component/background";

const validationSchema = yup.object().shape({
    name: yup.string().required("Name is required").min(3, "Name should be at least 3 characters long"),
    username: yup.string().required("Username is required"),
    phoneNumber: yup
        .string()
        .required("Phone number is required")
        .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),
    email: yup
        .string()
        .required("Email is required")
        .matches(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            "Invalid email format"
        ),
    address: yup.string().required("Address is required"),
    password: yup.string().required("Password is required").min(6, "Password should be at least 6 characters long"),
});

type SignupData = {

    name: string;
    username: string;
    phoneNumber: string;
    email: string;
    address: string;
    password: string;
}

const SignupPage: React.FC = () => {
    const [formData, setFormData] = useState<SignupData>({
        name: "",
        username: "",
        phoneNumber: "",
        email: "",
        address: "",
        password: "",
    });

    const [errors, setErrors] = useState<Partial<SignupData>>({});
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const validateForm = async () => {
        try {
            setErrors({}); // Reset errors before validation
            await validationSchema.validate(formData, { abortEarly: false });
            return true;
        } catch (err) {
            if (err instanceof yup.ValidationError) {
                const validationErrors: Partial<SignupData> = {};
                err.inner.forEach((error) => {
                    validationErrors[error.path as keyof SignupData] = error.message;
                });
                setErrors(validationErrors);
            }
            return false;
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isValid = await validateForm();
        if (!isValid) return; // Don't proceed if validation fails

        try {
            const response = await fetch("http://localhost:8000/users", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    username: formData.username,
                    phoneNumber: formData.phoneNumber,
                    email: formData.email,
                    address: formData.address,
                    password: formData.password,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || "Network response was not ok");
            }

            const data = await response.json();
            console.log("User created:", data);


            toast.success("User registered successfully!", {
                position: "top-right",
                autoClose: 3000,
            });

            setTimeout(() => {
                router.push("/login");
            }, 3000);
        } catch (error) {
            console.error("Error creating user:", error);
            toast.error("Error creating user. Please try again.");
        }
    };

    return (
        <div className="flex min-h-screen">

            <div className="flex-1 flex justify-center items-center bg-gray-100">
                <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                    <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

                    {/* Name */}
                    <label className="block mb-2">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="border p-2 mb-1 w-full"
                        required
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}


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


                    <label className="block mb-2">Phone Number</label>
                    <input
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        className="border p-2 mb-1 w-full"
                        required
                    />
                    {errors.phoneNumber && <p className="text-red-500 text-sm">{errors.phoneNumber}</p>}

                    {/* Email */}
                    <label className="block mb-2">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="border p-2 mb-1 w-full"
                        required
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

                    {/* Address */}
                    <label className="block mb-2">Address</label>
                    <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        className="border p-2 mb-1 w-full"
                        required
                    />
                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}


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

                    <button type="submit" className="w-full bg-orange-500 text-white p-2 rounded-lg">
                        Sign Up
                    </button>
                </form>
            </div>

            <div className="flex-1 flex justify-center items-center bg-blue-500">
                <BackgroundBeamsWithCollisionDemo Message='Signup to get reminded!' />
            </div>

            <ToastContainer />
        </div>
    );
};

export default SignupPage;
