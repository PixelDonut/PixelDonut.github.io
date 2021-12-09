import { useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { projects, skills, contact } from '../../portfolio'
import './Navbar.css'

const Navbar = ({ language, setLanguage, theme, setTheme }) => {
    const [showNavList, setShowNavList] = useState(false)

    const toggleNavList = () => setShowNavList(!showNavList)

    return (
        <nav className='center nav'>
            <ul
                style={{ display: showNavList ? 'flex' : null }}
                className='nav__list'
            >
                {projects.length ? (
                    <li className='nav__list-item'>
                        <a
                            href='#projects'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            {language === 'nl' ? 'Projecten' : 'Projects'}
                        </a>
                    </li>
                ) : null}

                {skills.length ? (
                    <li className='nav__list-item'>
                        <a
                            href='#skills'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >

                            {language === 'nl' ? 'Vaardigheden' : 'Skills'}
                        </a>
                    </li>
                ) : null}

                {contact.email ? (
                    <li className='nav__list-item'>
                        <a
                            href='#contact'
                            onClick={toggleNavList}
                            className='link link--nav'
                        >
                            Contact
                        </a>
                    </li>
                ) : null}
            </ul>

            <button
                type='button'
                onClick={() => { theme === 'dark' ? setTheme('light') : setTheme('dark') }}
                className='btn btn--icon nav__theme'
                aria-label='toggle theme'
            >
                {theme === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
            </button>

            <select
                className='btn nav__theme'
                onChange={(e) => setLanguage(e.target.value)}
                aria-label='toggle language'
                defaultValue={localStorage.getItem('language')}
            >
                <option value='nl'>🇳🇱 Nederlands</option>
                <option value='en'>🇬🇧 English</option>
            </select>

            <button
                type='button'
                onClick={toggleNavList}
                className='btn btn--icon nav__hamburger'
                aria-label='toggle navigation'
            >
                {showNavList ? <CloseIcon /> : <MenuIcon />}
            </button>
        </nav>
    )
}

export default Navbar