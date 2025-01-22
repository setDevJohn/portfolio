import ipAddressTracker from '@assets/images/ip-address-tracker.png';
import interactiveForm from '@assets/images/interactive-form.png';
import githubProfile from '@assets/images/github-profile.png';
import lavandinha from '@assets/images/lavandinha.png';
import pokedex from '@assets/images/pokedex.png';
import codeCafe from '@assets/images/code-cafe.png';
import ipAddressTrackerMobile from '@assets/images/ip-address-tracker-mobile.png';
import interactiveFormMobile from '@assets/images/interactive-form-mobile.png';
import githubProfileMobile from '@assets/images/github-profile-mobile.png';
import lavandinhaMobile from '@assets/images/lavandinha-mobile.png';
import pokedexMobile from '@assets/images/pokedex-mobile.png';
import codeCafeMobile from '@assets/images/code-cafe-mobile.png';
 
export const projectList = [
  {
    path: ipAddressTracker,
    mobile: ipAddressTrackerMobile,
    name: 'Rastreador de endereço de IP',
    repoLink: 'https://github.com/setDevJohn/ip-address-tracker',
    deployLink: 'https://ip-address-tracker-jhonyfreitasdev.vercel.app/',
    stacks: [
      { stack: 'TS', color: '#377CC8' }, 
      { stack: 'React', color: '#50D6FF' },
      { stack: 'Sass', color: '#CE6B9C' }, 
    ],
  },
  {
    path: interactiveForm,
    mobile: interactiveFormMobile,
    name: 'Formulário interativo',
    repoLink: 'https://github.com/setDevJohn/interactive-card-form',
    deployLink: 'https://setdevjohn.github.io/interactive-card-form/',
    stacks: [
      { stack: 'JS', color: '#F5DD27' }, 
      { stack: 'HTML', color: '#EE6529' }, 
      { stack: 'CSS', color: '#08ACE1' },
    ],
  },
  {
    path: githubProfile,
    mobile: githubProfileMobile,
    name: 'Requisição de perfil do GitHub',
    repoLink: 'https://github.com/setDevJohn/github-profile',
    deployLink: 'https://setdevjohn.github.io/github-profile/',
    stacks: [
      { stack: 'JS', color: '#F5DD27' }, 
      { stack: 'HTML', color: '#EE6529' }, 
      { stack: 'CSS', color: '#08ACE1' },
    ],
  },
  {
    path: lavandinha,
    mobile: lavandinhaMobile,
    name: 'Lavandinha bordados',
    repoLink: null,
    deployLink: 'https://lavandinha-bordados.vercel.app/',
    stacks: [
      { stack: 'React', color: '#50D6FF' },
      { stack: 'JS', color: '#F5DD27' }, 
      { stack: 'StyledComp', color: '#F267C6' }, 
    ],
  },
  {
    path: pokedex,
    mobile: pokedexMobile,
    name: 'Pokedex',
    repoLink: 'https://github.com/setDevJohn/pokedex',
    deployLink: 'https://pokedex-alpha-mauve.vercel.app/',
    stacks: [
      { stack: 'React', color: '#50D6FF' },
      { stack: 'JS', color: '#F5DD27' }, 
      { stack: 'StyledComp', color: '#F267C6' }, 
      { stack: 'Jest', color: '#C8431B' }, 
    ],
  },
  {
    path: codeCafe,
    mobile: codeCafeMobile,
    name: 'Code Café',
    repoLink: 'https://github.com/setDevJohn/code-cafe',
    deployLink: 'https://setdevjohn.github.io/code-cafe/',
    stacks: [
      { stack: 'HTML', color: '#EE6529' }, 
      { stack: 'CSS', color: '#08ACE1' },
    ],
  },
];