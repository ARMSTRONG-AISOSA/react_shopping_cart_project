import { createContext, useState } from "react";

// Keeps track fo states and informations that need to be accessed across of project;
// Such as being able to change states in the shop and in the cart
export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState();

    return (

        //I wrap all the states, function and logic inside here from where it is passed to the provider. then the info. is wrpped around the project (and routes).
        <ShopContext.Provider>
            {props.children}
        </ShopContext.Provider>
    )
}
