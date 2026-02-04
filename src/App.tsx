import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoadEditor } from "./views/loadEditor/loadEditor"
import './index.css'

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoadEditor />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
