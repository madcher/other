import React, {useState} from 'react';

const Cart = ({handleClose, cartProducts, rate, setCartProducts}) => {
	const isCartEmpty = cartProducts.length === 0;

	const addOne = (productName) => {
		const newCartProducts = [...cartProducts];
		newCartProducts.forEach((el) => {
			if (el.name === productName) {
				if (el.basketAmount < el.amount) {
					el.basketAmount = el.basketAmount + 1;
				}
			}
		});
		setCartProducts(newCartProducts);
	};

	const minusOne = (productName) => {
		const newCartProducts = [...cartProducts];
		newCartProducts.forEach((el) => {
			if (el.name === productName) {
				if (el.basketAmount > 1) {
					el.basketAmount = el.basketAmount - 1;
				}
			}
		});
		setCartProducts(newCartProducts);
	};

	const deleteItem = (productName) => {
		const newCartProducts = cartProducts.filter((el) => el.name !== productName);
		setCartProducts(newCartProducts);
	};

	const modalClickHandler = (e) => {
		e.stopPropagation();
	};


	return (
		<>
			<div className="modal__background">
			</div>
			<div className="modal__wrapper" onClick={handleClose}>
				<div className="modal" onClick={modalClickHandler}>
					<div className="modal__title">Корзина</div>
					{isCartEmpty && <div className="cart__empty"> Ваша корзина пуста </div>}
					{
						cartProducts.map(({name, basketAmount, amount, price}) => {
							return (
								<div className="modal__product" key={name}>
									<div className="modal__product-name">{name}</div>
									<div className="modal__count">
										<div onClick={() => minusOne(name)}>-</div>
										<div>{basketAmount}</div>
										<div onClick={() => addOne(name)}>+</div>
									</div>
									<div className="modal__product-amount">{(price * basketAmount * rate.newRate).toFixed(2)}</div>
									<div className="cart__delete" onClick={() => deleteItem(name)}>удалить</div>
								</div>
							);
						})
					}
					<div className="modal__footer">
						<button
							disabled={isCartEmpty}
							className="button button--primary"
							onClick={handleClose}>
							Перейти к оформлению
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

export default Cart;
