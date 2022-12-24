import React, { useRef } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

const Signup = () => {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfrimationRef = useRef();

    const { setUser, setToken } = useStateContext();

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confrimation: passwordConfrimationRef.current.value,
        };
        axiosClient.post("/signup", payload)
            .then(({ data }) => {
                setUser(data.user);
                setToken(data.token);
            })
            .catch(err => {
                const response = err.response
                if (response && response.status === 422) {
                    console.log(response.data.errors)
                }
            })
            ;
    };
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title"> Create a new Account </h1>
                    <input ref={nameRef} type="text" placeholder="Full Name" />
                    <input
                        ref={emailRef}
                        type="email"
                        placeholder="Email Address"
                    />
                    <input
                        ref={passwordRef}
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        ref={passwordConfrimationRef}
                        type="password"
                        placeholder="Password Confirmation"
                    />
                    <button className="btn btn-block"> Register </button>
                    <p className="message">
                        Already have an Account?{" "}
                        <Link to="/login"> Login </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
