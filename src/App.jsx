
import Navbar from './components/NavbarSimple'
import Footer from './components/footer'
import Landing from './landing-page/Landing'
import Preloader from './preloader/Preloader'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import MyComponent from './information/Information'
import EligibilityPage from './health and care/Health-Care'
import Slider from './slider/Slider'
import Registration from './register/Registration'
import Eligibility from './elegibility/Elegibility'
import Contactus from './contact us/Contact'
// import Contact from './contact us/Contact.jsx'


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar />  <Preloader /><Landing /></>
    },
    {
      path: "/information",
      element: <><Navbar /><MyComponent /></>
    },
    {
      path: "/h&c",
      element: <><Navbar /><EligibilityPage /></>
    },
    {
      path: "/slider",
      element: <><Navbar /><Slider /></>
    }, 
    {
      path: "/register",
      element: <><Navbar /><Registration /></>
    }, 
    {
      path: "/elegibility",
      element: <><Navbar /><Eligibility/></>
    },
    {
      path: "/contactus",
      element: <><Navbar /><Contactus/></>
    },
  ])
  return (
    <>
    {/* <Preloader /> */}
  {/* <Navbar>
  </Navbar> */}
    {/* <Landing>
    </Landing> */}
    {/* <MyComponent />
  <EligibilityPage>

  </EligibilityPage>
  <Slider>
    
  </Slider>
     */}
    <RouterProvider router={router} />
    <Footer>
    </Footer>
  
    </>
  )
}

export default App