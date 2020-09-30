import React,{useContext} from "react";
import {Context} from "../Context";
import useHover from "../hooks/useHover";
import PropTypes from "prop-types";

function CartItem(props) {
    const {removeImageFromCart} = useContext(Context);
    //const [hovered,setHovered] = useState(false);
    const [hovered,ref] = useHover();
        
    const iconClassName = hovered ? "ri-delete-bin-fill" : "ri-delete-bin-line";
    
    return (
        <div className="cart-item">
            <i className={iconClassName} 
               onClick={() => removeImageFromCart(props.item)}
               ref = {ref}
            >
            </i>
            <img src={props.item.url} width="130px" alt="url"/>
            <p>$5.99</p>
        </div>
    );
}

CartItem.propTypes = {
    item : PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}
export default CartItem;