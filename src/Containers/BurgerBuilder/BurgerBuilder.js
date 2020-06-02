import React, { useState, useEffect } from 'react'
import Burger from '../../Components/Burger/Burger'
import BuildControls from '../../Components/Burger/BuildControls/BuildControls'
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Aux from '../../hoc/auxiliary';

const INGREDIENT_PRICES = { salad: 0.5, cheese: 0.4, meat: 1.3, bacon: 0.7 };

const BurgerBuilder = () => {

    const [ingredients, setIngredients] = useState(null);
    const [totalPrice, setTotalPrice] = useState(4);
    const [purchasing, setPurchasing] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('/ingredients.json')
            .then(resp => {
                setIngredients(resp.data)
                setError(null)
            })
            .catch(err => setError(err))
    }, [])

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
        setLoading(true);
        const order = {
            ingredients,
            price: totalPrice.toFixed(2),
            customer: {
                name: 'Sam',
                address: {
                    street: 'Street 5',
                    zipCode: '456124',
                    country: 'USA'
                },
                email: 'sam@gmail.com'
            },
            deliveryMethod: 'COD'
        }
        axios.post('/orders.json', order)
            .then(resp => console.log(resp))
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
                setPurchasing(false);
            });
    }

    const orderSummary = ingredients && (loading ? <Spinner /> :
        <OrderSummary
            proceed={continuePurchase}
            cancel={cancelPurchase}
            ingredients={ingredients}
            price={totalPrice.toFixed(2)}
        />);

    const burger = error ? <p>Unable to  load Ingredients</p> : ingredients ?
        <Aux>
            <Burger ingredients={ingredients} />
            <BuildControls
                changeIngredient={ingredientChangeHandler}
                ingredients={ingredients}
                price={totalPrice.toFixed(2)}
                ordered={handlePurchase}
            />
        </Aux>
        : <Spinner />

    return (
        <div>
            <Modal show={purchasing} closeModal={cancelPurchase}>
                {orderSummary}
            </Modal>
            {burger}
        </div>
    )
}

export default withErrorHandler(BurgerBuilder, axios);