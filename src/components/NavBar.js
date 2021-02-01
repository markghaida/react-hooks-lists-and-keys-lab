import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const menuLinks = links.map((link, index) => {
    console.log(link);
    return <a href={`#${link}`} key={index}>{link} </a>
  })
  console.log(menuLinks)
  return( 
  <nav>
    {menuLinks}
  </nav>
  )
}

export default NavBar;
