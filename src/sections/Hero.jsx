import { AnimatedBorderButton } from "../components/AnimatedBorderButton"
import { Button } from "../components/Button"
import { ArrowRight,Download,} from "lucide-react";

export const Hero = () => {
    return (
        <section className="flex items-center relative min-h-screen overflow-hidden ">
            {/* BG  */}
            <div className="absolute inset-0">
                <img src="/hero-bg.jpg" alt="Hero section" className="w-full h-full opacity-40 object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-background/20 vai-background/80 to-background" />
            </div>

            {/* green Dots  */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className=" absolute w-1.5 h-1.5 rounded-full opacity-60"
                        style={{
                            backgroundColor: "#20B2A6",
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `slow-drift ${15 + Math.random() * 20
                                }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`
                        }}
                    />
                ))}
            </div>

            {/* content of hero section  */}
            <div className="container max-auto px-6 pt-32 pb-20 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left-colum for Text content  */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary ">
                                <span className="w-2 h-2 rounded-full  bg-primary animate-pulse" /> Software Engineer • FullStack Developer
                            </span>
                        </div>

                        {/* hero headline */}
                        <div className="space-y-4">
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100 ">
                                Crafting <span className="text-primary glow-text">digital</span>
                                <br />
                                experiences with
                                <br />
                                <span className="font-serif italic font-normal text-white">
                                    precision.
                                </span>
                            </h1>
                            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-500">
                                Hi, I'm MD Alam — a software engineer specializing in
                                React, Next.js, and TypeScript. I build scalable, performant web
                                applications that users love.
                            </p>
                        </div>
                    </div>
                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
                        <Button size="sm">
                            Contact Me <ArrowRight className="w-5 h-5" />
                        </Button>
                        <AnimatedBorderButton>
                            <Download className="w-5 h-5" />
                            Download CV
                        </AnimatedBorderButton>
                    </div>
                    
                    {/* Right-colum for the Profile image  */}
                </div>
            </div>
        </section>
    )
}