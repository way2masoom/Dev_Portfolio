import {
    Code2,
    Lightbulb,
    Rocket,
    GraduationCap,
} from "lucide-react";

const highlights = [
    {
        icon: Code2,
        title: "Frontend Development",
        description:
            "Building responsive and modern web applications using React, JavaScript and Tailwind CSS.",
    },
    {
        icon: Rocket,
        title: "Problem Solving",
        description:
            "Passionate about writing clean, efficient code and continuously improving development skills.",
    },
    {
        icon: GraduationCap,
        title: "Computer Science",
        description:
            "B.Tech Computer Science Engineering graduate from KIIT University with a strong programming foundation.",
    },
    {
        icon: Lightbulb,
        title: "Continuous Learning",
        description:
            "Always exploring new technologies, building projects and improving my full-stack development skills.",
    },
];

export const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column */}
                    <div className="space-y-8">

                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Turning ideas into
                            <span className="font-serif italic font-normal text-white">
                                {" "}interactive web experiences.
                            </span>
                        </h2>

                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">

                            <p>
                                Hi, I'm <strong>MD Masoom Alam</strong>, a Computer Science
                                Engineering graduate with a passion for creating modern,
                                responsive and user-friendly web applications.
                            </p>

                            <p>
                                I primarily work with React, JavaScript, Tailwind CSS,
                                Node.js and MongoDB. I enjoy building clean user interfaces,
                                learning modern development practices and turning ideas into
                                real-world projects.
                            </p>

                            <p>
                                Alongside my academic journey, I've gained practical experience
                                through internships and personal projects, strengthening my
                                problem-solving skills, teamwork and understanding of modern
                                web development.
                            </p>

                            <p>
                                My goal is to grow as a full-stack software engineer while
                                continuously learning new technologies and building products
                                that create meaningful impact.
                            </p>

                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                "I believe great software isn't just about writing code—it's
                                about solving real problems, creating great user experiences
                                and never stopping the learning process."
                            </p>
                        </div>

                    </div>

                    {/* Right Column */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item, idx) => (
                            <div
                                key={idx}
                                className="glass p-6 rounded-2xl animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                                    <item.icon className="w-6 h-6 text-primary" />
                                </div>

                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>

                                <p className="text-sm text-muted-foreground">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};