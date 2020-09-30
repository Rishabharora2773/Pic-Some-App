import React,{useContext, useState} from "react";
import {Context} from "../Context";
import CartItem from "../components/CartItem";

function Cart() {
    const {cartItems,emptyCart} = useContext(Context);
    const [buttonText, setButtonText] = useState("Place Order");
    
    const totalCost = 5.99 * cartItems.length;
    const totalCostDisplay = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})
    
    const cartItemElements = cartItems.map(item => {
        return <CartItem key={item.id} item={item}/>
    });
    
    function placeOrder() {
        setButtonText("Ordering...");
        setTimeout(()=> {
            console.log('Order Placed!');
            setButtonText("Place Order");
            emptyCart();
        },3000);
    }
    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {totalCostDisplay}</p>
            {
                cartItems.length ? 
                <div className="order-button">
                <button onClick={placeOrder}>{buttonText}</button>
                </div> :
                <p>You have no items in your cart.</p>
            }
        </main>
    )
}

export default Cart;