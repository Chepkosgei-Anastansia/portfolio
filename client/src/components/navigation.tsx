import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-b border-slate-800 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/98 backdrop-blur-sm" : "bg-slate-900/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-xl font-bold text-thistle">
            Alex Chen
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-slate-300 hover:text-thistle transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-300 hover:text-thistle transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-300 hover:text-thistle transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-slate-300 hover:text-thistle transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-300 hover:text-thistle transition-colors duration-300"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden text-thistle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button
              onClick={() => scrollToSection("hero")}
              className="block text-slate-300 hover:text-thistle transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block text-slate-300 hover:text-thistle transition-colors duration-300"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block text-slate-300 hover:text-thistle transition-colors duration-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="block text-slate-300 hover:text-thistle transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block text-slate-300 hover:text-thistle transition-colors duration-300"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
