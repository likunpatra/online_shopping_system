import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
    const [currentState, setCurrentState] = useState("Login");
    const { token, setToken, navigate, backendUrl } = useContext(ShopContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            if (currentState === "Sign Up") {
                const response = await axios.post(
                    backendUrl + "/api/user/register",
                    { name, email, password }
                );
                if (response.data.success === true) {
                    setToken(response.data.token);
                    localStorage.setItem("token", response.data.token);
                } else {
                    toast.error(error.response.data.message);
                }
            } else {
                const response = await axios.post(
                    backendUrl + "/api/user/login",
                    { email, password }
                );
                if (response.data.success) {
                    setToken(response.data.token);
                    localStorage.setItem("token", response.data.token);
                } else {
                    toast.error(error.response.data.message);
                }
            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    };

    useEffect(()=>{
        if(token){
            navigate("/")
        }
    },[token])

    return (
        <form
            onSubmit={onSubmitHandler}
            className="flex flex-col items-center w-[90%]  m-auto gap-4 text-gray-800 shadow-[-10px_10px_20px_rgba(0,0,0,0.678)] bg-white p-20 pt-10 mb-20"
        >
            <div className="inline-flex item-center gap-2 mb-2 mt-10">
                <p className="prata-regular text-3xl">{currentState}</p>
            </div>
            {currentState === "Login" ? (
                ""
            ) : (
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    className="sm:w-80 md:w-100 px-3 py-2 border border-gray-800"
                    placeholder="Name"
                    required
                />
            )}
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="sm:w-80 md:w-100 px-3 py-2 border border-gray-800"
                placeholder="Email"
                required
            />
            <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                className="sm:w-80 md:w-100 px-3 py-2 border border-gray-800"
                placeholder="Password"
                required
            />
            <div className="sm:w-80 md:w-100 flex justify-between text-sm -mt-2">
                <p className="cursor-pointer">Forgot Your password</p>
                {currentState === "Login" ? (
                    <p
                        className="cursor-pointer"
                        onClick={() => setCurrentState("Sign Up")}
                    >
                        Create Account
                    </p>
                ) : (
                    <p
                        className="cursor-pointer"
                        onClick={() => setCurrentState("Login")}
                    >
                        {" "}
                        Login Here
                    </p>
                )}
            </div>
            <button className="bg-black text-white px-8 py-2 mt-4 active:bg-gray-500">
                {currentState === "Login" ? "Sign In" : "Sign Up"}
            </button>
        </form>
    );
};

export default Login;
