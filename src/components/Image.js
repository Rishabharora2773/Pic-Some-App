import React,{useContext} from "react";
import {Context} from "../Context";
import useHover from "../hooks/useHover";
import PropTypes from "prop-types";

function Image(props) {
    //const [isHovered, setIsHovered] = useState(false);
    const [isHovered,ref] = useHover();
    const {toggleFavorite,addImageToCart,cartItems,removeImageFromCart} = useContext(Context);
    const isFavorite = props.img.isFavorite;
    
    function heartIcon() {
        if(isFavorite) {
            return <i className="ri-heart-fill favorite"></i>;
        } else if(isHovered) {
            return <i className="ri-heart-line favorite" onClick={() => toggleFavorite   (props.img.id)}> </i>
        }
    } 
    
    function cartIcon() {
        const inCart = cartItems.some(photo => photo.id === props.img.id);
        //console.log(inCart);  
        if(inCart) {
            return <i className="ri-shopping-cart-fill cart" onClick={() => removeImageFromCart(props.img)}></i>;
        } else if(isHovered){
            return <i className="ri-add-circle-line cart" onClick={() => addImageToCart(props.img)}> </i>;
        }
    }
    
    return (
        <div 
            className={`${props.className} image-container`}
            ref = {ref}
            >
            <img src={props.img.url} className="image-grid" alt="gridimg"/>
            {heartIcon()} 
            {cartIcon()}
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image
