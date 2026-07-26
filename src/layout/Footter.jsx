import { Heart, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socialLinks = [
    {
        icon: FaGithub,
        href: "https://github.com/way2masoom",
        label: "GitHub",
    },
    {
        icon: FaLinkedin,
        href: "https://www.linkedin.com/in/way2masoom/",
        label: "LinkedIn",
    },
];

const footerLinks = [
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
];

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative border-t border-white/10 bg-background py-12">
            <div className="container mx-auto px-6">

                <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">

                        <a
                            href="#hero"
                            className="text-2xl font-bold tracking-tight hover:text-primary transition-colors"
                        >
                            MD<span className="text-primary">.</span>
                        </a>

                        <p className="text-sm text-muted-foreground mt-2">
                            © {currentYear} MD Masoom Alam. All rights reserved.
                        </p>

                        <p className="text-sm text-muted-foreground mt-1 flex items-center justify-center md:justify-start gap-1">
                            Built with
                            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                            using React & Tailwind CSS
                        </p>

                    </div>

                    {/* Navigation */}

                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Social */}

                    <div className="flex flex-col items-center gap-5">

                        <div className="flex items-center gap-4">

                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-3 rounded-full glass hover:bg-primary hover:text-black transition-all duration-300 hover:scale-110"
                                >
                                    <social.icon className="text-xl" />
                                </a>
                            ))}

                        </div>

                        <a href="#"
                            className="flex items-center gap-2 text-sm text-primary hover:-translate-y-1 transition-all duration-300">
                            Back to Top
                            <ArrowUp className="w-4 h-4" />
                        </a>

                    </div>

                </div>

            </div>
        </footer>
    );
};