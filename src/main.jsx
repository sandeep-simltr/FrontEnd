import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  RouterProvider,
  Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import Service from './pages/service.jsx'

import ServiceDeatails from './component/servicesPage/ServiceDeatails.jsx';
import UseCasePage from './pages/UseCasesPage.jsx'
import Careers from './pages/Careers.jsx' 
import Contact from './pages/Contact.jsx'
import NewsMedia from './pages/NewsMedia.jsx'
import chatBot from './component/chatBot/ChatBotWidget.jsx'


const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
    <Route path ="" element={<HomePage/>}/>
    <Route path ="/aboutus" element={<AboutUs/>}/>
    <Route path ="/services" element={<Service/>}>

    <Route path ="/services/:serviceName" element={<ServiceDeatails/>}/>
    </Route>
    <Route path="/usecases" element={<UseCasePage />} /> 
    <Route path="/careers" element={<Careers />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/newsmedia" element={<NewsMedia />} />
    {/* <Route path="/chatBot" element={<ChatBotWidget/>} /> */}
    
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
