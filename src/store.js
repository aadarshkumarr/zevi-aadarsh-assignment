import create from 'zustand';
import { getProducts } from './api';

const useCommonStore = create((set) => ({
  searchTerm: '',
  products: [],
  filteredProducts: [],
  setSearchTerm: (searchTerm) => set((state) => (state.searchTerm = searchTerm)),
  fetchData: async function () {
    const data = await getProducts();
    set((state) => (state.products = data));
  },
  filter: {
    priceFilter: [],
    brandsFilter: [],
    ratingsFilter: [],
  },

  setFilter: (filterObj) => set((state) => (state.filter = { ...state.filter, ...filterObj })),

  performGlobalFilter: function () {
    set((state) => {
      state.filteredProducts = [];

      // check for checking result after each filter
      let filterApplied = false;

      // default array of products
      let oldProducts = state.products;

      // brandsFilter
      if (state.filter.brandsFilter.length) {
        oldProducts.forEach((item) => {
          if (state.filter.brandsFilter.includes(item.brand)) {
            state.filteredProducts = [...state.filteredProducts, item];
          }
        });
        filterApplied = true;
      }

      // checking after each filter,to validate next chain of filter on ready results
      if (filterApplied && state.filteredProducts.length === 0) {
        state.filteredProducts = null;
        return;
      }

      // price filter
      if (state.filter.priceFilter.length) {
        oldProducts = state.filteredProducts.length === 0 ? state.products : state.filteredProducts;

        let productsFilterPrice_Brand = [];

        for (let i = 0; i < state.filter.priceFilter.length; i += 2) {
          oldProducts.forEach((item) => {
            if (
              item.price >= state.filter.priceFilter[i] &&
              item.price <= state.filter.priceFilter[i + 1]
            ) {
              productsFilterPrice_Brand.push(item);
            }
          });
        }
        state.filteredProducts = productsFilterPrice_Brand;
        filterApplied = true;
      }

      if (filterApplied && state.filteredProducts.length === 0) {
        state.filteredProducts = null;
        return;
      }

      // Ratings filter
      if (state.filter.ratingsFilter.length) {
        oldProducts = state.filteredProducts.length === 0 ? state.products : state.filteredProducts;
        let productsFilterPrice_Brand_Rating = oldProducts.filter((item) =>
          state.filter.ratingsFilter.includes(+item.rating),
        );

        state.filteredProducts = productsFilterPrice_Brand_Rating;
        filterApplied = true;
      }

      if (filterApplied && state.filteredProducts.length === 0) {
        state.filteredProducts = null;
        return;
      }
    });
  },
}));

export default useCommonStore;
