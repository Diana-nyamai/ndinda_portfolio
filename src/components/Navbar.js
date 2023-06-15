import React, { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

function Navbar() {
  const lists = [
    {
      navItem: "Home",
      navLink: "/",
    },
    {
      navItem: "About",
      navLink: "/About",
    },
    {
      navItem: "Projects",
      navLink: "/Projects",
    },
    {
      navItem: "Blogs",
      navLink: "/Blogs",
    },
    {
      navItem: "contact",
      navLink: "Contact",
    },
  ];
  const navRef = useRef();

  const showMenu = () => {
    navRef.current.classList.toggle("responsiveNav");
  };
  return (
    <header>
      <h4>DIANA NDINDA</h4>
      <nav ref={navRef}>
        {lists.map((list, index) => {
          return (
            <li key={index}>
              <NavLink to={list.navLink} exact onClick={showMenu}>
                {list.navItem}
              </NavLink>
            </li>
          );
        })}

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
