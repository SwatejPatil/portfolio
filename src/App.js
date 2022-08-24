import Portfolio from "./Portfolio"
import Home from "./pages/pages/Home"
import Contact from "./pages/pages/Contact"
import Projects from "./pages/pages/Projects"
import Publications from "./pages/pages/Publications"
import Blogs from "./pages/pages/Blogs"
import Books from "./pages/pages/Books"
import SidePanel from "./pages/pages/SidePanel"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Portfolio />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/books" element={<Books />} />
          <Route path="/publications" element={<Publications />} />
        </Routes>
        <div className="sidePanel">
        <SidePanel />
        </div>
        
      </div>
    </>
  )
}

export default App
