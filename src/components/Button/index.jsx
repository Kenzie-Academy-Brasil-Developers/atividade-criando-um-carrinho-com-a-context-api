import { useContext } from 'react'
import { CartContext } from '../../providers/cart'
import { CatalogueContext } from '../../providers/catalogue'

const Button = ({ type, item }) => {
	const { cart, addToCart, removeFromCart } = useContext(CartContext)
	const { catalogue, addToCatalogue, removeFromCatalogue } =
		useContext(CatalogueContext)

	const text = type === 'catalogue' ? 'Add To Cart' : 'Remove From Cart'

	const HandleClick = () => {
		if (type === 'catalogue') {
			removeFromCatalogue(item)
			addToCart(item)
		} else {
			removeFromCart(item)
			addToCatalogue(item)
		}
	}

	return <button onClick={HandleClick}>{text}</button>
}

export default Button
