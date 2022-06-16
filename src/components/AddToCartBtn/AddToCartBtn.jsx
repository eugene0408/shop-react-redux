import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { addToCart } from '../../store/goodsSlice';

import { ReactComponent as CartIcon} from '../../assets/svg/cart.svg'

import {
    Button,
    IconWrapper,
    IconAmount
} from './AddToCartBtn.styles'

const AddToCartBtn = ({articul}) => {

    const dispatch = useDispatch();
    const cart = useSelector(state => state.goods.cart)

    const buttonClickHandler = (e) => {   
        let id = e.currentTarget.value
        dispatch(addToCart({id}))
    }


  return (
    <Button
        value={articul}
        onClick={(e) => buttonClickHandler(e)}
    >   
        <IconWrapper>
            {cart[articul] >= 1 &&
                <IconAmount>
                    {
                        cart[articul] >= 99 ? "99" : cart[articul]
                    }
                </IconAmount>
            }
            <CartIcon />
        </IconWrapper>
        у кошик
    </Button>
  )
}

export default AddToCartBtn