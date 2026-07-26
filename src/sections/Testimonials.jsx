import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
    {
        quote:
            "Masoom consistently delivered clean UI designs and collaborated effectively with developers and community members. His creativity and dedication significantly improved the quality of our digital initiatives.",
        author: "Microsoft Learn Student Ambassadors",
        role: "User Interface Designer • KIIT Chapter",
        avatar: "/testimonials/mlsa.jpg",
    },
    {
        quote:
            "During his internship at Sadakchaap Labs, Masoom demonstrated strong UI/UX skills, quickly adapted to our workflow, and contributed meaningful improvements to the Janta X application.",
        author: "Sadakchaap Labs",
        role: "UI/UX Designer Intern",
        avatar: "/testimonials/sadakchaap.png",
    },
    {
        quote:
            "Masoom actively contributed to our technical community by designing posters, event branding, and UI assets while collaborating with multiple teams for successful events.",
        author: "Google Developer Student Clubs",
        role: "UI/UX Designer • KIIT",
        avatar: "/testimonials/gdsc.jpg",
    },
    {
        quote:
            "His dedication towards student activities, event branding, and creative design made him a valuable contributor to various university initiatives throughout his journey.",
        author: "KIIT Student Activity Centre",
        role: "Graphic Designer & Volunteer",
        avatar: "/testimonials/mlsakiit.jpg",
    },
    {
        quote:
            "Masoom consistently supported social initiatives through volunteering, awareness campaigns, and creative design work while demonstrating excellent teamwork and leadership qualities.",
        author: "National Service Scheme",
        role: "General Volunteer & Graphic Designer",
        avatar: "/testimonials/nss.jpg",
    },
    {
        quote:
            "Working with Masoom has been a smooth experience. He communicates clearly, understands project requirements quickly, and delivers responsive websites with attention to detail and modern UI practices.",
        author: "Freelance Clients",
        role: "React Web Developer",
        avatar: "/testimonials/freelance.jpg",
    },
];

export const Testimonials = () => {
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    };

    const previous = () => {
        setActiveIdx(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <section id="testimonials" className="py-32 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Professional Recommendations
                    </span>

                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Trusted by{" "}
                        <span className="font-serif italic font-normal text-white">
                            teams & communities.
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        Feedback and appreciation from internships, technical communities,
                        volunteer organizations, and freelance collaborations throughout my
                        professional journey.
                    </p>
                </div>

                {/* Recommendation Card */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">

                        <div className="glass p-8 md:p-12 rounded-3xl glow-border animate-fade-in animation-delay-200">

                            <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                                <Quote className="w-6 h-6 text-primary-foreground" />
                            </div>

                            <p className="text-xl md:text-2xl font-medium leading-relaxed mb-10 pt-4 text-foreground">
                                {testimonials[activeIdx].quote}
                            </p>

                            <div className="flex items-center gap-5">

                                <img
                                    src={testimonials[activeIdx].avatar}
                                    alt={testimonials[activeIdx].author}
                                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/30 shadow-lg"
                                />

                                <div>
                                    <h3 className="text-lg font-semibold">
                                        {testimonials[activeIdx].author}
                                    </h3>

                                    <p className="text-sm text-primary mt-1">
                                        {testimonials[activeIdx].role}
                                    </p>
                                </div>

                            </div>

                        </div>

                        {/* Navigation */}
                        <div className="flex items-center justify-center gap-5 mt-10">

                            <button
                                onClick={previous}
                                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>

                            <div className="flex gap-3">
                                {testimonials.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setActiveIdx(idx)}
                                        className={`transition-all duration-300 rounded-full ${idx === activeIdx
                                            ? "w-10 h-2 bg-primary"
                                            : "w-2 h-2 bg-muted-foreground/30 hover:bg-primary/50"
                                            }`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={next}
                                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};