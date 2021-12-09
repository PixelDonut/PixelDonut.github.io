import { header } from '../../portfolio'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = ({ language, theme, setTheme, setLanguage }) => {
    const { homepage, title } = header

    return (
        <header className='header center'>
            <h3>
                {homepage ? (
                    <a href={homepage} className='link'>
                        {title}
                    </a>
                ) : (
                    title
                )}
            </h3>
            <Navbar language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />
        </header>
    )
}

export default Header