import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = ({ t }) => {

    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold"> {t("experience_title")}</h3>
                        <p className="text-muted-foreground">
                            {t("work_experience")}
                        </p>

                        <p className="text-muted-foreground">
                            {t("personal_extras")}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {t("get_in_touch")}
                            </a>

                            <a download="DavidCarmo_CurriculumVitaeEN" href="/DavidCarmo_CurriculumVitaeEN.pdf" className="cosmic-button">
                                {t("download_cv")}
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-foreground" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> {t("fullstack_dev")}</h4>
                                    <p className="text-muted-foreground"> {t("fullstack_dev_txt")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-foreground" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> {t("problem_solving")}</h4>
                                    <p className="text-muted-foreground">  {t("problem_solving_txt")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-foreground" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> {t("professional_growth")}</h4>
                                    <p className="text-muted-foreground"> {t("professional_growth_txt")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}