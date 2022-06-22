import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-grid-system'
import { useSelector } from 'react-redux'
import CartCard from '../../components/CartCard/CartCard'
import { TotalLabel } from '../../components/CartCard/CartCard.styles'
import EmptyCart from '../../components/EmptyCart/EmptyCart'
import { PageContainer } from '../pages.style'
import { Button } from '../../components/Button.style'
import { 
  CartHeader, 
  TotalValue, 
  TotalWrapper, 
  SubmitBtnWrapper, 
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

    {goodsInCart().length >= 1 &&
      <>
        <CartHeader>
          Товари у кошику
        </CartHeader>

        <Container>
          <Row>
            {goodsInCart().map(good => (
                <Col
                key={good.articul}
                xs={12} md={10} lg={8} xl={6}
                offset={{md: 1, lg: 2, xl: 3}}
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
          <Row>
            <Col
              md={11} lg={10} xl={9}
            >
              <TotalWrapper>
                <TotalLabel>Сума:</TotalLabel>
                <TotalValue>
                  {totalPrice()}
                </TotalValue>
              </TotalWrapper>
            </Col>
          </Row>
        </Container>

        <Container>
          <SubmitBtnWrapper>
            <Link to={'/form'}>
              <Button>
                Оформити замовлення
              </Button>
            </Link>
          </SubmitBtnWrapper>
        </Container>
      </>
    }

    {goodsInCart().length < 1 &&
      <EmptyCart
        text={'Кошик Порожній'}
      />
    }


    </PageContainer>
  )
}

export default Cart