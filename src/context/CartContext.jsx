import { createContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addProductToCart = (cartItem) => {
        // const indexOfRepetedProduct = cart.findIndex(
        //     (product) => product.identifier === cartItem.identifier
        // );

        // // if (indexOfRepetedProduct > -1) {
        // //     cart[indexOfRepetedProduct].quantity = quantity
        // // }

        setCart([
            ...cart,
            {
                id: cartItem.id,
                identifier: cartItem.identifer,
                size: cartItem.size,
                quantity: cartItem.quantity,
                title: cartItem.title,
                price: cartItem.price,
            },
        ]);
    };

    const incrementProductInCart = (updItem) => {
        setCart(
            cart.map((product) =>
                product.id === updItem.id
                    ? {
                          ...product,
                          quantity: product.quantity + 1,
                      }
                    : product
            )
        );
    };

    const decrementProductInCart = (updItem) => {
        if (updItem.quantity > 1) {
            setCart(
                cart.map(product => product.id === updItem.id ? {
                     ...product, quantity: product.quantity - 1
                } : { ...product })
            );
        }
    };

    const deleteProductFromCart = id => {
        setCart(cart.filter(product => product.id !== id))
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addProductToCart,
                incrementProductInCart,
                decrementProductInCart,
                deleteProductFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartContext;
