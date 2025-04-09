import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./router.jsx"

createRoot(document.getElementById(`root`)).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
// 6 min
// https://www.youtube.com/watch?v=E4Ha35zDngk
