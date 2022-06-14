import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { changeCategory } from '../../store/goodsSlice';

import {ReactComponent as CaretIcon} from '../../assets/svg/caret.svg';
import { MenuIcons } from './CatalogMenu.icons';
import { 
    MenuButton, 
    MenuList, 
    MenuWrapper, 
    MenuListItem
} from './CatalogMenu.styles';

const CatalogMenu = () => {

const [expanded, setExpanded] = useState(false);

const dispatch = useDispatch()
const menuItems = useSelector(state => state.goods.categories)

const menuItemClickHandler = (e) => {
  const category = e.currentTarget.dataset.value;
  dispatch(changeCategory({category}));
  setExpanded(!expanded);
}

  return (
    <MenuWrapper>
        <MenuButton
            onClick={()=> setExpanded(!expanded)}
        >
            Каталог
            <CaretIcon/>

        </MenuButton>
        {expanded &&
            <MenuList>
                { menuItems.map(item => (
                    <MenuListItem
                        key={item.label}
                        data-value={item.value}
                        onClick={e => menuItemClickHandler(e)}
                    >
                        <Link to={`/categories/${item.value}`}>
                            <MenuIcons name={item.value}/>
                            {item.label}
                        </Link>
                    </MenuListItem>
                ))}
            </MenuList>
        }
    </MenuWrapper>
  )
}

export default CatalogMenu