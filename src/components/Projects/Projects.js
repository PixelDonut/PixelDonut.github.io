import { projects } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = ({ language }) => {
    if (!projects.length) return null

    return (
        <section id='projects' className='section projects'>
            <h2 className='section__title'>{language === 'nl' ? 'Projecten' : 'Projects'}</h2>

            <div className='projects__grid'>
                {projects.map((project, key) => (
                    <ProjectContainer key={key} project={project} language={language} />
                ))}
            </div>
        </section>
    )
}

export default Projects;