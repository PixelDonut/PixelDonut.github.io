import { skills } from '../../portfolio'
import './Skills.css'

const Skills = ({ language }) => {
    if (!skills.length) return null

    return (
        <section className='section skills' id='skills'>
            <h2 className='section__title'>{language === 'nl' ? 'Vaardigheden' : 'Skills'}</h2>
            <ul className='skills__list'>
                {skills.map((skill, key) => (
                    <li key={key} className='skills__list-item btn btn--plain'>
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Skills