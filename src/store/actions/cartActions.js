

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
