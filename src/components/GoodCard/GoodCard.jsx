import React from 'react'
import { Link } from 'react-router-dom'
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
                </Size>
                <Price>
                    {price}
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