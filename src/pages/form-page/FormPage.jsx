import React from 'react'
import { Container, Row, Col } from 'react-grid-system'
import { PageContainer } from '../pages.style'
import {Button} from '../../components/Button.style'
import { ButtonWrapper, Input, Label, TextArea } from './FormPage.style'


const FormPage = () => {
  return (
    <PageContainer>
        <Container style={{marginTop: "4rem"}}>
            <Row justify='center'>
                <Col
                    xs={12} md={6} xl={4}
                >
                    <Label>
                        Імя
                    </Label>
                    <Input 
                        type={'text'}
                    />
           
                    <Label>
                        Прізвище
                    </Label>
                    <Input
                        type={'text'}
                     />
               
                    <Label>
                        Номер телефону
                    </Label>
                    <Input
                        type={'tel'}
                     />

                    <Label>
                        E-mail
                    </Label>
                    <Input
                        type={'mail'}
                     />

                    <Label>
                        Адреса
                    </Label>
                    <TextArea />

                    <ButtonWrapper>
                        <Button>
                            Оформити замовлення
                        </Button>
                    </ButtonWrapper>
                </Col>
            </Row>
        </Container>



    </PageContainer>
  )
}

export default FormPage