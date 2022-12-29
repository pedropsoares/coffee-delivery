import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

export function DefaltLayout() {

  return (
    <LayoutContainer> 
      <h2>Header</h2>
      <Outlet />
    </LayoutContainer>
  )
}