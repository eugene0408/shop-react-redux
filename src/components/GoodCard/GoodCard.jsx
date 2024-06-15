import React from 'react'
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom'
import { useCurrencyConverter } from '../../hooks/useCurrencyConverter';
// Button
import AddToCartBtn from '../AddToCartBtn/AddToCartBtn';

// Styles
import { 
    CardWrapper,
    CardImage,
    CardContent,
    Title,
    Price,
    LinkArea,
    PriceWrapper,
    Size
} from './GoodCard.styles'


const GoodCard = ({
    image,
    title,
    price,
    size,
    articul
}) => {

    const {t} = useTranslation();
    const { convertCurrency } = useCurrencyConverter();
    const convertedPrice = convertCurrency(price).toFixed(2);

    return (

    <CardWrapper>


        <CardImage image={image}/>

        <CardContent>
            <Title>
                {title}
            </Title>

            <PriceWrapper>
                <Size>
                    {size}
                    <span>{t(`labels.measureSize`)}</span> 
                </Size>
                <Price>
                    {convertedPrice}
                    <span>{t(`labels.currency`)}</span>
                </Price>
            </PriceWrapper>
    
            <AddToCartBtn 
                articul={articul}
            />
        </CardContent>
        
        {/* link to description page */}
        <Link to={`/products/${articul}`}>
            <LinkArea />
        </Link>

    </CardWrapper>

    )
}

export default GoodCard