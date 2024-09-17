import "./singup.css"
import FoodLogo from "../img-holder/FoodLogo.png"
import FoodShade from "../img-holder/FoodShade.png"
import Person from "../img-holder/persoin.png"
import Google from "../img-holder/Google.png"
import PlayStore from "../img-holder/PlayStore.png"
import Tacos from "../img-holder/Tacos.png"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Singup() {

    const [email1, setEmail1] = useState('')
    const [pass1, setPass1] = useState('')
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let navigate = useNavigate()

    const handleSubmit = (e) => {
        if(!email1.match(pattern) || pass1 === ''){
            alert("You have to fill the field")
        } else {
            e.preventDefault()
            window.localStorage.setItem('Email1',JSON.stringify(email1))
            window.localStorage.setItem('pass',JSON.stringify(pass1))
            navigate('/Home')
        }
    }

    return (
        <div>
            <header className="headerr">
                <div className="Tacos-images">
                    <img className="image1" src={FoodShade} alt="Error" />
                    <img className="image2" src={FoodLogo} alt="Error" />
                    <img className="image3" src={Tacos} alt="Error" />
                </div>

                <div className="Account">
                    <img className="Account-person" src={Person} alt="Error" />

                    <input onChange={(e) => setEmail1(e.target.value)} type="email" className="acc-input-1" placeholder="Enter your Email"/>
                    <input onChange={(e) => setPass1(e.target.value)} type="text" className="acc-input-2" placeholder="Create Password"/>

                    <button onClick={handleSubmit} className="acc-submit">Create Account</button>
                    <h3 className="Or">Or</h3>
                    <img className="acc-google" src={Google} alt="Error" />
                    <img className="acc-play" src={PlayStore} alt="Error" />
                </div>
            </header>
        </div>
    )
}