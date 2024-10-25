import { BrowserRouter as Router, Routes } from "react-router-dom"
import { Toaster } from "sonner"
import { Suspense } from "react"

import { Loading } from "./pages/loading"
import { useTheme } from "./components/theme-provider";
import { renderRoutes } from "./routes/render";
import { routes } from "./routes/routes";


function App() {
  const { theme } = useTheme();
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Toaster position="bottom-center" theme={theme == "dark" ? "light" : "dark"} />
        <Routes>{renderRoutes(routes)}</Routes>
      </Suspense>
    </Router>
  )
}

export default App
