import {useParams} from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

import { selectCategoriesList } from '../../store/selectors.js';

import { Col, Container, Row } from 'react-grid-system';

import {useCurrencyConverter} from "../../hooks/useCurrencyConverter.jsx"

import { PageContainer } from '../pages.style.js';
import {goodsGrid, GoodCol} from '../gridSettings';

import CategoryCircle from '../../components/CategoryCircle/CategoryCircle';
import GoodCard from '../../components/GoodCard/GoodCard';
import GoodDescrBtn from '../../components/GoodDescrBtn/GoodDescrBtn.jsx';
import {
	GoodImage,
	GoodTitle, 
	GoodDescription,
	GoodPriceWrapper,
	GoodPrice,
	GoodSize,
	ButtonContainer,
	Header
} from './GoodPage.style.js'


const GoodPage = () => {
	const {t} = useTranslation();
	const {convertCurrency} = useCurrencyConverter()
	const {goodId} = useParams();
	const categories = useSelector(selectCategoriesList);
	// All goods list
	const goods = useSelector(state => state.goods.goods)
	// Current good that will be displayed
	const good = goods.find(good => good.articul === goodId)
	// Goods of similar category list
	const similarCategoryGoods = goods.filter(item => item.category === good.category)
	// Price in usd or hrn depending on which language is choosen
	const convertedPrice = convertCurrency(good.price).toFixed(2);

	// Get random goods of similar category
	const getRandomGoodsOfCategory = (items, currentItem, count = 4) => {

		const filteredItems = items.filter(item => item !== currentItem);
		const shuffledItems = filteredItems.sort(() => Math.random() - 0.5);

		return shuffledItems.slice(0, count);
	}

	const similarGoods = getRandomGoodsOfCategory(similarCategoryGoods, good)

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
								<span>{t(`labels.measureSize`)}</span>
							</GoodSize>
							<GoodPrice>
								{convertedPrice}
								<span>{t(`labels.currency`)}</span>
							</GoodPrice>
						</GoodPriceWrapper>

					</Col>

					<Col xs={12}>
						<ButtonContainer>
							<GoodDescrBtn
								articul={goodId}
							/>
						</ButtonContainer>
					</Col>
				</Row>	

				{/* ======================= Similar goods ==========================*/}
				{similarGoods.length > 0 &&
					<Row justify='center' style={{marginTop: '4rem'}}>
						<Col xs={12}>			
							<Header>{t(`headers.similar`)}</Header>
						</Col>
						{similarGoods.map(good => (
							<GoodCol
								key={good.articul}
								{...goodsGrid}
							>
								<GoodCard      
								title={t(`goods.${good.articul}.name`)}
								image={good.image}
								articul={good.articul}
								price={good.price}
								size={good.size}
								/>
							</GoodCol>
							))
						}
					</Row>
				}

				
				{/* ======================= Categories ==========================*/}
				<Row justify='center' style={{marginTop: "5rem"}}>

					<Col xs={12}>			
						<Header>{t(`headers.categories`)}</Header>
					</Col>

					{
					categories.map(category => (
						<Col
						key={category.value}
						xs={6} md={4} lg={1.8} xxl={1.5}   
						>
						<CategoryCircle
							image={category.image}
							value={category.value}
						/>
						</Col>
					))
					}
				</Row>
			</Container>
		</PageContainer>

		)
}

export default GoodPage