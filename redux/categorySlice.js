// redux/categorySlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { pageCategories } from '../components/utils/controller';

// Thunk untuk mengambil data kategori dari API
export const fetchCategories = createAsyncThunk('category/fetchCategories', async () => {
  const response = await pageCategories();
  return response;
});

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.loading = false;
      })
      .addCase(fetchCategories.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default categorySlice.reducer;
