import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { changeCategory } from '../../store/categoriesSlice'

import { 
    Wrapper,
    Image,
    Title
 } from './CategoryCircle.styles'

const Category = ({
    image,
    title,
    value
}) => {
    const dispatch = useDispatch()

    const changeCategoryHandler = (e) => {
        let category = e.currentTarget.dataset.value;
        dispatch(changeCategory({category}));
      }


  return (
    <Wrapper
        data-value={value}
        onClick={e => changeCategoryHandler(e)}
    >
        <Link to={`/categories/${value}`}>
            <Image image={image} />
            <Title>
                {title}
            </Title>
        </Link>
    </Wrapper>
  )
}

export default Category