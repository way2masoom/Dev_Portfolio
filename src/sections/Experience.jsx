const experiences = [
    {
        period: "2025 — Present",
        role: "Freelance Web Developer",
        company: "Self Employed",
        description:
            "Developing modern, responsive web applications and portfolio websites using React, JavaScript, Tailwind CSS, EmailJS, GitHub, and Vercel. Working with clients from design to deployment while continuously improving development skills.",
        technologies: [
            "React",
            "JavaScript",
            "Tailwind CSS",
            "EmailJS",
            "GitHub",
            "Vercel",
            "Responsive Design",
            "UI/UX",
            "Figma",
        ],
        current: true,
    },

    {
        period: "Feb 2024 — Jul 2026",
        role: "User Interface Designer",
        company: "Microsoft Learn Student Ambassadors (KIIT Chapter)",
        description:
            "Designed user interfaces, promotional materials, and digital assets for Microsoft Learn Student Ambassadors events. Collaborated with different teams to create engaging experiences and improve visual communication across the community.",
        technologies: [
            "Figma",
            "UI Design",
            "Graphic Design",
            "Canva",
            "Team Collaboration",
        ],
        current: false,
    },

    {
        period: "Apr 2025 — Jul 2025",
        role: "UI/UX Designer Intern",
        company: "Sadakchaap Labs (Janta X)",
        description:
            "Worked on the Janta X application as part of the product design team. Designed user interfaces, improved user experience, collaborated with developers, and contributed to production-ready designs.",
        technologies: [
            "Figma",
            "UI/UX",
            "Wireframing",
            "Design System",
            "Prototyping",
        ],
        current: false,
    },

    {
        period: "Mar 2024 — Oct 2024",
        role: "UI/UX Designer",
        company: "Google Developer Student Clubs (KIIT)",
        description:
            "Designed event posters, social media creatives, presentation materials, and user interfaces while collaborating with developers and organizers for technical events and workshops.",
        technologies: [
            "Figma",
            "Photoshop",
            "Illustrator",
            "Branding",
        ],
        current: false,
    },

    {
        period: "Mar 2023 — Present",
        role: "Graphic Designer & Volunteer",
        company: "KIIT Student Activity Centre (KSAC)",
        description:
            "Designed posters, event branding, promotional materials, and social media creatives for various university clubs and events while actively volunteering in organizing campus activities.",
        technologies: [
            "Graphic Design",
            "Branding",
            "Canva",
            "Photoshop",
            "Leadership",
        ],
        current: true,
    },

    {
        period: "Sep 2023 — Present",
        role: "General Volunteer & Graphic Designer",
        company: "National Service Scheme (NSS)",
        description:
            "Contributed to community service initiatives, awareness campaigns, event management, and visual content creation while developing leadership, teamwork, and communication skills.",
        technologies: [
            "Leadership",
            "Graphic Design",
            "Communication",
            "Teamwork",
            "Event Management",
        ],
        current: true,
    },

    {
        period: "Aug 2021 — Mar 2022",
        role: "Web Specialist",
        company: "Bay20 Software Consultancy Services",
        description:
            "Worked on website development, branding, logo design, graphics, and digital content while collaborating with clients and development teams on multiple business projects.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Graphic Design",
            "Branding",
        ],
        current: false,
    },
];
export const Experience = () => {
    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            <div
                className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-16">
                    <span
                        className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
                    >
                        Professional Experience
                    </span>
                    <h2
                        className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
                    >
                        Experience that{" "}
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            speaks volumes.
                        </span>
                    </h2>

                    <p
                        className="text-muted-foreground
           animate-fade-in animation-delay-200"
                    >
                        A timeline of my professional growth, from curious beginner to
                        senior engineer leading teams and building products at scale.
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div
                                key={idx}
                                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            >
                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && (
                                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                                    )}
                                </div>

                                {/* Content */}
                                <div
                                    className={`pl-8 md:pl-0 ${idx % 2 === 0
                                        ? "md:pr-16 md:text-right"
                                        : "md:col-start-2 md:pl-16"
                                        }`}
                                >
                                    <div
                                        className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                                    >
                                        <span className="text-sm text-primary font-medium">
                                            {exp.period}
                                        </span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4">
                                            {exp.description}
                                        </p>
                                        <div
                                            className={`flex flex-wrap gap-2 mt-4 ${idx % 2 === 0 ? "md:justify-end" : ""
                                                }`}
                                        >
                                            {exp.technologies.map((tech, techIdx) => (
                                                <span
                                                    key={techIdx}
                                                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};