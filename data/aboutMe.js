const style = (props) =>
    `color: var(--chakra-colors-brand-${props.colorMode === 'light' ? '600' : '300'
    });font-weight: 500;`;

const info = (props) => [
    {
        input: 'learnAboutMe()',
        result: 'Loading data...',
    },
    {
        input: 'currentLocation',
        result: '"Lahore, Pakistan"',
    },
    {
        input: 'interests',
        result: '["Web Development", "Travelling", "Gaming", "Photography"]',
    },
    {
        input: 'education',
        result: '"Bachelor of Science in Computer Science - COMSATS Lahore"',
    },
    {
        input: 'skills',
        result: '["ElectronJS", "React", "Laravel", "Node", "Express", "Vue", "Wordpress"]',
    },
    {
        input: 'contactMe',
        result: `[
          "<a style="${style(
            props
        )}" rel="noopener" href="https://github.com/ahmedmukhtar1133" target="_blank">Github</a>",
          "<a style="${style(
            props
        )}" rel="noopener" href="https://stackoverflow.com/users/6627447/ahmad-mukhtar" target="_blank">Stackoverflow</a>"
          "<a style="${style(
            props
        )}" rel="noopener" href="https://www.linkedin.com/in/ahmedmukhtar1133/" target="_blank">LinkedIn</a>", 
          "<a rel="noopener" style="${style(
            props
        )}" href="https://www.instagram.com/ahmad.m.goraya/" target="_blank">Instagram</a>"]`,
    },
];

export default info;
