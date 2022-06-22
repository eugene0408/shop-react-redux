import React from 'react'
import {Link} from 'react-router-dom'
import { Button } from '../Button.style'
import { 
    Content, 
    Orange, 
    Wrapper, 
    Text 
} from './EmptyCart.style'


const EmptyCart = ({text}) => {
  return (
    <Wrapper>
        <Content>
            <Orange> : </Orange>
            <span> ( </span>
        </Content>
        <Text>
            {text}
        </Text>
        
        <Link to={'/'}>
          <Button>
            На Головну
          </Button>
        </Link>

    </Wrapper>
  ) 
}

export default EmptyCart