const getAge = (d1, d2) => {
    d2 = d2 || new Date();
    var diff = d2.getTime() - d1.getTime();
    return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
}

const header = {
    homepage: 'https://martvw.github.io/',
    title: 'M.E.',
}


const about = {
    name: 'Mart van Weeghel',
    role: ['Software Developer', 'Software Engineer'],
    description: [`Een ${getAge(new Date(2004, 3, 30))}-jarige jongen uit Nederland, die op dit moment Software Developer studeert`, `A ${getAge(new Date(2004, 3, 30))}-year old boy from The Netherlands, currently studying Software Engineer`],
    resume: '',
    social: {
        linkedin: 'https://www.linkedin.com/in/mart-van-weeghel-71596b1b6/',
        github: 'https://github.com/MartvW',
    },
}

const projects = [
    {
        name: ['Portfolio', 'Portfolio'],
        description:
            ['Dit is een website wat mijn portfolio laat zien, op dit moment bevind u zich op deze website.', 'This website which shows my portfolio. On this moment you are on the website.'],
        stack: ['CSS', 'JavaScript', 'React'],
        sourceCode: 'https://github.com/MartvW/martvw.github.io',
        livePreview: 'https://martvw.github.io',
    },
    {
        name: ['NarrowCasting', 'NarrowCasting'],
        description:
            ['Een NarrowCasting systeem gemaakt in Laravel, wat er voor zorgt dat je de lokale weer kan zien, lokale treintijden.', 'A NarrowCasting system made in Laravel, it shows the current weather in a city, or the current train-times on a station.'],
        stack: ['PHP', 'Blade', 'Shell'],
        sourceCode: '',
        livePreview: 'https://narrow.landstede.dev/',
    },
    {
        name: ['Discord Bot', 'Discord Bot'],
        description:
            ['Een Discord Bot wat helpt om spelers het spel "Among Us" beter te spelen in Discord.', 'A Discord Bot that will help players to play the game "Among Us" easily with there friends.'],
        stack: ['PHP', 'Blade', 'Shell'],
        sourceCode: '',
        livePreview: '',
    },
]

const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'React',
    'Blade',
    'Shell',
    'SASS',
]

const contact = {
    email: 'martvanweeghel@icloud.com',
}

export { header, about, projects, skills, contact }