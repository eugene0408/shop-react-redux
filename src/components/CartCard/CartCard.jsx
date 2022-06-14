import React from 'react'

import { useDispatch } from 'react-redux'
import { addAmount, reduceAmount, removeItem } from '../../store/goodsSlice'

import {ReactComponent as DownIcon} from '../../assets/svg/down-arrow.svg'
import {ReactComponent as UpIcon} from '../../assets/svg/up-arrow.svg'
import {ReactComponent as XIcon} from '../../assets/svg/xmark-solid.svg'

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

  const addAmountHandler = (e) => {
    const id = e.currentTarget.value;
    dispatch(addAmount({id}))
  }
  const reduceAmountHandler = (e) => {
    const id = e.currentTarget.value;
    dispatch(reduceAmount({id}))
  }

  const removeItemHandler = (e) => {
    const id = e.currentTarget.value;
    dispatch(removeItem({id}))
  }


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
            onClick={e => addAmountHandler(e)}
          >
            <UpIcon />
          </AmountButton>
            {amount}
          <AmountButton
            value={articul}
            onClick={e => reduceAmountHandler(e)}
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
          onClick={e => removeItemHandler(e)}
        >
          <XIcon />
        </DeleteButton>
      </ContentWrapper>

    </CardWrapper>

  )
}

export default CartCard