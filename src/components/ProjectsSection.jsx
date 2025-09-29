import { ArrowRightIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "FiscoTrack",
        description: "",
        image: "/projects/fiscotrack.png",
        tags: ['React', 'MUI', 'Django', 'Postgresql'],
        githubUrl: "https://github.com/davidcarmo23/fisco-track"
    },
];

export const ProjectsSection = ({ t }) => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 maw-w-2xl mx-auto">
                    {t("projects_intro")}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, key) => (
                                        <span key={key} className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>


                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-muted-foreground text-sm mb-4">{t(project.description)}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a aria-label={project.title} href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-secondary-icon transition-colors duration-300">
                                            <GithubIcon size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        href="https://github.com/davidcarmo23"
                        target="_blank">
                        {t("my_github")} <ArrowRightIcon size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}