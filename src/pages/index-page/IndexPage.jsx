import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Col } from 'react-grid-system';
import CategoryCircle from '../../components/CategoryCircle/CategoryCircle';
import GoodCard from '../../components/GoodCard/GoodCard';
import { PageContainer } from '../pages.style';
import { 
  AboutText, 
  SectionHeader,
  ColCard 
} from './IndexPage.styles';

const IndexPage = () => {

  const categories = useSelector(state => state.goods.categories)
  const goods = useSelector(state => state.goods.goods)
  const popularGoods = goods.filter(good => good.popular)

  
  return (

      <PageContainer>
        <Container>
          <SectionHeader>
            Оберіть категорію
          </SectionHeader>
          <Row justify='center'>
          {
            categories.map(category => (
              <Col
                key={category.label}
                xs={6} md={4} lg={2} xl={1.8} xxl={1.3}   
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


          <SectionHeader>
            Популярні товари
          </SectionHeader>

          <Row>
            {
              popularGoods.map(good => (
                <ColCard 
                  xs={6} md={4} lg={3} xl={2}
                  key={good.articul}
                >
                  <GoodCard      
                    title={good.name}
                    image={good.image}
                    articul={good.articul}
                    price={good.price}
                    size={good.size}
                  />
                </ColCard>
              ))
            }
          </Row>
          

          <SectionHeader>
            Про нас
          </SectionHeader>

          <Row>
            <Col xs={12}>
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