import { useState, createContext } from 'react';

export const CartContext = createContext([]);

export default function AppContextProvider({ children }) {

const [cart, setCart] = useState ([]);
// const [totalPrice, setTotalPrice] = useState(0);
// const [totalItems, setTotalItems] = useState(0);

function isInCart (id){
    return cart.some(item => item.id === id)
}

function addToCart({id, title, precio, quantity}){
 const isCurrentInCart = isInCart(id)
    if(isCurrentInCart){
        const newCart = cart.map(item => {
            if (item.id === id){
                return {
                    ...item,
                    quantity: quantity + item.quantity
                }
            }
            return item
        })
        return setCart([...newCart])
    }
    setCart([...cart, {id, title, precio, quantity}])
}

 function updateToCart({id, title, precio, quantity}){
     const isCurrentInCart = isInCart(id)
        if(isCurrentInCart){
            const newCart = cart.map(item => {
                if (item.id === id){
                    return {
                        ...item,
                        quantity: quantity 
                    }
                }
                return item
            })
            return setCart([...newCart])
        }
        setCart([...cart, {id, title, precio, quantity}])
    }

function clearCart(){
    setCart([]);
}

    return (
        <CartContext.Provider value={
            {
                cart,
                setCart,
                addToCart,
                clearCart,
                updateToCart,

            }
        }>
            {children}
        </CartContext.Provider>
    )
}
