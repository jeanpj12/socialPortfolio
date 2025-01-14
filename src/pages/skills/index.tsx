import { CardSkill } from "../../components/CardSkill"
import styles from './styles.module.css'
import htmlImg from '../../assets/svg/html-5.svg'
import cssImg from '../../assets/svg/css-3.svg'
import dockerImg from '../../assets/svg/docker.svg'
import nodeImg from '../../assets/svg/node-js.svg'
import postgresImg from '../../assets/svg/postgre.svg'
import reactImg from '../../assets/React-icon.svg.png'
import typescriptImg from '../../assets/Typescript_logo_2020.svg.png'

export function Skills() {

    const skills = [
        {
            img: htmlImg,
            title: 'HTML',
            level: 'Avançado',
            description: 'Linguagem de marcação utilizada para estruturar e organizar o conteúdo de páginas web.'
        },
        {
            img: cssImg,
            title: 'CSS',
            level: 'Avançado',
            description: 'Linguagem de estilo utilizada para personalizar a aparência de páginas web, incluindo layout, cores e fontes.'
        },
        {
            img: nodeImg,
            title: 'Node.js',
            level: 'Avançado',
            description: 'Runtime JavaScript para criação de aplicações server-side escaláveis e de alta performance.'
        },
        {
            img: dockerImg,
            title: 'Docker',
            level: 'Intermediário',
            description: 'Plataforma de containers que simplifica o desenvolvimento, implantação e execução de aplicações em ambientes isolados.'
        },
        {
            img: postgresImg,
            title: 'PostgreSQL',
            level: 'Avançado',
            description: 'Sistema de gerenciamento de banco de dados relacional avançado, conhecido por sua robustez e flexibilidade.'
        },
        {
            img: reactImg,
            title: 'React',
            level: 'Avançado',
            description: 'Biblioteca JavaScript para construção de interfaces de usuário dinâmicas e componentes reutilizáveis.'
        },
        {
            img: typescriptImg,
            title: 'TypeScript',
            level: 'Avançado',
            description: 'Superconjunto do JavaScript que adiciona tipagem estática, melhorando a segurança e a manutenibilidade do código.'
        }
    ];


    return <div className={styles.container}>
        {skills.map((skill, index) => (
            <CardSkill
                img={skill.img}
                title={skill.title}
                level={skill.level}
                description={skill.description}
                key={index}
            />
        ))}
    </div>
}