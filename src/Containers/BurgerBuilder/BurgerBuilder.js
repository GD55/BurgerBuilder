import React, { useState } from 'react'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = { salad: 0.5, cheese: 0.4, meat: 1.3, bacon: 0.7 };

export default function BurgerBuilder() {

    const [ingredients, setIngredients] = useState({ salad: 0, bacon: 0, cheese: 0, meat: 0 });
    const [totalPrice, setTotalPrice] = useState(4);
    const [purchasing, setPurchasing] = useState(false);

    const ingredientChangeHandler = (type, amount) => {
        let newAmount = ingredients[type] + amount;
        if (newAmount >= 0) {
            setIngredients({
                ...ingredients, [type]: newAmount
            });
            setTotalPrice(totalPrice + (amount * INGREDIENT_PRICES[type]));
        }
    }

    const handlePurchase = () => {
        setPurchasing(true);
    }

    const cancelPurchase = () => {
        setPurchasing(false);
    }

    const continuePurchase = () => {
        setPurchasing(false);
    }

    return (
        <div>
            <Modal show={purchasing} closeModal={cancelPurchase}>
                <OrderSummary
                    proceed={continuePurchase}
                    cancel={cancelPurchase}
                    ingredients={ingredients}
                    price={totalPrice.toFixed(2)}
                />
            </Modal>
            <Burger ingredients={ingredients} />
            <BuildControls
                changeIngredient={ingredientChangeHandler}
                ingredients={ingredients}
                price={totalPrice.toFixed(2)}
                ordered={handlePurchase}
            />
        </div>
    )
}
