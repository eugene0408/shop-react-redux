import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories, fetchGoods } from './store/goodsSlice';
import { Routes, Route, useParams } from 'react-router-dom';
// Layout
import Layout from './layout/Layout';
// Pages
import IndexPage from './pages/index-page/IndexPage';
import CategoryPage from './pages/category-page/CategoryPage';
import Cart from './pages/cart/Cart';
import GoodPage from './pages/good-page/GoodPage';

function App() {
  const {category, goodId} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchGoods());
  }, [])


  return (
    <div className="App">

      <Routes>
        <Route 
          path='/'
          element={<Layout />}
        >

          <Route index
            element={<IndexPage />}
          />

          <Route path='cart'
            element={<Cart />}
          />

          <Route path='categories/:category' 
            element={<CategoryPage/>}
          />

          <Route path='products/:goodId'
            element={<GoodPage />}
          />
          
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
