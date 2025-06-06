import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-slate-800/50 border-t border-slate-700 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-thistle mb-2">Alex Chen</h3>
            <p className="text-slate-400">Software Engineer • Python & React Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-thistle transition-colors duration-300"
              >
                <Github size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-thistle transition-colors duration-300"
              >
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-thistle transition-colors duration-300"
              >
                <Twitter size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="mailto:alex.chen@email.com"
                className="text-slate-400 hover:text-thistle transition-colors duration-300"
              >
                <Mail size={20} />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-500">&copy; 2024 Alex Chen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
