
import { productService } from '../../services/productService'

export function loadProducts(category) {
    return async dispatch => {
        const products = await category ? productService.getByCategory(category) : productService.query()
        const action = {
            type: 'SET_PRODUCTS',
            payload: {
                products: products
            }
        }
        dispatch(action)
    }
}
