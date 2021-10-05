import './App.css'
import { CatalogueProvider } from './providers/catalogue'
import { CartProvider } from './providers/cart'
import ProductList from './components/ProductList'

function App() {
	return (
		<main className='App'>
			<CatalogueProvider>
				<CartProvider>
					<ProductList type='catalogue' />
					<ProductList type='cart' />
				</CartProvider>
			</CatalogueProvider>
		</main>
	)
}

export default App
