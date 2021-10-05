import Button from '../Button'
import { useContext } from 'react'
import { CatalogueContext } from '../../providers/catalogue'
import { CartContext } from '../../providers/cart'

const ProductList = ({ type }) => {
	const { catalogue } = useContext(CatalogueContext)
	const { cart } = useContext(CartContext)

	return (
		<ul>
			{type === 'catalogue' &&
				catalogue.map((item, key) => {
					return (
						<li key={key}>
							{item.name} <Button type={type} item={item} />
						</li>
					)
				})}

			{type === 'cart' &&
				cart.map((item, key) => {
					return (
						<li key={key}>
							{item.name} <Button type={type} item={item} />
						</li>
					)
				})}
		</ul>
	)
}

export default ProductList
