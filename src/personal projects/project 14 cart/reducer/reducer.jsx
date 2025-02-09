export const reducer = (state, action) => {
    console.log('your state', state);

    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }

    if (action.type === 'REMOVE') {
        return { ...state, cart: state.cart.filter((item) => item.id !== action.payload) }
    }

    if (action.type === 'INCREASE') {
        // yaha per variable create karey tempCart k naam se
        // aur tempCart ko map karey 
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount + 1 }
            }
            return cartItem

        }).filter((cartItem) => cartItem.amount - 1)
        return { ...state, tempCart }
    }

    if (action.type === 'DECREASE') {
        // yaha per variable create karey tempCart k naam se
        // aur tempCart ko map karey 
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload) {
                return { ...cartItem, amount: cartItem.amount - 1 }
            }
            return cartItem

        })
        return { ...state, tempCart }
    }
    return state

}