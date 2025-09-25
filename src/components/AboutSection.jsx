import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () =>{
    return(
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Junior Software developer</h3>
                        <p className="text-muted-foreground">
                            With a 1 and 1/2 years of experience I have contributed to projects involving
                            the restructuring and optimization of web platforms, the development of new features, 
                            and integration with SQL databases, always maintaining a strong focus on quality, usability, and user satisfaction.
                        </p>

                         <p className="text-muted-foreground">
                            I enjoy working collaboratively, adapt quickly to new technologies, 
                            and take a proactive approach to identifying and solving problems.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get in Touch
                            </a>

                            <a href="#cv" className="cosmic-button">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4"> 
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-foreground"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Software Development</h4>
                                    <p className="text-muted-foreground"> blablabla</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4"> 
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-foreground"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Software Development</h4>
                                    <p className="text-muted-foreground"> blablabla</p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4"> 
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-foreground"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Software Development</h4>
                                    <p className="text-muted-foreground"> blablabla</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}