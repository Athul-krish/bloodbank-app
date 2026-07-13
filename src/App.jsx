import { BrowserRouter, Route, Routes } from "react-router-dom"
import AddDonor from "./components/AddDonor"
import ViewDonor from "./components/ViewDonor"


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddDonor/>}/>
      <Route path="/add" element={<AddDonor/>}/>
      <Route path="/view" element={<ViewDonor/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
