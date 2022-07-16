import React from 'react'
import { useSelector } from 'react-redux'
import { Container, Row } from 'react-grid-system'

import { 
  selectCategoriesList,
  selectCurCategory,
  selectGoodsByCategory
} from '../../store/selectors'

import GoodCard from '../../components/GoodCard/GoodCard'
import { MenuIcons } from '../../components/CatalogMenu/CatalogMenu.icons'
import { PageContainer } from '../pages.style'
import {goodsGrid, GoodCol} from '../gridSettings'
import { 
  Header, 
  HeaderTitle
} from './CategoryPage.styles'

const CategoryPage = () => {
    const categories = useSelector(selectCategoriesList)
    const filteredGoods = useSelector(selectGoodsByCategory)
    const curCategory = useSelector(selectCurCategory)

    console.log(curCategory)

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

        <Container

        >
        <Row style={{marginTop: '2rem'}}>
        {
            filteredGoods.map(good => (
              <GoodCol
                key={good.articul}
                {...goodsGrid}
              >
                <GoodCard      
                  title={good.name}
                  image={good.image}
                  articul={good.articul}
                  price={good.price}
                  size={good.size}
                />
              </GoodCol>
            ))
          }
        </Row>
      </Container>
    </PageContainer>
  )
}

export default CategoryPage