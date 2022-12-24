import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const onSubmit = (ev) => {
        ev.preventDefault();
    }
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title"> Create a new Account </h1>
                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Password Confirmation" />
                    <button className="btn btn-block"> Register </button>
                    <p className="message">
                        Already have an Account? <Link to="/login"> Login </Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup