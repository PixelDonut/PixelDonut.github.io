import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'
import { useEffect, useState } from 'react'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [language, setLanguage] = useState(localStorage.getItem('language') || 'en');

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language, setLanguage]);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme, setTheme])

  return (
    <div id='top' className={`${theme} app`}>
      <Header language={language} setLanguage={setLanguage} theme={theme} setTheme={setTheme} />

      <main>
        <About language={language} />
        <Projects language={language} />
        <Skills language={language} />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer language={language} />
    </div>
  )
}

export default App