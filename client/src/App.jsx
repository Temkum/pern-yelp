import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './routes/Home'
import UpdateRestaurant from './routes/UpdateRestaurant'
import RestaurantDetails from './routes/RestaurantDetails'
import './App.css'
import { RestaurantContextProvider } from './context/RestaurantContext'


const App = () => {

  return (
    <RestaurantContextProvider>
    <div>
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Home/>} />
            <Route path='/restaurants/:id/update' element={<UpdateRestaurant/>} />
            <Route path='/restaurants/:id' element={<RestaurantDetails/>} />
        </Routes>
      </BrowserRouter>
    </div>
    </RestaurantContextProvider>
  )
}

export default App