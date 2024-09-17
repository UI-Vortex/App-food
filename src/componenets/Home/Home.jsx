import "./home.css"
import persona from "../img-holder/persoin.png"
import vector from "../img-holder/Vector.png"
import burger from "../img-holder/burger.png"
import pizza12 from "../img-holder/pizza12.png"
import Drink from "../img-holder/Drink.png"
import burgerCombo from "../img-holder/comboBurger.png"
import BurgerKing from "..//img-holder/BurgerKing.png"
// import { useState } from "react"

export default function Home() {

    // const [searchTerm, setSearchTerm] = useState('')
    const foodDataBase = [
        { title: 'Combo Burger', img: burgerCombo, cost: '10$' },
        { title: 'Burger', img: BurgerKing, cost: '15$' },
        { title: 'Coke', img: burgerCombo, cost: '20$' },
        { title: 'Fanta', img: BurgerKing, cost: '8%' },
        { title: 'Cheese burger', img: burgerCombo, cost: '$50' },
        { title: 'Double burger', img: BurgerKing, cost: '$30' },
        { title: 'Triple Burger', img: burgerCombo, cost: '$120' },
        { title: 'Tomato', img: BurgerKing, cost: '$55' },
        { title: 'Big burger', img: burgerCombo, cost: '$100' },
        { title: 'Sprite', img: BurgerKing, cost: '$120' },
        { title: 'Trio coke', img: burgerCombo, cost: '$110' },
        { title: 'Mini shuarma', img: BurgerKing, cost: '$510' },
    ]

    return (
        <div>
            <main>
                <div className="profile">
                    <img src={vector} alt="Error" />
                    <img src={persona} alt="Error" />
                </div>

                <h2 className="Home-choose">Choose the</h2>
                <div className="home-gesture">
                    <input type="text" className="home-input" placeholder="Search Food  Here Foody" />
                    <i class="fa-solid fa-magnifying-glass"></i>
                </div>
                <h2 className="home-category">Categories</h2>
                <div className="Foods-flexer">
                    <div className="foods">
                        <img src={burger} alt="Error" />
                        <h3 className="foods-title">Burger</h3>
                    </div>
                    <div className="foods1">
                        <img src={pizza12} alt="Error" />
                        <h3 className="foods-title">Pizza</h3>
                    </div>
                    <div className="foods2">
                        <img src={Drink} alt="Error" />
                        <h3 className="foods-title">Cold Drink</h3>
                    </div>
                </div>

                <h2 className="burgers">Burgers</h2>

                <div className="burgers-food-flexer">
                    {foodDataBase.map(foodDataBas => {
                        return <div className="Burgers-food" key={foodDataBas}>
                            <img src={foodDataBas.img} alt="" />
                            <h3 className="burger-title">{foodDataBas.title}</h3>
                            <b className="burger-cost">{foodDataBas.cost}</b>
                        </div>
                    })}
                </div>

            </main>
        </div >
    )
}