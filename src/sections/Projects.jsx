import { ArrowUpRight } from "lucide-react";
import { FaGithub } from 'react-icons/fa';

import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
    {
        title: "HangMan Game",
        description:
            "A modern Hangman game built with React featuring routing, reusable components, responsive UI, and interactive gameplay.",
        image: "projects/hangman.png",
        tags: ["React", "JavaScript", "React Router", "Tailwind CSS"],
        link: "https://github.com/way2masoom/HangManGame", // Replace with your live demo later
        github: "https://github.com/way2masoom/HangManGame",
    },
    {
        title: "JavaScript Projects",
        description:
            "A collection of JavaScript projects including Password Generator, Todo App, Color Changer and more to strengthen core JavaScript concepts.",
        image: "projects/javascriptProjects.png",
        tags: ["JavaScript", "HTML", "CSS", "DOM"],
        link: "https://github.com/way2masoom/JavaScriptProjects", // Replace later
        github: "https://github.com/way2masoom/JavaScriptProjects",
    },
    {
        title: "Weather App",
        description:
            "A responsive weather application that will display real-time weather forecasts using Weather API, location search and modern UI.",
        image: "projects/weatherApp.png",
        tags: ["React", "Weather API", "Tailwind CSS", "Coming Soon"],
        link: "#",
        github: "#",
    },
    {
        title: "Portfolio Website",
        description:
            "My personal portfolio built with React and Tailwind CSS showcasing my projects, skills and experience with modern animations.",
        image: "projects/portfolio.png",
        tags: ["React", "Tailwind CSS", "Vite", "Responsive"],
        link: "#",
        github: "#",
    },
];

export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            make an impact.
                        </span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work, from complex web applications to
                        innovative tools that solve real-world problems.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden aspect-video">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div
                                    className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                                />
                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">

                                    {/* Live Demo */}
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>

                                    {/* GitHub */}
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

                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <ArrowUpRight
                                        className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                                    />
                                </div>
                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 hover:border-primary/50 hover:text-primary transition-all duration-300">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs fonpx-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300t-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12 animate-fade-in animation-delay-500">
                    <AnimatedBorderButton>
                        <a href="https://github.com/way2masoom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:cursor-pointer">
                            View All Projects
                            <ArrowUpRight className="w-5 h-5" />
                        </a>
                    </AnimatedBorderButton>
                </div>
            </div>
        </section>
    );
};