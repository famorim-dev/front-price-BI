import { BrowserRouter, Route, Routes } from "react-router-dom"
import { LoadEditor } from "./views/loadEditor/loadEditor"
import './index.css'
import { NavBar } from "./components/navBar"
import { ToastContainer } from "react-toastify"
import { Table } from "./views/chooseTable/table/table"
import { ModuleRegistry, AllCommunityModule, InfiniteRowModelModule } from 'ag-grid-community';
import { ChooseTable } from "./views/chooseTable/chooseTable"

function App() {
  localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZlbGlwZS5hbW9yaW1AcHJpY2VtZXQuY29tLmJyIiwiaWF0IjoxNzcwODExNjAzLCJleHAiOjE3NzA4NTQ4MDN9.vY72ehnuyKE1zVop3vLlymjRjfWAqcmksiqZpKojChk");

  
  ModuleRegistry.registerModules([AllCommunityModule, InfiniteRowModelModule]);
  return (
    <BrowserRouter>
    <div className="flex h-screen bg-gray-50">
      <NavBar/>
      <ToastContainer/>
        <Routes>
            <Route path="/" element={<LoadEditor />} />
            <Route path="/choosetable" element={<ChooseTable />} />
            <Route path="/table/:tableName" element={<Table />} />
        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
