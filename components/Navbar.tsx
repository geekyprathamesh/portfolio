import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useState } from "react";

const NavItem:FunctionComponent<{
    activeItem: string,
    setActiveItem: Function,
    name: string,
    route: string,
}> = ({activeItem,name, route, setActiveItem}) => {
    return(
        activeItem !== name ? (
            <Link href={route}>
              <span onClick={() => setActiveItem(name)} id="navitems">{name}</span>
            </Link>
          ): null
    )
}

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const {pathname} = useRouter();

  useEffect(() => {
    if(pathname === '/') setActiveItem('About')
    if(pathname === '/projects') setActiveItem('Projects')
    if(pathname === '/resume') setActiveItem('Resume')
  }, [])
  return (
    <div className="flex justify-between mx-3 px-5 py-3 my-3">
      <span className="text-xl border-b-4 font-bold text-sky-800 md:text-2xl border-sky-600">{activeItem}</span>
      <div className="text-lg font-medium flex space-x-5">
        <NavItem activeItem={activeItem} name="About" route="/" setActiveItem={setActiveItem} />
        <NavItem activeItem={activeItem} name="Projects" route="/projects" setActiveItem={setActiveItem} />
        <NavItem activeItem={activeItem} name="Resume" route="/resume" setActiveItem={setActiveItem} />
      </div>
    </div>
  );
};

export default Navbar;
