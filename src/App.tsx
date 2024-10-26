import { BrowserRouter as Router, Routes } from "react-router-dom"
import { Toaster } from "sonner"
import { Suspense } from "react"

import { Loading } from "./pages/loading"
import { renderRoutes } from "./routes/render";
import { routes } from "./routes/routes";


function App() {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Toaster position="bottom-center" />
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </Router>
  )
}

export default App
