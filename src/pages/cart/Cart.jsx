import React from 'react'
import { useEffect } from 'react'
import {Container, Row, Col} from 'react-grid-system'
import { useSelector } from 'react-redux'
import CartCard from '../../components/CartCard/CartCard'
import { TotalLabel } from '../../components/CartCard/CartCard.styles'
import { PageContainer } from '../pages.style'
import { 
  CartHeader, 
  TotalValue, 
  TotalWrapper, 
} from './Cart.styles'


const Cart = () => {
  const goods = useSelector(state => state.goods.goods)
  const cart = useSelector(state => state.goods.cart)

  // Return array of goods objects which are in cart
  const goodsInCart = () => {
    let list = []

    Object.keys(cart).forEach(key => {
      list.push(goods.find(good => good.articul === key))
    })

    return list;
  }

  
  const totalPrice = () => {
    let total = 0;

    goodsInCart().forEach(good => {
      total += cart[good.articul] * good.price
    })

    return total;
  }

  return (
    <PageContainer>
      <CartHeader>
        Товари у кошику
      </CartHeader>

      <Container>
        <Row>
          {goodsInCart().map(good => (
              <Col
              key={good.articul}
              xs={12}
              >
                <CartCard 
                  image={good.image}
                  title={good.name}
                  price={good.price}
                  articul={good.articul}
                  amount={cart[good.articul]}
                />

              </Col>
            ))}                 
        </Row>
      </Container>

      <Container>
        <TotalWrapper>
          <TotalLabel>Сума:</TotalLabel>
          <TotalValue>
            {totalPrice()}
          </TotalValue>
        </TotalWrapper>
      </Container>

    </PageContainer>
  )
}

export default Cart