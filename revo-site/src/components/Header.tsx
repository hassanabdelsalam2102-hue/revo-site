
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="sticky top-0 bg-bg/80 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between">
        <Link to="/" className="font-bold text-xl">REVO</Link>
        <div className="space-x-6">
          <Link to="/services">Services</Link>
          <Link to="/contact" className="bg-gradient-to-r from-accent to-accent2 text-black px-4 py-2 rounded-lg">Book a Call</Link>
        </div>
      </div>
    </header>
  )
}
