import React from 'react'
import Aux from '../../../hoc/auxiliary'
import Button from '../../UI/Button/Button';

function OrderSummary(props) {

    let ingredientsSummary = Object.keys(props.ingredients)
        .map((key) => (
            <li key={key}>
                <span style={{ textTransform: 'capitalize' }}>{key}</span>: {props.ingredients[key]}
            </li>
        ));

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientsSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button onClicked={props.cancel} btnType='Danger'>CANCEL</Button>
            <Button onClicked={props.proceed} btnType='Success'>CONTINUE</Button>
        </Aux>
    )
}

export default OrderSummary
