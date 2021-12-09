import './Footer.css'

const Footer = ({ language }) => (
    <footer className='footer'>
        <a
            href='https://github.com/MartvW/'
            className='link footer__link'
        >
            {language === 'nl' ? 'Gemaakt Door' : 'Created By'} Mart Van Weeghel
        </a>
    </footer>
)

export default Footer