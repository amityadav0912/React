import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import User from './components/User/User'
import Contact from './components/Contact/Contact'
import GitHub, {githubInfoLoader} from './components/Github/Github'
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter((
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userId' element={<User />} />
      <Route loader={githubInfoLoader} path='github' element={<GitHub />} />
    </Route>
  )
));

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router}/>
  </StrictMode>,
)
