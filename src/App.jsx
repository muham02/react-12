import { Route, Routes } from "react-router-dom"
import Nav from "./nav/Nav"
import Product from "./product/Product"
import User from "./user/User"


function App() {

  return (
   <>
<Routes>
 <Route path="/"element={<Nav/>}>
 <Route path="/admin/product" element={<Product/>}/>
  <Route path="/admin/user" element={<User/>}/>
 </Route>


</Routes>
    </>
  )
}

export default App
