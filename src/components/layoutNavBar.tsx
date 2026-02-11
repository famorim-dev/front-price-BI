import { Outlet } from "react-router-dom"
import { NavBar } from "./navBar"

export function LayoutWithNavbar() {
  return (
    <div className="flex h-full w-full bg-gray-50">
      <NavBar />

      <Outlet/>
    </div>
  )
}
