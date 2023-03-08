import React from 'react'
import { useRef, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import ScaleLoader from "react-spinners/ScaleLoader";


function Signup() {
    // states & hooks
    const { isLoggedIn, setisLoggedIn } = useAuth()
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const InputPhone = useRef()
    const InputPassword = useRef()
    const [email, setEmail] = useState('SignUp Form ')
    // button function
    function handleSubmit(e) {
        console.log(InputPassword.current.value)
        setLoading(true)
        e.preventDefault()
        const url = "https://comfortable-gold-belt.cyclic.app/signup"
        const userData = {
            phone: parseInt(InputPhone.current.value),
            password: InputPassword.current.value
        }

        axios.post(url, userData).then((res) => {
            console.log(res.data)
            setEmail("ho gia ")
            navigate("/login")
            setisLoggedIn(true)
            setLoading(false)
        }).catch((err) => {
            setLoading(false)
            console.log(err)
            setEmail("stay please")
        })
    }
    return (
        <form className='container'>

            <h1 className='display-2 text-center'>{loading ? (<ScaleLoader color="#36d7b7" />) : email} </h1>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Phone Number</label>
                <input ref={InputPhone} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input ref={InputPassword} type="password" className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" onClick={handleSubmit} className="btn btn-primary">Submit</button>
            or
            <Link to="/login" className="btn btn-secondary">Login</Link>
        </form>
    )
}

export default Signup