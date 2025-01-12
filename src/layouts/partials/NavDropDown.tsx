import React, { useState } from "react";

const NavDropDown = ({ menu, pathname }: { menu: any; pathname: any }) => {
  const [showContent, setShowContent] = useState(false);

  const handleChildMenuClick = () => {
    setShowContent(!showContent);
  };
  return (
    <li className="nav-item nav-dropdown group max-lg:bg-theme-light">
      <div
        className={`inline-flex items-center nav-link ${
          (pathname === `${menu.url}/` || pathname === menu.url) && "active"
        }`}
      >
        <a href={menu.url} className={`fill-current`}>
          {menu.name}
        </a>
        <svg
          className="h-4 w-4 fill-current cursor-pointer"
          viewBox="0 0 20 20"
          onClick={handleChildMenuClick}
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
      <ul className={`nav-dropdown-list ${showContent && "max-lg:block"}`}>
        {menu.children?.map((child: any, index: number) => (
          <li key={index} className="nav-dropdown-item">
            <a
              href={child.url}
              aria-label={child.name}
              className={`nav-dropdown-link block ${
                (pathname === `${child.url}/` || pathname === child.url) &&
                "active"
              }`}
            >
              {child.name}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default NavDropDown;
