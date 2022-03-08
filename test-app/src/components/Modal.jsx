import React, {useState} from 'react';

const Modal = ({handleClose, name, amount, price, handleAddToCart, rate}) => {
	const [basketAmount, setBasketAmount] = useState(1);

	const addOne = () => {
		if (basketAmount < amount) {
			setBasketAmount(basketAmount + 1);
		}
	};

	const minusOne = () => {
		if (basketAmount > 1) {
			setBasketAmount(basketAmount - 1);
		}
	};

	const modalClickHandler = (e) => {
		e.stopPropagation();
	};

	const addToCard = () => {
		const product ={
			name,
			price,
			basketAmount,
			amount,
		};
		handleAddToCart(product);
		handleClose();
	};

	return (
		<>
			<div className="modal__background">
			</div>
			<div className="modal__wrapper" onClick={handleClose}>
				<div className="modal" onClick={modalClickHandler}>
					<div className="modal__title">Добавление товара в корзину</div>
					<div className="modal__product">
						<div>{name}</div>
						<div className="modal__count">
							<div onClick={minusOne}>-</div>
							<div>{basketAmount}</div>
							<div onClick={addOne}>+</div>
						</div>
						<div>{(price * basketAmount * rate.newRate).toFixed(2)}</div>
					</div>
					<div className="modal__footer">
						<button
							className="button button--primary"
							onClick={addToCard}>
							Добавить
						</button>
						<button className="button" onClick={handleClose}>
							Отмена
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Modal;
