import { Suspense, lazy } from 'react'
import { Router } from './Router'
import { Route } from './Route'

import SearchPage from './pages/Search'
import Page404 from './pages/404'

const LazyAboutPage = lazy(()=>import('./pages/About'))
const LazyHomePage = lazy(()=>import('./pages/Home'))


import './App.css'


const appRoutes = [
  {
    path: '/:lang/about',
    Component: LazyAboutPage
  },  
  {
    path: '/:lang/',
    Component: LazyHomePage
  },
  {
    path: '/search/:query',
    Component: SearchPage 
  }
]

function App() {
  

  return (
    <main>
      <Suspense fallback={null}>
      <Router routes={appRoutes} defaultComponent={Page404}>
        <Route path='/' Component={LazyHomePage} />
        <Route path='/about' Component={LazyAboutPage} />
      </Router>
      </Suspense>
      
    </main>
    
  )
}

export default App
