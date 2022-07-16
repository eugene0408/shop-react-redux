import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';

import { 
  selectCategoriesList,
  selectGoodsList,
  selectCategoriesStatus,
  selectCategoriesError, 
  selectGoodsStatus,
  selectGoodsError,
  selectPopularGoods
 } from '../../store/selectors';

import CategoryCircle from '../../components/CategoryCircle/CategoryCircle';
import GoodCard from '../../components/GoodCard/GoodCard';

import { PageContainer} from '../pages.style';
import {goodsGrid, GoodCol} from '../gridSettings';

import MoutainsImg from '../../assets/images/mountains.jpg'

import { 
  AboutText, 
  AboutImage,
  SectionHeader,
  ColCard 
} from './IndexPage.styles';

const IndexPage = () => {

  const categories = useSelector(selectCategoriesList)
  const goods = useSelector(selectGoodsList)
  const categoriesStatus = useSelector(selectCategoriesStatus)
  const categoriesError = useSelector(selectCategoriesError)
  const goodsStatus = useSelector(selectGoodsStatus)
  const goodsError = useSelector(selectGoodsError)
  const popularGoods = useSelector(selectPopularGoods)

  return (

      <PageContainer>
        <Container>
          <SectionHeader>
            Оберіть категорію
          </SectionHeader>

          {categoriesStatus === 'loading' && 
            <p>Завантаження...</p>
          }

          {categoriesStatus === 'rejected' && 
            <h3>{categoriesError}</h3>
          }

          {categoriesStatus === 'resolved' && 
             <Row justify='center'>
             {
               categories.map(category => (
                 <Col
                   key={category.label}
                   xs={6} md={4} lg={1.8} xxl={1.5}   
                 >
                   <CategoryCircle
                     image={category.image}
                     title={category.label}
                     value={category.value}
                   />
                 </Col>
               ))
             }
             </Row>
          }
   


          <SectionHeader>
            Популярні товари
          </SectionHeader>


          {goodsStatus === 'loading' && 
            <p>Завантаження...</p>
          }

          {goodsStatus === 'rejected' && 
            <h3>{goodsError}</h3>
          }

          {goodsStatus === 'resolved' && 
            
            <Row>
              {
                popularGoods.map(good => (
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
            
          }
          

          <SectionHeader>
            Про нас
          </SectionHeader>

          <Row align='center'>
            <Col 
              xs={12} md={6} 
              order={{xs: 2, md: 1}}
            >
              <AboutImage image={MoutainsImg} />
            </Col>

            <Col 
              xs={12} md={6} 
              order={{xs: 1, md: 2}}
            >
              <AboutText>
                Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Продолжил своих имени всеми злых рукописи грамматики запятой пор ведущими по всей прямо алфавит большой страна щеке которой пустился, инициал осталось.
                За текстов если, языкового продолжил океана, рыбного эта рекламных семь несколько на берегу которой не языком заглавных выйти запятых коварный бросил переулка она моей осталось? Рот жизни безопасную буквоград лучше ipsum!
                Проектах взгляд то осталось наш океана которое там это его меня послушавшись. Рекламных заголовок дорогу продолжил своего агентство дал lorem, жаренные решила даже моей однажды, по всей семантика одна текст предупреждал.
              </AboutText>
            </Col>
          </Row>
        </Container>
      </PageContainer>   

  )
}

export default IndexPage