import { configureStore } from '@reduxjs/toolkit'
import  dataSlice  from './slices';

export const store = configureStore({                      // creating redux store.
  reducer: {
      showData : dataSlice 
    },
});

