import React, {useState} from 'react';
import Modal from './Modal';

const Product = ({
	name,
	amount,
	price,
	handleAddToCart,
	cartProducts,
	rate,
}) => {
	const [isModalOpen, setModalOpen] = useState(false);

	const modalHandleClose = () => {
		setModalOpen(false);
	};

	const productInCart = cartProducts.find((el) => el.name === name);
	let availableAmount = amount;
	let cartIcon = null;
	if (productInCart) {
		cartIcon = '🛒 ';
		availableAmount = amount - productInCart.basketAmount;
	}

	let amountColor = 'black';


	if (rate.oldRate) {
		amountColor = rate.newRate > rate.oldRate ? '#f43' : '#66ab3c';
	}

	return (
		<>
			{isModalOpen &&
				<Modal
					handleClose={modalHandleClose}
					name={name}
					amount={amount}
					price={price}
					handleAddToCart={handleAddToCart}
					rate={rate}
				/>}
			<div className="product" onClick={() => setModalOpen(true)}>
				<div>
					{`${name} (${availableAmount})`}
				</div>
				<div style={{color: amountColor}}>
					{cartIcon}{(price * rate.newRate).toFixed(2)}
				</div>
			</div>
		</>
	);
};

export default Product;
