import React, {useState} from 'react';
import Product from './Product';
import ArrowDown from '../icons/ArrowDown';
import ArrowUp from '../icons/ArrowUp';

const Card = ({
	groupName,
	products,
	handleAddToCart,
	cartProducts,
	rate,
}) => {
	const [isRolledUp, setRolledUp] = useState(false);
	return (
		<div className="card">
			<div className="card__title" onClick={() => setRolledUp(!isRolledUp)}>
				<div> {groupName}</div>
				<div>
					{ isRolledUp ? <ArrowDown /> : <ArrowUp />}
				</div>
			</div>
			{
				!isRolledUp && <div className="card__content">
					{products.map(({name, amount, price, id}) =>
						<Product
							key={id}
							name={name}
							amount={amount}
							price={price}
							handleAddToCart={handleAddToCart}
							cartProducts={cartProducts}
							rate={rate}
						/>
					)}
				</div>
			}
		</div>
	);
};

export default Card;
