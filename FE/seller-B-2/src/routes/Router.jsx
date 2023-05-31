import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Main, Entry} from '../pages/index';

function Router() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Entry />} />
      <Route path='/main' element={<Main />} />


    </Routes>
    </BrowserRouter>
  )
}

export default Router