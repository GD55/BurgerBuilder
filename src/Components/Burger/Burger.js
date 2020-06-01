import React from 'react'
import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

function Burger(props) {

    const transformedIngredients = Object.keys(props.ingredients)
        .map(key => {
            return [...Array(props.ingredients[key])].map((_, i) => (
                <BurgerIngredient type={key} key={key + i} />
            ));
        })
        .reduce((ar, el) => ar.concat(el), []);

    return (
        <div className={styles.Burger}>
            <BurgerIngredient type='bread-top' />
            {transformedIngredients.length === 0 ?
                <p>Please start adding ingredients!</p> :
                transformedIngredients}
            <BurgerIngredient type='bread-bottom' />
        </div>
    )
}

export default Burger
