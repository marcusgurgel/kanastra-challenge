import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home, List, Upload, NotFound, Header, Layout, NoMatch } from './components';



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <Layout/> }>
        <Route index element={< Home />} />
        <Route path='/home' element={< Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/list" element={<List />} />
        <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)