import React from 'react'
import { Container, Row, Col } from 'react-grid-system';
import {ReactComponent as PhoneIcon} from '../../assets/svg/phone-solid.svg'
import {ReactComponent as FacebookIcon} from '../../assets/svg/facebook-f-brands.svg'
import {ReactComponent as InstaIcon} from '../../assets/svg/instagram-brands.svg'
import { 
    Wrapper,
    Header,
    PhoneWrapper,
    SocialWrapper,
    SocialLink
 } from './Footer.styles';


const Footer = () => {

  return (
    <Wrapper>
        <Header>
            Контакти
        </Header>
        <Container>
            <Row>
                <Col
                    xs={8}
                    offset={{xs: 2}}
                >
                    <PhoneWrapper href='#'>
                        <PhoneIcon />
                        <span>099-012-1234</span>
                    </PhoneWrapper>
                    <PhoneWrapper href='#'>
                        <PhoneIcon />
                        <span>096-321-9876</span>
                    </PhoneWrapper>

                    <SocialWrapper>
                        <SocialLink href="https://facebook.com">
                            <FacebookIcon />
                        </SocialLink>
                        <SocialLink href="https://instagram.com">
                            <InstaIcon />
                        </SocialLink>
                    </SocialWrapper>

                </Col>
            </Row>
        </Container>

    </Wrapper>
  )
}

export default Footer