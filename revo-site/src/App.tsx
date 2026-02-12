
import { Routes, Route } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  )
}
