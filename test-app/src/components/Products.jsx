import React from 'react';
import data from '../data/data';
import {getProductTree} from '../utils';
import Card from './Card';
const Products = ({
	handleAddToCart,
	cartProducts,
	rate,
}) => {
	const groupsTree = getProductTree(data);
	return (
		<div className="app__content">
			{
				Object.keys(groupsTree).map((group) =>
					<Card
						groupName={group}
						key={group}
						products={groupsTree[group]}
						handleAddToCart={handleAddToCart}
						cartProducts={cartProducts}
						rate={rate}
					/>)
			}
		</div>
	);
};

export default Products;
