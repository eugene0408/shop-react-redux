import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row, Col } from 'react-grid-system'

import GoodCard from '../../components/GoodCard/GoodCard'
import { MenuIcons } from '../../components/CatalogMenu/CatalogMenu.icons'
import { PageContainer } from '../pages.style'
import { 
  Header, 
  HeaderTitle
} from './CategoryPage.styles'

const CategoryPage = () => {
    const categories = useSelector(state => state.goods.categories)
    const filteredGoods = useSelector(state => state.goods.filteredGoods)
    const curCategory = useSelector(state => state.goods.curCategory)

    const categoryName = () => (
        categories.find(category => category.value === curCategory).label
    )

  return (
    <PageContainer>
        <Header>
            <MenuIcons name={curCategory}/>
            <HeaderTitle>
                {categoryName()}
            </HeaderTitle>
        </Header>

        <Container>
        <Row style={{marginTop: '2rem'}}>
        {
            filteredGoods.map(good => (
              <Col 
                xs={6} md={4} lg={3} xl={2}
                key={good.articul}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  padding: '10px',
                  position: 'relative'
                }}
              >
                <GoodCard      
                  title={good.name}
                  image={good.image}
                  articul={good.articul}
                  price={good.price}
                  size={good.size}
                />
              </Col>
            ))
          }
        </Row>
      </Container>
    </PageContainer>
  )
}

export default CategoryPage