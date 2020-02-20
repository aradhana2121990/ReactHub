import React,{Component} from 'react';
import Aux from '../../hoc/Auxiliary'
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
const INGREDIENT_PRICES = {
    salad : 0.5,
    cheese :0.4,
    meat :1.3,
    bacon : 0.7
}
class BurgerBuilder extends Component{
    state={
        ingredient : {
            salad : 0,
            bacon : 0,
            cheese :0,
            meat :  0
        },
        totalPrice : 4
    }
    addIngredientHandler =(type) =>{
        const oldCount = this.state.ingredient[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredient
        }
        updateIngredients[type]= updatedCount;
        
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice : newPrice , ingredient : updateIngredients});
    }

    removeIngredientHandler = (type) =>{
        const oldCount = this.state.ingredient[type];
        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredient
        }
        updateIngredients[type]= updatedCount;
        
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice : newPrice , ingredient : updateIngredients});
    }
    render(){
        const disableInfo = {
            ...this.state.ingredient
        }
        for(let key in disableInfo){
            disableInfo[key] = disableInfo[key] <= 0
        }
        return(
            <Aux>
                <Burger ingredient = {this.state.ingredient}/>
                    <BuildControls
                     ingredientAdded = {this.addIngredientHandler}
                      ingredientDeducted = {this.removeIngredientHandler}
                       disabled = {disableInfo}
                       price = {this.state.totalPrice}/>                
            </Aux>
        );
    }
}
 export default BurgerBuilder;