import React from 'react'
// import {BrowserRouter,Routes, Route,Link} from 'react-router-dom'
import {Header,Topics,Blog,Info,Navbar, Footer} from './components'

const App = () => {
  return (             
 <>

{/* <div  className='App'>
 <BrowserRouter>
<Routes>
  <Route path='/' element={<Header/>}/>
  <Route path='/Header' element={<Info/>}/>
</Routes>

 </BrowserRouter>

  </div>  */}
   <Header/>
   <Info/>
   <Blog/>
   <Navbar/>
   <Topics/>
   <Footer/>
   </>
  )
}

export default App
