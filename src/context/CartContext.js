import { useState, createContext } from 'react';

export const CartContext = createContext([]);

export default function AppContextProvider({ children }) {

const [cart, setCart] = useState ([]);
// const [totalPrice, setTotalPrice] = useState(0);
// const [totalItems, setTotalItems] = useState(0);

function isInCart (id){
    return cart.some(item => item.id === id)
}

function addToCart({id, titulo, precio, cantidad}){
 const isCurrentInCart = isInCart(id)
    if(isCurrentInCart){
        const newCart = cart.map(item => {
            if (item.id === id){
                return {
                    ...item,
                    cantidad: cantidad + item.cantidad
                }
            }
            return item
        })
        return setCart([...newCart])
    }
    setCart([...cart, {id, titulo, precio, cantidad}])
}

 function updateToCart({id, titulo, precio, cantidad}){
     const isCurrentInCart = isInCart(id)
        if(isCurrentInCart){
            const newCart = cart.map(item => {
                if (item.id === id){
                    return {
                        ...item,
                        cantidad: cantidad 
                    }
                }
                return item
            })
            return setCart([...newCart])
        }
        setCart([...cart, {id, titulo, precio, cantidad}])
    }

function handleRemove (id){
    const newcart = cart.filter ((item) => item.id !== id);
    setCart(newcart);
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
                handleRemove,

            }
        }>
            {children}
        </CartContext.Provider>
    )
}
