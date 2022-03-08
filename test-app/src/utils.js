import names from './data/names.json';
import * as consts from './const';

export const getProductTree = (data) => {
	if (!data) {
		return {};
	}

	const goods = data.Value.Goods;
	const groupsTree = {};
	goods.forEach((product) => {
		// get product group name
		const group = product[consts.GROUP_NAME];
		const productGroupName = names[group][consts.GROUP_NAME];
		if (!groupsTree[productGroupName]) {
			groupsTree[productGroupName] = [];
		}
		const id = product[consts.PRODUCT_ID];
		// product values
		const amount = product[consts.PRODUCT_AMOUNT];
		const name = names[group][consts.PRODUCT_DICT][id][consts.PRODUCT_NAME];
		const price = product[consts.PRODUCT_PRICE];

		groupsTree[productGroupName].push({
			name,
			amount,
			price,
			id,
		});
	});
	return groupsTree;
};

export const getRate = () => {
	const newRate = Math.random() * (80 - 20) + 20;
	return newRate.toFixed(2);
};
