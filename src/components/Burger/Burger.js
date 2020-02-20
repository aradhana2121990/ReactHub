import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import BurgerBuilder from '../../containers/BurgerBuilder/BurgerBuilder';
 const burger = (props) => {
     let transformedIngredients = Object.keys(props.ingredient).map(igkey =>{
        return [...Array(props.ingredient[igkey])].map((_,index)=>{
            return <BurgerIngredient key = {igkey+index} type={igkey}/>
        }) 
    }).reduce((arr,el) =>{
        return arr.concat(el)
    },[]);
    if(transformedIngredients.length === 0){
        transformedIngredients=<p>please start adding ingredients</p>
    }
    //console.log(transformedIngredients)
     return(
         <div className={classes.Burger}>
             <BurgerIngredient type = "bread-top"/>
              {transformedIngredients}
             <BurgerIngredient type = "bread-bottom"/>
         </div>
     )
 }
 export default burger;