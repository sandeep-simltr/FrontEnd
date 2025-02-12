import { useState } from "react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logoWayAhead.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close menu on outside click
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-light-black shadow-md fixed w-full z-20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <img src={logo} alt="WaysAhead Logo" width={100} height={200} className="h-10" />
        <div className="flex items-center">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md mr-4">Login</button>
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            <Menu size={28} className="text-black" />
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="absolute right-4 bg-red-100 border-4 shadow-lg p-4 rounded-md mt-2" role="menu">
          <ul className="space-y-2">
            <li><NavLink to="/" className={({isActive})=>`block px-4 py-2 hover:bg-gray-100 "${isActive ? "bg-red-500" : "bg-gray-100"}`}>Home</NavLink></li>
            <li><NavLink to="/aboutus" className={({isActive})=>`block px-4 py-2 hover:bg-gray-100 "${isActive ? "bg-red-500" : "bg-gray-100"}`}> AboutUs </NavLink></li>
            <li><NavLink to="/services" className={({isActive})=>`block px-4 py-2 hover:bg-gray-100 "${isActive ? "bg-red-500" : "bg-gray-100"}`}>Services</NavLink></li>
            <li><NavLink to="/usecases" className={({isActive})=>`block px-4 py-2 hover:bg-gray-100 "${isActive ? "bg-red-500" : "bg-gray-100"}`}>UseCases</NavLink></li>
            <li><NavLink to="/careers" className={({isActive})=>`block px-4 py-2 hover:bg-gray-100 "${isActive ? "bg-red-500" : "bg-gray-100"}`}>Careers</NavLink></li>
            <li><NavLink to="/contact" className={({isActive})=>`block px-4 py-2 hover:bg-gray-100 "${isActive ? "bg-red-500" : "bg-gray-100"}`}>Contact</NavLink></li>
            <li><NavLink to="/newsmedia" className={({isActive})=>`block px-4 py-2 hover:bg-gray-100 "${isActive ? "bg-red-500" : "bg-gray-100"}`}>News and Media</NavLink></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
