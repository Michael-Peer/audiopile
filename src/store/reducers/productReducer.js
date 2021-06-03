const INITIAL_STATE = {
    products: []
}

export function productReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_PRODUCTS  ':
            return {
                ...state,
                products: action.payload.products
            }

        default:
            return state
    }
}