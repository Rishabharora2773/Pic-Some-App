import React, {useState, useEffect} from "react";

const Context = React.createContext();

function ContextProvider(props) {
    const [photos,setPhotos] = useState([]);
    const [cartItems,setCartItems] = useState([]);
    
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setPhotos(data))
    },[]);
    
    //console.log(photos);
    
    function addImageToCart(image) {
        setCartItems(prevItems => [...prevItems,image]);   
        //console.log(cartItems); 
    }

    function removeImageFromCart(image) {
        const remainingCartItems = cartItems.filter(photo => photo.id !== image.id);
        setCartItems(remainingCartItems);   
    }
    
    function emptyCart() {
        setCartItems([]);
    }
    //console.log(cartItems);
        
    function toggleFavorite(id) {
        photos.forEach(photo => {
           if(photo.id === id) {
               photo.isFavorite = !photo.isFavorite;
           }
        });
        setPhotos(photos);
        console.log(`${id} changed!`);
    }   
     
    return (
        <Context.Provider value={{photos,toggleFavorite,addImageToCart,cartItems,removeImageFromCart,emptyCart}}>
            {props.children}
        </Context.Provider>
    );
}

export {ContextProvider,Context};