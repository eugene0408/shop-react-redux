import React from 'react'
import { useDispatch } from 'react-redux'
// Actions
import { addAmount, reduceAmount, removeItem } from '../../store/goodsSlice'
// Icons
import {ReactComponent as DownIcon} from '../../assets/svg/down-arrow.svg'
import {ReactComponent as UpIcon} from '../../assets/svg/up-arrow.svg'
import {ReactComponent as XIcon} from '../../assets/svg/xmark-solid.svg'
// Styles
import { 
    CardWrapper,
    CardImage,
    ContentWrapper,
    TitleWrapper,
    Title,
    Price,
    AmountWrapper,
    AmountButton,
    TotalWrapper,
    TotalLabel,
    TotalPrice,
    DeleteButton
 } from './CartCard.styles'

const CartCard = ({
  image,
  title,
  price,
  amount,
  articul
}) => {

  const dispatch = useDispatch();

  return (
    <CardWrapper>

      <CardImage image={image} />

      <ContentWrapper>

        <TitleWrapper>
          <Title>
            {title}
          </Title>
          <Price>
            {price}
          </Price>
        </TitleWrapper>

        <AmountWrapper>
          <AmountButton
            value={articul}
            onClick={e => dispatch(addAmount({id: e.currentTarget.value}))}
          >
            <UpIcon />
          </AmountButton>
            {amount}
          <AmountButton
            value={articul}
            onClick={e => dispatch(reduceAmount({id: e.currentTarget.value}))}
          >
            <DownIcon />
          </AmountButton>
        </AmountWrapper>

        <TotalWrapper>
          <TotalLabel>
            Всього:
          </TotalLabel>
          <TotalPrice>
            {amount * price}
          </TotalPrice>
        </TotalWrapper>

        <DeleteButton
          value={articul}
          onClick={e => dispatch(removeItem({id: e.currentTarget.value}))}
        >
          <XIcon />
        </DeleteButton>
      </ContentWrapper>

    </CardWrapper>

  )
}

export default CartCard