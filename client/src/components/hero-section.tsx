import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-gray to-slate-900 animate-gradient bg-[length:400%_400%]"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-2 h-2 bg-thistle rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-light-purple rounded-full animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute bottom-40 left-20 w-2 h-2 bg-deep-purple rounded-full animate-float" style={{ animationDelay: "4s" }}></div>
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-thistle rounded-full animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-slide-up">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-thistle to-light-purple">Alex Chen</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <span className="text-thistle">Software Engineer</span> crafting digital experiences with Python & React
          </p>
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.6s" }}>
            Passionate about building scalable applications and solving complex problems through elegant code
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-thistle to-deep-purple text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-thistle/25 transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="border-2 border-thistle text-thistle px-8 py-3 rounded-full font-semibold hover:bg-thistle hover:text-slate-900 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
