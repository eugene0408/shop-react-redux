import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';

import { PageContainer } from '../pages.style.js';
import AddToCartBtn from '../../components/AddToCartBtn/AddToCartBtn.jsx';
import {
	GoodImage,
	GoodTitle,
	GoodDescription,
	GoodPriceWrapper,
	GoodPrice,
	GoodSize,
	ButtonContainer
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

				<GoodPriceWrapper>
					<GoodSize>
						{good.size}
					</GoodSize>
					<GoodPrice>
						{good.price}
					</GoodPrice>
				</GoodPriceWrapper>

				<ButtonContainer>
					<AddToCartBtn
						articul={goodId}
					/>
				</ButtonContainer>
			
			</Container>
		</PageContainer>

		)
}

export default GoodPage