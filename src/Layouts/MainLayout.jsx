import { Outlet } from "react-router-dom"
import NavbarMain from "../components/NavbarMain"

function MainLayout() {
  return (
    <div>
      <NavbarMain/>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default MainLayout
