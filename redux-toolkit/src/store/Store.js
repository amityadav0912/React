import react from 'react'

import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../features/todo/toDoSlice'

export const store = configureStore({
    reducer: todoReducer
})