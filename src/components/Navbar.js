import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Navbar() {
  const navRef = useRef();

  const showMenu = () => {
    navRef.current.classList.toggle("responsiveNav");
  };
  return (
    <header>
      <h4>DIANA NDINDA</h4>
      <nav ref={navRef}>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Blogs</li>
            <li>Contact</li>
          <button className="navBtn navCloseBtn" onClick={showMenu}>
            <FaTimes />
          </button>
      </nav>
      <button className="navBtn" onClick={showMenu}>
        <GiHamburgerMenu />
      </button>
    </header>
  );
}

export default Navbar;
