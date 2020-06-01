import React, { useState, useEffect } from 'react'
import styles from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' },
];

function BuildControls(props) {

    const [purchasable, setPurchasable] = useState(false);
    const { ingredients, changeIngredient, price } = props;

    useEffect(() => {
        let sum = 0;
        for (let key in ingredients) {
            sum += ingredients[key]
        }
        if (sum > 0) setPurchasable(true);
        else setPurchasable(false);
    }, [ingredients]);

    return (
        <div className={styles.BuildControls}>
            <p>Curren Price is {price}</p>
            {controls.map((control) => (
                <BuildControl
                    key={control.label}
                    label={control.label}
                    type={control.type}
                    changeIngredient={changeIngredient}
                    disabled={ingredients[control.type] <= 0}
                />
            ))}
            <button
                disabled={!purchasable}
                className={styles.OrderButton}
                onClick={props.ordered}
            >
                ORDER NOW
            </button>
        </div>
    )
}

export default BuildControls
