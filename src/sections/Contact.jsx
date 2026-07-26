import {Mail,Phone,MapPin,Send,CheckCircle,AlertCircle,
} from "lucide-react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';

import { Button } from "../components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "way2masoom@gmail.com",
        href: "mailto:way2masoom@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+977 9811876398",
        href: "tel:+9779811876398",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Birgunj, Nepal",
        href: "https://maps.google.com/?q=Birgunj,Nepal",
    },
    {
        icon: FaGithub,
        label: "GitHub",
        value: "way2masoom",
        href: "https://github.com/way2masoom",
    },
    {
        icon: FaLinkedin,
        label: "LinkedIn",
        value: "way2masoom",
        href: "https://www.linkedin.com/in/way2masoom/",
    }

];
export const Contact = () => {
    // ============================
    // Contact Form State
    // ============================

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);

    const [submitStatus, setSubmitStatus] = useState({
        type: null,
        message: "",
    });

    // ============================
    // Send Email
    // ============================

    const handleSubmit = async (e) => {
        e.preventDefault();

        setIsLoading(true);

        setSubmitStatus({
            type: null,
            message: "",
        });

        try {
            const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
            const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
            const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error(
                    "EmailJS environment variables are missing."
                );
            }

            await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    time: new Date().toLocaleString(),
                },
                publicKey
            );

            setSubmitStatus({
                type: "success",
                message:
                    "🎉 Thank you! Your message has been sent successfully. I'll get back to you as soon as possible.",
            });

            setFormData({
                name: "",
                email: "",
                message: "",
            });

        } catch (err) {
            console.error("EmailJS Error:", err);

            setSubmitStatus({
                type: "error",
                message:
                    err?.text ||
                    "Something went wrong while sending your message. Please try again later.",
            });
        } finally {
            setIsLoading(false);
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    return (
        <section id="contact" className="py-32 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* ==========================================
                            Section Header
                ========================================== */}

                <div className="text-center max-w-3xl mx-auto mb-20">

                    <span
                        className="inline-flexitems-centerpx-5py-2rounded-fullborder border-primary/20
      bg-primary/10 text-primarytext-xsmd:text-smfont-semibolduppercasetracking-[0.3em]animate-fade-in">Contact Me</span>
                    <h2 className="mt-6text-4xlmd:text-6xlfont-boldleading-tightanimate-fade-inanimation-delay-100">
                        Let's build{" "}
                        <span className="text-primary italic font-serif">something amazing.</span>
                    </h2>

                    <p className="mt-6 text-lg text-muted-foregroundleading-8animate-fade-in animation-delay-200">
                        Whether you're looking for a{" "}
                        <span className="text-white font-medium">
                            React Developer
                        </span>,
                        a{" "}
                        <span className="text-white font-medium">
                            Frontend Engineer
                        </span>,
                        or someone to build responsive and modern web applications,
                        I'd love to hear from you.

                        <br />

                        Let's connect for internships,
                        freelance projects,
                        collaborations,
                        or full-time opportunities.
                    </p>

                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
                    <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-2xl"
                        >
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block mb-2 text-sm font-medium text-muted-foreground"
                                >
                                    Full Name
                                </label>

                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="John Doe"
                                    className="w-full rounded-xl border border-white/10 bg-background/50 px-4 py-3 outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/30"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-muted-foreground"
                                >
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    className="w-full rounded-xl border border-white/10 bg-background/50 px-4 py-3 outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/30"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block mb-2 text-sm font-medium text-muted-foreground"
                                >
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows={6}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Tell me about your project..."
                                    className="w-full resize-none rounded-xl border border-white/10 bg-background/50 px-4 py-3 outline-none transition-all duration-300 focus:border-primary focus:ring-2 focus:ring-primary/30"
                                />
                            </div>

                            {/* Status Message */}
                            {submitStatus.message && (
                                <div
                                    className={`flex items-center gap-2 rounded-xl p-4 ${submitStatus.type === "success"
                                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                                        }`}
                                >
                                    {submitStatus.type === "success" ? (
                                        <CheckCircle size={18} />
                                    ) : (
                                        <AlertCircle size={18} />
                                    )}

                                    <span className="text-sm">{submitStatus.message}</span>
                                </div>
                            )}

                            {/* Submit Button */}
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-14 text-base font-semibold rounded-xl"
                            >
                                {isLoading ? (
                                    "Sending..."
                                ) : (
                                    <>
                                        <Send className="mr-2 h-5 w-5" />
                                        Send Message
                                    </>
                                )}
                            </Button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-6 animate-fade-in animation-delay-400">
                        <div className="glass rounded-3xl p-8">
                            <h3 className="text-xl font-semibold mb-6">
                                Contact Information
                            </h3>
                            <div className="space-y-5">

                                {contactInfo.map((item, index) => {
                                    const Icon = item.icon;

                                    return (
                                        <a
                                            key={index}
                                            href={item.href}
                                            target={item.href.startsWith("http") ? "_blank" : undefined}
                                            rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                            className="
          group
          flex
          items-center
          gap-5
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-md
          p-5
          transition-all
          duration-300
          hover:border-primary/40
          hover:bg-primary/10
          hover:-translate-y-1
        "
                                        >
                                            {/* Icon */}

                                            <div
                                                className="
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-xl
            bg-primary/10
            text-primary
            transition-all
            duration-300
            group-hover:scale-110
            group-hover:bg-primary
            group-hover:text-black
          "
                                            >
                                                <Icon size={24} />
                                            </div>

                                            {/* Text */}

                                            <div className="flex-1">

                                                <p className="text-sm text-muted-foreground">
                                                    {item.label}
                                                </p>

                                                <h4
                                                    className="
              text-lg
              font-semibold
              text-white
              transition-colors
              duration-300
              group-hover:text-primary
            "
                                                >
                                                    {item.value}
                                                </h4>

                                            </div>

                                        </a>
                                    );
                                })}

                            </div>
                        </div>

                        {/* Availability Card */}
                        {/* Let's Connect Card */}

                        <div className="mt-8 rounded-3xl borderborder-white/10 bg-linear-to-br 
f                       rom-primary/10via-backgroundto-backgroundp-8backdrop-blur-mdshadow-xl" >
                            {/* Status */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="relative flex h-4 w-4">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>

                                    <span className="relative inline-flex h-4 w-4 rounded-full bg-green-500"></span>
                                </span>

                                <p className="font-semibold text-green-400">
                                    Available for Opportunities
                                </p>
                            </div>

                            {/* Heading */}

                            <h3 className="text-2xl font-bold text-white mb-4">
                                Let's Connect 🚀
                            </h3>

                            {/* Description */}

                            <p className="text-muted-foreground leading-8 mb-6">
                                I'm always excited to work on innovative projects and collaborate with
                                amazing people. Whether you have a startup idea, a freelance project,
                                an internship opportunity, or a full-time role, feel free to reach out.
                            </p>

                            {/* Tags */}

                            <div className="flex flex-wrap gap-3">

                                <span className="rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm text-primary">
                                    React Developer
                                </span>

                                <span className="rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm text-primary">
                                    Frontend Developer
                                </span>

                                <span className="rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm text-primary">
                                    Freelance
                                </span>

                                <span className="rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm text-primary">
                                    Internship
                                </span>

                                <span className="rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm text-primary">
                                    Full-Time
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    );
};