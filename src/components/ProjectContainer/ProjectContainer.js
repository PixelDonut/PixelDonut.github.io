import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'

const ProjectContainer = ({ project, language }) => (
    <div className='project'>
        <h3>{language === 'nl' ? project.name[0] : project.name[1]}</h3>

        <p className='project__description'>{language === 'nl' ? project.description[0] : project.description[1]}</p>
        {project.stack && (
            <ul className='project__stack'>
                {project.stack.map((item, key) => (
                    <li key={key} className='project__stack-item'>
                        {item}
                    </li>
                ))}
            </ul>
        )}

        {project.sourceCode && (
            <a
                href={project.sourceCode}
                aria-label='source code'
                className='link link--icon'
            >
                <GitHubIcon />
            </a>
        )}

        {project.livePreview && (
            <a
                href={project.livePreview}
                aria-label='live preview'
                className='link link--icon'
            >
                <LaunchIcon />
            </a>
        )}
    </div>
)

export default ProjectContainer