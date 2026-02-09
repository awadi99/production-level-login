import React from 'react'
import { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import signupSchema  from './../schema/auth.schema.js'
import axios from "../services/axiosInstance.js";
import Input from "./../components/Input.jsx";
import Button from "./../components/Button.jsx";
import Loader from "./../components/Loader.jsx"
import { useForm } from 'react-hook-form';
import { ToastContainer, toast, Flip } from "react-toastify";




 const SignupPage = () => {
    const [loading, setLoading] = useState(false);


    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(signupSchema)
    });

    const onSubmit = async (data) => {
        try {

            setLoading(true);

            await axios.post("/auth/signup", data);
            // navigate("/")
            toast.success("Accoount created successfully");

            reset();
            
        } catch (error) {
            toast.error(error.response?.data?.msg || "Something went wrong");
            console.error(error);

        } finally {
            setLoading(false);
        }
    }

    return (
        <>

            <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
                <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
                    <h2 className='text-2xl font-medium text-center mb-6'>
                        Create Account
                    </h2>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <Input
                            label="Full Name"
                            placeholder="Enter your full name"
                            {...register("fullName")}
                            error={errors.fullName?.message}
                            />

                            <Input
                            label="Email"
                            type="email"
                            placeholder="Enter your email"
                            {...register("email")}
                            error = {errors.email?.message}
                            />

                            <Input
                            label="Password"
                            type="password"
                            placeholder="Enter your password"
                            {...register("password")}
                            error={errors.password?.message}
                            />

                            <Button type='submit' loading={loading}>
                                Sign Up
                            </Button>
                    </form>
                    <p className='text-sm text-center mt-6'>
                        Already have an account?{" "}
                        <span
                        onClick={()=>navigate("login")}
                        className='text-black font-medium cursor-pointer hover:underline'>
                            Login
                        </span>
                    </p>
                </div>
                {loading && <Loader/>}

                <ToastContainer
                    position="top-center"
                    autoClose={2500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                    transition={Flip}
                />
                </div>
            </>
            );
};

    export default SignupPage;