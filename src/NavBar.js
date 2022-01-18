import { useEffect, useState } from 'react';
import './NavBar.css';
import Netflix_Title_Banner from "./Netflix_Title_Banner_logo.svg";


const NavBar = () => {
    const navBarList = [
      {id: 0, element: "Home"},
      {id: 1, element: "TV Shows"},
      {id: 2, element: "Movies"},
    ];

    const [backgroundClasses, setBackgroundClasses] = useState("navBar no-background");
    useEffect(() => {
        let lastKnownScrollPosition;
        document.addEventListener('scroll', () => {
            lastKnownScrollPosition = window.scrollY;
            if(lastKnownScrollPosition < 30) {
                setBackgroundClasses("navBar no-background-color");
            } else {
                setBackgroundClasses("navBar background-color");
            }
        });
    }, []);

    return (
      <nav className={backgroundClasses}>
        <img src={Netflix_Title_Banner} alt='Netflix Banner Logo' height={100} width={100}/>
        <ul>
          { navBarList.map((listItem) => (<li key={listItem.id}>{listItem.element}</li>)) }
        </ul>
      </nav>
    );
};

export default NavBar;

