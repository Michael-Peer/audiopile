

export function addToCart(product) {
    return async dispatch => {
        const action = {
            type: 'ADD_TO_CART',
            payload: {
                product
            }
        }
        dispatch(action)
    }
}



export function decreaseQuantity(product) {
    return async dispatch => {
        const action = {
            type: 'DECREASE_QUANTITY_CART',
            payload: {
                product
            }
        }
        dispatch(action)
    }
}

export function increaseQuantity(product) {
    return async dispatch => {
        const action = {
            type: 'INCREASE_QUANTITY_CART',
            payload: {
                product
            }
        }
        dispatch(action)
    }
}

export function removeAllFromCart() {
    return async dispatch => {
        const action = {
            type: 'REMOVE_ALL',
            payload: {

            }
        }
        dispatch(action)
    }
}

export function updateTotal(total) {
    return async dispatch => {
        const action = {
            type: 'UPDATE_TOTAL',
            payload: {
                total
            }
        }
        dispatch(action)
    }
}


