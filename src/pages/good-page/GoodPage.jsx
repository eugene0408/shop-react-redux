import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';

import { PageContainer } from '../pages.style.js';
import {
	GoodImage,
	GoodTitle,
	GoodDescription,
	GoodPrice
} from './GoodPage.style.js'
import { Container } from 'react-grid-system';


const GoodPage = () => {

	const {goodId} = useParams();
	const goods = useSelector(state => state.goods.goods)

	const good = goods.find(good => good.articul === goodId)

	return (
		<PageContainer>
			<Container>
				<GoodImage image={good.image} />

				<GoodTitle>
					{good.name}
				</GoodTitle>

				<GoodDescription>
					{good.description}
				</GoodDescription>

				<GoodPrice>
					{good.price}
				</GoodPrice>
			</Container>
		</PageContainer>

		)
}

export default GoodPage