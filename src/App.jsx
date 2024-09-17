import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./componenets/Login/Login";
import Singup from "./componenets/SingUp/Singup";
import Home from "./componenets/Home/Home";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Signup" element={<Singup />} />
                    <Route path="/Home" element={<Home />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}