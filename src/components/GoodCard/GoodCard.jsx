import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../store/goodsSlice'
import { ReactComponent as CartIcon} from '../../assets/svg/cart.svg'
// Styles
import { 
    CardWrapper,
    CardImage,
    CardContent,
    Title,
    Price,
    CardButton,
    IconWrapper,
    IconAmount, 
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
    const dispatch = useDispatch();
    const cart = useSelector(state => state.goods.cart)

    const buttonClickHandler = (e) => {   
        e.stopPropagation();
        let id = e.currentTarget.value
        dispatch(addToCart({id}))
    }

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
    

            <CardButton
                value={articul}
                onClick={(e) => buttonClickHandler(e)}
            >   
                <IconWrapper>
                    {cart[articul] >= 1 &&
                        <IconAmount>
                            {
                                cart[articul] >= 99 ? "99" : cart[articul]
                            }
                        </IconAmount>
                    }
                    <CartIcon />
                </IconWrapper>
                у кошик
            </CardButton>
        </CardContent>
        
        {/* link to description page */}
        <Link to={`/products/${articul}`}>
            <LinkArea />
        </Link>

    </CardWrapper>

    )
}

export default GoodCard