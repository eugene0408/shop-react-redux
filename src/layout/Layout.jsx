import {Link, Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { 
    ToplineContainer,
    ToplineNav,
    ToplineWrapper,
    CartAmount,
    SelectContainer,
    SelectWrapper,
    CartButtonWrapper
 } from './Layout.styles'
 import CatalogMenu from '../components/CatalogMenu/CatalogMenu'
 import Footer from '../components/Footer/Footer'

 import {ReactComponent as CartIcon} from '../assets/svg/cart.svg'

const Layout = ()=> {

    const cart = useSelector(state => state.goods.cart)

    const cartAmount = () => {
        let amount = 0;
        for(let num in cart){
            amount += cart[num]
        }
        return amount;
    }
 
    return(
        <>
            <ToplineWrapper>
                <ToplineContainer>
                    <ToplineNav>

                        <Link to={'/'}>
                            Home
                        </Link>

                        <Link to={"cart"}>
                            <CartButtonWrapper>
                                {Object.keys(cart).length >= 1 && 
                                    <CartAmount>
                                        {cartAmount() >= 99 ? "99" : cartAmount()}
                                    </CartAmount>
                                }
                                <CartIcon style={{height: "25px"}}/>
                            </CartButtonWrapper>
                        </Link>

                    </ToplineNav>
                </ToplineContainer>
            </ToplineWrapper>

            <SelectWrapper>
                <SelectContainer>
                    <CatalogMenu />
                </SelectContainer>
            </SelectWrapper>


            <Outlet />

        
            <Footer />
        </>

    )
}

export default Layout