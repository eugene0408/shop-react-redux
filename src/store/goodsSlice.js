import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGoods = createAsyncThunk(
    'goods/fetchGoods',
    async function(){
        const response = await fetch('data/goods.json');
        const data = await response.json();
        return data;
    }
)

export const fetchCategories = createAsyncThunk(
    'goods/fetchCategories',
    async function(){
        const response = await fetch('data/categories.json');
        const data = await response.json();
        return data;
    }
)



const goodsSlice = createSlice({
    name: 'goods',
    initialState: {
        goods: [],
        filteredGoods: [],
        categories: [],
        curCategory: 'none',
        cart: {},
        status: null,
        error: null
    },
    reducers: {
        changeCategory: (state, action) => {
            state.curCategory = action.payload.category;
            state.filteredGoods = state.goods.filter(good => good.category === state.curCategory)
        },
        addToCart: (state, action) => {
            if(state.cart[action.payload.id] == undefined){
                state.cart[action.payload.id] = 1
            }else{
                state.cart[action.payload.id]++
            }
        },
        addAmount: (state, action) => {
            state.cart[action.payload.id]++
        },
        reduceAmount: (state, action) => {
            if(state.cart[action.payload.id] <= 1){
                state.cart[action.payload.id] = 1
            }else{
                state.cart[action.payload.id]--
            }
        },
        removeItem: (state, action) => {
          delete state.cart[action.payload.id]
        }
       
    },
    extraReducers: {
        [fetchGoods.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },
        [fetchGoods.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.goods = action.payload
        },
        [fetchGoods.rejected]: (state, action) => {

        },
        [fetchCategories.fulfilled]: (state, action) => {
            state.categories = action.payload
        },
    }
});

export const {
    changeCategory,
    addToCart,
    addAmount,
    reduceAmount,
    removeItem
} = goodsSlice.actions;
export default goodsSlice.reducer;