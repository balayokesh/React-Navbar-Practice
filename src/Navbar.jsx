import { useState } from 'react';

// Import stylesheets
import './Styles/Navbar.css';

// Import images
import lightBulbRegular from './Images/lightbulb-regular.svg';

export default function NavBar(props) {

    const [darkTheme, setDarkTheme] = useState(0);

    const handleThemeChange = () => {
        (darkTheme === 0) ? setDarkTheme(1) : setDarkTheme(0);
    }

    if (darkTheme === 1) {
        return (
            <>
                <header id='navbar-dark'>
                    <img src={props.logo} alt={props.alt} />
                    <h1>{props.title}</h1>
                    <img src={lightBulbRegular} onClick={handleThemeChange} alt='lightmode' />
                </header>
            </>
        );
    }
    return (
        <>
            <header id='header'>
                <div id='navbar'>
                    <img src={props.logo} alt={props.alt} />
                    <h1>{props.title}</h1>
                    <img src={lightBulbRegular} onClick={handleThemeChange} alt='darkmode' />
                </div>
            </header>
        </>
    );
}