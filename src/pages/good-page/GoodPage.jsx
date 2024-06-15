import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

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
import { Col, Container, Row } from 'react-grid-system';


const GoodPage = () => {
	const {t} = useTranslation();
	const {goodId} = useParams();
	const goods = useSelector(state => state.goods.goods)

	const good = goods.find(good => good.articul === goodId)

	return (
		<PageContainer>
			<Container>
				<Row>
					<Col xs={12} md={8} lg={6}
						offset={{md: 2, lg: 3}}
					>
						<GoodImage image={good.image} />
					</Col>

					<Col xs={12} md={8} lg={6}
						offset={{md: 2, lg: 3}}
					>
						<GoodTitle>
							{t(`goods.${good.articul}.name`)}
						</GoodTitle>

						<GoodDescription>
							{t(`goods.${good.articul}.description`)}
						</GoodDescription>

						<GoodPriceWrapper>
							<GoodSize>
								{good.size}
							</GoodSize>
							<GoodPrice>
								{good.price}
							</GoodPrice>
						</GoodPriceWrapper>

					</Col>

					<Col xs={12}>
						<ButtonContainer>
							<AddToCartBtn
								articul={goodId}
								btnSize={'large'}
							/>
						</ButtonContainer>
					</Col>
				</Row>	
			</Container>
		</PageContainer>

		)
}

export default GoodPage