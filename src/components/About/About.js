import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = ({ language }) => {
    const { name, role, description, resume, social } = about

    return (
        <div className='about center'>
            <img src='./images/user.png' className='about__icon' alt='Marts Profile' />
            {name && (
                <h1>
                    {language === 'nl'
                        ? <p>Hoi, ik ben <span className="about__name">{name}.</span></p>
                        : <p>Hi, I am <span className="about__name">{name}.</span></p>}
                </h1>
            )}

            {role && language === 'nl'
                ? <h2 className='about__role'>Een {role[0]}.</h2>
                : <h2 className='about__role'>A {role[1]}.</h2>
            }

            <p className='about__desc'>{description && language === 'nl'
                ? description[0]
                : description[1]
            }</p>

            <div className='about__contact center'>
                {resume && (
                    <a href={resume}>
                        <span type='button' className='btn btn--outline'>
                            {language === 'nl' ? 'CV' : 'Resume'}
                        </span>
                    </a>
                )}

                {social && (
                    <>
                        {social.github && (
                            <a
                                href={social.github}
                                aria-label='github'
                                className='link link--icon'
                            >
                                <GitHubIcon />
                            </a>
                        )}

                        {social.linkedin && (
                            <a
                                href={social.linkedin}
                                aria-label='linkedin'
                                className='link link--icon'
                            >
                                <LinkedInIcon />
                            </a>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}

export default About