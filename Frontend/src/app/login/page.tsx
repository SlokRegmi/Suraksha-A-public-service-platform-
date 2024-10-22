'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { Button } from "@/components/ui/button";
import PasswordInput from '../passwordinput';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export default function Login() {
    const [user, setUser] = useState({
        did: "",
        password: "",
    });

    const [message, setMessage] = useState<string | null>(null); // State to hold login status messages
    const [isError, setIsError] = useState<boolean>(false); // State to check if the message is an error

    const onLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setMessage(null); // Reset message on submit
        setIsError(false);
        try {
            const res = await axios.post("http://localhost:8000/api/login", user);
            if (res.data.success) {
                setMessage("Login successful!"); // Set success message
                setIsError(false);
            } else {
                setMessage("Invalid Department ID or password."); // Set error message
                setIsError(true);
            }
        } catch (error) {
            setMessage("An error occurred. Please try again."); // Handle API or network errors
            setIsError(true);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[url('./Bg.jpg')] bg-cover bg-center">
            <div className="w-full max-w-sm p-8 bg-gray-900 bg-opacity-90 rounded-lg shadow-xl glow">
                <h2 className="mb-6 text-3xl font-bold text-center text-white">Surakchya</h2>

                {/* Display success or error messages */}
                {message && (
                    <div
                        className={`p-3 mb-4 text-center text-base font-bold ${
                            isError ? "text-red-500 bg-red-100" : "text-green-500 bg-green-100"
                        } rounded`}
                    >
                        {message}
                    </div>
                )}

                <form className="space-y-6" onSubmit={onLogin}>
                    <div>
                        <label htmlFor="department-id" className="block text-sm font-medium text-gray-300">Department ID</label>
                        <input
                            id="department-id"
                            type="text"
                            placeholder="Department ID"
                            className="w-full p-3 mt-1 text-base bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={user.did}
                            onChange={(e) => setUser({ ...user, did: e.target.value })}
                        />
                    </div>
                    <PasswordInput
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />
                    <Button type="submit" variant="default" className="w-full p-3 text-base font-bold text-white bg-blue-600 rounded hover:bg-blue-700">
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    );
}
