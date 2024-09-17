import "./login.css"
import FoodLogo from "../img-holder/FoodLogo.png"
import FoodShade from "../img-holder/FoodShade.png"
import Person from "../img-holder/persoin.png"
import Google from "../img-holder/Google.png"
import PlayStore from "../img-holder/PlayStore.png"
import { useState } from "react"
import pizza from "../img-holder/pizza.png"
import { Link, useNavigate } from "react-router-dom"

export default function Login() {

    const [email, setEmail] = useState('')
    const [pass1, setPass] = useState('')
    let navigate1 = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const storedEmail = JSON.parse(window.localStorage.getItem('Email1'));
        const storedPassword = JSON.parse(window.localStorage.getItem('pass'));

        if (email === storedEmail && pass1 === storedPassword) {
            navigate1('/Home');
        } else {
            alert('Invalid email or password');
        }
    }


    return (
        <div>
            <header className="header1">
                <div className="image-food">
                    <img className="foodLogo" src={FoodLogo} alt="Error" />
                    <img className="foodShade" src={FoodShade} alt="Error" />
                    <img className="pizza1" src={pizza} alt="Error" />
                </div>

                <div className="Login-texts">
                    <img className="Person1" src={Person} alt="Error" />
                    <input onChange={(e) => setEmail(e.target.value)} className="First-input" type="text" placeholder="Enter your Email" />
                    <input onChange={(e) => setPass(e.target.value)} type="text" className="Second-input" placeholder="Enter your Password" />

                    <button onClick={handleSubmit} className="login-button">Login</button>

                    <img className="Google-image" src={Google} alt="" />

                    <Link to="/Signup">
                        <button className="Create-acc_button">Create Account</button></Link>

                    <img src={PlayStore} alt="" />
                </div>
            </header>
        </div >
    )
}