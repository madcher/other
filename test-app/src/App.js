import './App.css';
import React, {useState, useEffect} from 'react';
import Products from './components/Products';
import CartIcon from './icons/CartIcon';
import {getRate} from './utils';
import Cart from './components/Cart';

function App() {
	const [isCartOpen, setCartOpen] = useState(false);
	const [rate, setRate] = useState({
		newRate: 60,
		oldRate: null,
	});
	const [cartProducts, setCartProducts] = useState([]);

	// добавляем таймер с изменением цены
	useEffect(() => {
		const timer = setInterval(() =>
			setRate(rate => ({oldRate: rate.newRate, newRate: getRate()})), 15000)
	}, []);

	// добавляем товар в корзину
	const handleAddToCart = (cartItem) => {
		const newCartProducts = [];
		// обрабатываем случай, когда пытаются добавить товар, который есть в корзине
		cartProducts.forEach((el) => {
			if (el.name !== cartItem.name) {
				newCartProducts.push(el);
			}
		});
		newCartProducts.push(cartItem);
		setCartProducts(newCartProducts);
	};

	// получаем общую цену корзины
	const getCartItemsPrice = () => {
		let price = 0;
		cartProducts.forEach((el) => {
			price += el.basketAmount * el.price * rate.newRate;
		});
		return price.toFixed(2);
	};

	return (
		<div className="app">
			{ isCartOpen && <Cart
				handleClose={() => setCartOpen(false) }
				cartProducts={cartProducts}
				rate={rate}
				setCartProducts={setCartProducts}
			/>}
			<header className="app__header" >
				<div className="app__title">
					<div>TEST APP </div>
					<div className="app__rate">{`1$ = ${rate.newRate} р.`}</div>
				</div>
				<div className="cart" onClick={() => setCartOpen(true)}>
					{cartProducts.length ?
						<div className="cart__count">{`${getCartItemsPrice()} р. (${cartProducts.length})`}</div>
						: null}
					<CartIcon />
				</div>
			</header>
			<Products
				handleAddToCart={handleAddToCart}
				cartProducts={cartProducts}
				rate={rate}
			/>
		</div>
	);
}

export default App;
