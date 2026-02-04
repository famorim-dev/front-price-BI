import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoadEditor } from "./views/loadEditor/loadEditor"
import './index.css'
import { NavBar } from "./components/navBar"
import { ToastContainer } from "react-toastify"

function App() {
  localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZlbGlwZS5hbW9yaW1AcHJpY2VtZXQuY29tLmJyIiwiaWF0IjoxNzcwMjI2NjE2LCJleHAiOjE3NzAyNjk4MTZ9.x4AamyRuK-zIxSmUmF5DVSRc0lrXtsxgy9YdC4EFK54");
  return (
    <BrowserRouter>
    <div className="flex h-screen bg-gray-50">
      <NavBar/>
      <ToastContainer/>
        <Routes>
            <Route path="/" element={<LoadEditor />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
