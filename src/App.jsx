import { Route, Routes } from "react-router-dom"
import { Landing } from "./Pages/Landing"
import { Admin } from "./Pages/Admin"
import { SuperAdmin } from "./Pages/Super-Admin"
import { Login } from "./Pages/Auth/Login"

function App() {

  return (
    <Routes>
      <Route path="/*" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/Super-admin/*" element={<SuperAdmin />} />
    </Routes>
  )
}

export default App
