import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const featuredProjects = [
    {
        title: "HangMan Game",
        description:
            "A modern Hangman game built with React featuring routing, reusable components, responsive UI, and interactive gameplay.",
        image: "projects/hangman.png",
        tags: ["React", "JavaScript", "React Router", "Tailwind CSS"],
        link: "https://github.com/way2masoom/HangManGame",
        github: "https://github.com/way2masoom/HangManGame",
    },
    {
        title: "JavaScript Projects",
        description:
            "A collection of JavaScript projects including Password Generator, Todo App, Color Changer and more.",
        image: "projects/javascriptProjects.png",
        tags: ["JavaScript", "HTML", "CSS", "DOM"],
        link: "https://github.com/way2masoom/JavaScriptProjects",
        github: "https://github.com/way2masoom/JavaScriptProjects",
    },
    {
        title: "Weather App",
        description:
            "A responsive weather application using Weather API.",
        image: "projects/weatherApp.png",
        tags: ["React", "Weather API", "Tailwind CSS"],
        link: "#",
        github: "#",
    },
    {
        title: "Portfolio Website",
        description:
            "Personal portfolio built with React and Tailwind CSS.",
        image: "projects/portfolio.png",
        tags: ["React", "Tailwind CSS", "Vite"],
        link: "https://dev-portfolio-black-two.vercel.app/",
        github: "https://github.com/way2masoom/Dev_Portfolio",
    },
];

const moreProjects = [
    {
        title: "Snake Game",
        description: "Classic Snake Game built using HTML, CSS and JavaScript.",
        image: "projects/SnakeGame.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://htmlpreview.github.io/?https://github.com/way2masoom/My-Snake-Game/blob/main/index.html",
        github: "https://github.com/way2masoom/My-Snake-Game",
    },
    {
        title: "Todo App",
        description: "Task management application with CRUD functionality.",
        image: "projects/todoApp.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://htmlpreview.github.io/?https://github.com/way2masoom/JavaScriptProjects/blob/main/TodoApp/index.html",
        github: "https://github.com/way2masoom/JavaScriptProjects/tree/main/TodoApp",
    },
    {
        title: "Password Generator",
        description: "Secure password generator with customizable options.",
        image: "projects/passwordGenerater.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://htmlpreview.github.io/?https://github.com/way2masoom/JavaScriptProjects/blob/main/Password-Generator/index.html",
        github: "https://github.com/way2masoom/JavaScriptProjects/tree/main/Password-Generator",
    },
    {
        title: "Hangman Game (JS)",
        description: "Classic Hangman game built using vanilla JavaScript.",
        image: "projects/HangManJS.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://htmlpreview.github.io/?https://github.com/way2masoom/JavaScriptProjects/blob/main/HangmanGame/index.html",
        github: "https://github.com/way2masoom/JavaScriptProjects/tree/main/HangmanGame",
    },
];

const ProjectCard = ({ project, idx }) => (
    <div
        className="group glass rounded-2xl overflow-hidden animate-fade-in"
        style={{ animationDelay: `${(idx + 1) * 100}ms` }}
    >
        <div className="relative overflow-hidden aspect-video">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />

            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                >
                    <ArrowUpRight className="w-5 h-5" />
                </a>

                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                >
                    <FaGithub className="w-5 h-5" />
                </a>
            </div>
        </div>

        <div className="p-6 space-y-4">
            <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                {project.title}
            </h3>

            <p className="text-muted-foreground text-sm">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                    <span
                        key={i}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </div>
    </div>
);

export const Projects = () => {
    const [showAllProjects, setShowAllProjects] = useState(false);

    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground uppercase text-sm">
                        Featured Work
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4">
                        Projects that{" "}
                        <span className="italic font-serif text-white">
                            make an impact.
                        </span>
                    </h2>

                    <p className="text-muted-foreground mt-4">
                        A selection of projects I've built using modern web technologies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {featuredProjects.map((project, idx) => (
                        <ProjectCard key={idx} project={project} idx={idx} />
                    ))}
                </div>

                {showAllProjects && (
                    <>
                        <h3 className="text-3xl font-bold text-center mt-20 mb-10">
                            More Projects
                        </h3>

                        <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
                            {moreProjects.map((project, idx) => (
                                <ProjectCard
                                    key={idx}
                                    project={project}
                                    idx={idx}
                                />
                            ))}
                        </div>
                    </>
                )}

                <div className="text-center mt-12">
                    <div onClick={() => setShowAllProjects(!showAllProjects)}>
                        <AnimatedBorderButton>
                            {showAllProjects ? "Show Less" : "View All Projects"}
                        </AnimatedBorderButton>
                    </div>
                </div>
            </div>
        </section>
    );
};