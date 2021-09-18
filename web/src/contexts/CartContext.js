import React, { useEffect, useState } from 'react'

export const CartContext = React.createContext()

export function CartContextProvider({children}) {
    const [cart, setCart] = useState({
        items: [],
        finalPrice: 0
    });

    useEffect(() => {
        const cart = JSON.parse(localStorage.getItem('cart') || {
            products: [],
            finalPrice: 0
        })
        setCart(cart)
    }, [])

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart])

    function getCurrentQuantity() {
    return cart.items.reduce((accumulator, item) => accumulator + item.quantity, 0);
    }
        

    const getTotalPrice = (items) => {
        return items.reduce((price, item) => {
            return price + item.price * item.quantity
         }, 0)
    }

    function createItem(item) {
        const cartUpdated = {
            items: [...cart.items, item],
            finalPrice: cart.finalPrice + ( item.price * item.quantity)
        };
        setCart(cartUpdated)
    }

    function editItem(id, keyQuantity) {

        const cartUpdated = {
            items: [...cart.items],
            finalPrice: cart.finalPrice
        }

        const newItems = cartUpdated.items.map((elem, i) => {
            if (elem.id === id) {
                const itemUpdated = {...elem};
                if (keyQuantity === 'add') {
                    itemUpdated.quantity += 1;
                    cartUpdated.finalPrice += itemUpdated.price
                }
                if (keyQuantity === 'subtract') {
                    itemUpdated.quantity -= 1;
                    cartUpdated.finalPrice -= itemUpdated.price
                }
                return itemUpdated
            } else {
                return elem
            }
        });

        cartUpdated.items = newItems

        setCart(cartUpdated)
    }

    function deleteItem(id) {
        const cartUpdated = {
            items: [...cart.items],
            finalPrice: cart.finalPrice
        }

        const newItems = cart.items.filter((elem, i) => {
            if (elem.id === id) {
                cartUpdated.finalPrice = cartUpdated.finalPrice - elem.price * elem.quantity
                return false
            } else {
                return true
            }
        });
        cartUpdated.items = newItems

        setCart(cartUpdated)
    }
    const clearCart = () => {
        setCart({
            products: [],
            finalPrice: 0
        })
    }

    const value = {
        cart,
        createItem,
        editItem,
        deleteItem,
        getCurrentQuantity
    }

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}