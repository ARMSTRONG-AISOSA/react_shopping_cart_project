import { createContext, useState } from "react";
import { PRODUCTS } from "../products";

// Keeps track for states and informations that need to be accessed across of project;
// Such as being able to change states in the shop and in the cart
export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {

    const getDefaultCart = () => {
        let cart = {}; // Initialize/create an empty object

        // Loops through the PRODUCTS array
        for (let i = 1; i <= PRODUCTS.length; i++) {
            // Sets each product's ID as a key in cart and assigns 0 as its value → { 1: 0, 2: 0, 3: 0, ... }
            cart[i] = 0;
        };
        // Returns the cart object.
        return cart;
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: newAmount }))
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        // Uses a for...in loop to iterate over keys (product IDs) in cartItems
        // cartItems is an object where the keys are product IDs, and values are quantities (key-vaue pairs).
        // {
        //   "101": 2,  // Product with ID 101, quantity: 2
        //   "102": 1   // Product with ID 102, quantity: 1
        // }
        for (const item in cartItems) {

            // Run if item(key value) is greater than zero
            if (cartItems[item] > 0) {
                // Searches for the product in the PRODUCTS array using.find().
                // Converts item(a string) into a number using Number(item) before comparison.
                // Returns the matching product object, which contains id, name, price, etc.
                // const PRODUCTS = [
                //     { id: 101, name: "Laptop", price: 500 },
                //     { id: 102, name: "Headphones", price: 100 }
                // ];
                // If item = "101", then:
                // let itemInfo = { id: 101, name: "Laptop", price: 500 };

                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                const itemTotal = cartItems[item] * itemInfo.price;
                totalAmount = totalAmount + itemTotal;
            }
        }

        return totalAmount;
    }

    // This function updates the cart state by increasing the quantity of a specific item when it's added to the cart.
    // pass in the productId
    const addToCart = (itemId) => {

        // Get the previous cartItem objects
        // Uses React's state updater function to update cartItems based on its previous state (prev).
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    // This function updates the cart state by removing the quantity of a specific item from the cart.
    // pass in the productId
    const removeFromCart = (itemId) => {

        // Get the previous cartItem objects
        // Uses React's state updater function to update cartItems based on its previous state (prev).
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    // cartItems would be an object with (8) properties (items) with key-value pairs of (product) id which is the key and number of that item selected which is the value
    // {
    // 1: 0, ==> No number of this item has been selected
    // 2: 3, ==> product id 2 ["Macbook Pro"] with 3 selected of item
    // 3: 0,
    // ...
    // }
    const [cartItems, setCartItems] = useState(getDefaultCart());



    // All the values, states and functions i want to pass out to the project
    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount
    }

    return (

        //I wrap all the states, function and logic inside here from where it is passed to the provider. then the info. is wrpped around the project (and routes).
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider >
    )
}
