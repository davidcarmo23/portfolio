import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    debug: false,
    fallbackLng: 'en',
    resources: {
        en: {
            translation: {
                get_in_touch: "Get in Touch",
                download_cv: "Download CV",
                work_experience: "With a 1 and 1/2 years of experience I have contributed to projects involving the restructuring and optimization of web platforms, the development of new features,\
                                 and integration with SQL databases, always maintaining a strong focus on quality, usability, and user satisfaction.",
                personal_extras: "I enjoy working collaboratively, adapt quickly to new technologies,\
                                and take a proactive approach to identifying and solving problems.",
                fullstack_dev: "Full-Stack Development",
                fullstack_dev_txt: "Building scalable web applications with React, Javascript, and modern development practices.",
                problem_solving: "Problem Solving",
                problem_solving_txt: "Tackling complex technical challenges with analytical thinking and innovative solutions.",
                professional_growth: "Professional Growth",
                professional_growth_txt: "1.5+ years optimizing CRM platforms while continuously learning emerging technologies.",
                experience_title: "Junior Software Developer",
                get_in: "Get In",
                touch: "Touch",
                get_in_touch_txt: "Have a project in mind or want to collaborate? Feel free to contact me.\
                    Currently open to discuss new opportunities.",
                contact_info: "Contact Information",
                email: "Email",
                phone: "Phone",
                location: "Location",
                connect_with_me: "Connect With Me",
                hero_intro: "Hello, I'm David, a 24-year-old from Almeida, Portugal with a Master's in Computer Science and Engineering from the Universidade da Beira Interior.\
                        I worked at",
                hero_intro2: "as a Software developer until June 2025. I am currently in search of work and polishing my skillset.",
                view_work: "View My Work",
                scroll: "Scroll",
                greeting: "Hi, I'm",
                home: "Home",
                about: "About",
                skills: "Skills",
                projects: "Projects",
                contact: "Contact",
                projects_intro: "Some of my recent projects. Each project was crafted with a defined use case,\
                    and with attention to detail, performance and user experience.",
                my_github: "My Github",
                all: "All",
                frontend: "Frontend",
                backend: "Backend",
                tools: "Tools",
            }
        },

        pt: {
            translation: {
                get_in_touch: "Entre em Contacto",
                download_cv: "Descarregar CV",
                work_experience: "Com 1 ano e 6 meses de experiência contribuí para projetos que envolviam a reestruturação e otimização de plataformas web, desenvolvimento de novas funcionalidades,\
                                 e integragção com bases de dados SQL, mantendo sempre um grande foco na qualidade, usabilidade e satisfação do utilizador.",
                personal_extras: "Gosto de trabalhar em equipa, adapto-me rapidamente a novas tecnologias\
                                e tenho uma abordagem proativa na identificação e resolução de problemas.",
                fullstack_dev: "Desenvolvimento Full-Stack",
                fullstack_dev_txt: "Construção de aplicações web escalavéis com React, Javascript, and métodos modernos de desenvolvimento.",
                problem_solving: "Resolução de Problemas",
                problem_solving_txt: "Enfrentar desafios técnicos complexos com raciocinio analitico e soluções inovadoras.",
                professional_growth: "Crescimento Profissional",
                professional_growth_txt: "1 ano e 6 meses a otimizar plataformas CRM e simultaneamente a aprender tecnologias emergentes.",
                experience_title: "Junior Software Developer",
                get_in: "Entra em",
                touch: "Contacto",
                get_in_touch_txt: "Tens um projeto em mente ou queres colaborar? Entra em contacto.\
                    Atualmente à procura de novas oportunidades.",
                contact_info: "Informação de Contacto",
                email: "Email",
                phone: "Telemóvel",
                location: "Localização",
                connect_with_me: "Conecta-te Comigo",
                hero_intro: "Olá, sou o David, 24 anos de Almeida, Portugal, com um Mestrado em Engenharia Informática da Universidade da Beira Interior.\
                        Trabalhei na",
                hero_intro2: "como um Software developer até Julho de 2025. Estou atualmente à procura de trabalho e a melhorar as minhas habilidades.",
                view_work: "Vê o meu Trabalho",
                scroll: "Scroll",
                greeting: "Olá, sou o",
                home: "Inicío",
                about: "Sobre",
                skills: "Aptidões",
                projects: "Projetos",
                contact: "Contacto",
                projects_intro: "Alguns dos meus projetos mais recentes. Cada um foi desenvolvido com um caso de uso específico,\
                    e com atenção aos detalhes, performance e user experience.",
                my_github: "O meu Github",
                all: "Todos",
                frontend: "Frontend",
                backend: "Backend",
                tools: "Ferramentas",
            }
        }
    }
});

export default i18n;
