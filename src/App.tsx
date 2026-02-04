import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoadEditor } from "./views/loadEditor/loadEditor"
import './index.css'
import { NavBar } from "./components/navBar"

function App() {

  return (
    <BrowserRouter>
    <div className="flex h-screen bg-gray-50">
      <NavBar/>
        <Routes>
            <Route path="/" element={<LoadEditor />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
