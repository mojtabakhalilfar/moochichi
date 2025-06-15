"use client"
import React, { createContext, useContext, useEffect, useState } from "react";

export type TCartItem = {
    id: number
    count: number
    color: number
}

export type TCartContext = {
    cartItems: TCartItem[] | null
    getProduct: (id: number , colorId: number) => number
    handleIncreaseProduct: (id: number, colorId: number) => void
    handleDescreaseProduct: (id: number, colorId: number) => void
    handleClearCart: () => void
    handleAddToCart: (id: number, colorId: number) => void
    handleRemoveFromCart: (id: number, colorId: number) => void
    totalProduct: number
}

const CartContext = createContext({} as TCartContext)

export const useShopingCartContext = () => {
    return useContext(CartContext)
}

export const ShopingCartContextLayout = ({ children }: { children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<TCartItem[]>([])

    useEffect(() => {
        const storedData = localStorage.getItem("cartItem-stored")
        if (storedData) {
            setCartItems(JSON.parse(storedData))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("cartItem-stored", JSON.stringify(cartItems))
    }, [cartItems])

    const handleClearCart = () => {
        setCartItems([])
    }

    const getProduct = (id: number, colorId: number) => {
        return cartItems.find(item => item.id == id &&  item.color==colorId)?.count || 0
    }

    const totalProduct = cartItems.reduce((acc, item) => {
        return acc += item.count
    }, 0)

    const handleIncreaseProduct = (id: number, colorId: number) => {
        setCartItems((currentItem) => {
            let isNotExist = currentItem.find(item => item.id == id && item.color == colorId) == null
            if (isNotExist) {
                return [...currentItem, { id: id, count: 1, color: colorId }]
            } else {
                return currentItem.map((item) => {
                    if (item.id == id && item.color == colorId) {
                        return { ...item, count: item.count + 1 }
                    } else {
                        return item
                    }
                })
            }

        })
    }
    const handleDescreaseProduct = (id: number, colorId: number) => {
        setCartItems((current) => {
            let isLastOne = current.find(item => item.id == id && item.color == colorId)?.count == 1
            if (isLastOne) {
                return current.filter(item => item.id != 1 && item.color != colorId)
            } else {
                return current.map((item) => {
                    if (item.id == id && item.color == colorId) {
                        return { ...item, count: item.count - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    const handleAddToCart = (id: number, colorId: number) => {
        setCartItems(current => [...current, { id: id, count: 1, color: colorId }])
    }
    const handleRemoveFromCart = (id: number, colorId: number) => [
        setCartItems(current => {
            return current.filter(item => item.id != id || item.color != colorId)
        })
    ]
    return (
        <CartContext.Provider value={{ cartItems, handleClearCart, getProduct, totalProduct, handleIncreaseProduct, handleDescreaseProduct, handleAddToCart, handleRemoveFromCart }}>
            {children}
        </CartContext.Provider>
    )

}