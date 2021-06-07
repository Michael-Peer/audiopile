const INITIAL_STATE = {
    cart: [],
    total: 0
}

export function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            const { product } = action.payload
            const isProductExist = state.cart.find(cartItem => cartItem.id === product.id)
            if (isProductExist) {
                console.log('exist', product.quantity);
                let addToTotal = 0
                const productQuantity = product.quantity
                // product.quantity += 1
                return {
                    cart: state.cart.map(cartItem => {
                        if (cartItem.id === product.id) {
                            addToTotal = product.price * productQuantity
                            console.log('quantity', product.quantity, cartItem.quantity);
                            product.quantity += cartItem.quantity
                            return product
                        }
                        else return cartItem
                        // return cartItem.id === product.id ? product : cartItem
                    }),
                    total: state.total + addToTotal
                }
            } else {
                console.log('not exist', product.quantity);
                return {
                    cart: [...state.cart, product],
                    total: state.total + (product.price * product.quantity)
                }
            }
        case 'DECREASE_QUANTITY_CART': {
            const { product } = action.payload
            return {
                cart: state.cart.map(cartItem => cartItem.id === product.id ? product : cartItem),
                total: state.total - product.price
            }
        }
        case 'INCREASE_QUANTITY_CART': {
            const { product } = action.payload
            return {
                cart: state.cart.map(cartItem => cartItem.id === product.id ? product : cartItem),
                total: state.total + product.price
            }
        }
        case 'REMOVE_ALL': {
            return {
                total: 0,
                cart: []
            }
        }
        case 'UPDATE_TOTAL': {
            return {
                ...state,
                total: action.payload.total
            }
        }
        default:
            return state
    }
}