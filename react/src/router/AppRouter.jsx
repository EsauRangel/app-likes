import { BrowserRouter, Route, Routes } from "react-router-dom"
import Tasks from "../views/TasksScreen"

export const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Tasks />}/>
         </Routes>
    </BrowserRouter>
  )
}
