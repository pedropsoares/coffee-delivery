import { Route, Routes } from "react-router-dom";
import { DefaltLayout } from "./layouts/DefaltLayout";
import { CompleteOrder } from "./pages/CompleteOrder";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaltLayout />}>

      <Route path="/" element={<Home />} />
      <Route path="/completeOrder" element={<CompleteOrder />} />
      </Route>
    </Routes>
  )
}