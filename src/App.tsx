import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { LoadEditor } from "./views/loadEditor/loadEditor"
import './index.css'
import { ToastContainer } from "react-toastify"
import { Table } from "./views/chooseTable/table/table"
import { ModuleRegistry, AllCommunityModule, InfiniteRowModelModule } from 'ag-grid-community';
import { ChooseTable } from "./views/chooseTable/chooseTable"
import { Login } from "./views/auth/login/login"
import { LayoutWithNavbar } from "./components/layoutNavBar"

function App() {

  ModuleRegistry.registerModules([AllCommunityModule, InfiniteRowModelModule]);
  return (
    <BrowserRouter>
    <div className="flex h-screen bg-gray-50">
      <ToastContainer/>

        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<LayoutWithNavbar />}>

            <Route path="/" element={<LoadEditor />} />
            <Route path="/choosetable" element={<ChooseTable />} />
            <Route path="/table/:tableName" element={<Table />} />

            <Route path="*" element={<Navigate to="/" replace />} />
            
          </Route>

        </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
