import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk(
    'goods/fetchData',
    async function(fileName, {rejectWithValue}){
        try{
            const response = await fetch(`data/${fileName}.json`); 
        
            if(!response.ok){
                throw new Error(`Помилка завантаження файлу ${fileName}.json`)
            }
            const data = await response.json();
            return {fileName, data};

        } catch (error) {
            return rejectWithValue(error.messege);
        } 
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
        [fetchData.pending]: (state) => {
            state.status = 'loading'
            state.error = null
        },


        [fetchData.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state[action.payload.fileName] = action.payload.data
        },

        [fetchData.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
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