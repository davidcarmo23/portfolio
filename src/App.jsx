import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { NotFound } from "./pages/NotFound"
import { Analytics } from "@vercel/analytics/react"
import { useEffect } from "react"
import i18n from "./i18n"

function App() {
  useEffect(() => {
    i18n.changeLanguage(navigator.language);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </>
  )
}

export default App
