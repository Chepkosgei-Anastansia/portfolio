import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Python/Django backend and React frontend. Features include user authentication, payment processing, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "React", "Django"],
    github: "#",
    live: "#"
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization dashboard built with Python data processing backend and interactive React frontend with D3.js charts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "React", "D3.js"],
    github: "#",
    live: "#"
  },
  {
    title: "Task Manager",
    description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "React", "WebSocket"],
    github: "#",
    live: "#"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="text-thistle">Projects</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="group relative bg-slate-800/50 border-slate-700 hover:border-thistle/30 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>
              
              <CardContent className="relative p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.github} className="text-thistle hover:text-light-purple transition-colors">
                        <Github size={18} />
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={project.live} className="text-thistle hover:text-light-purple transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <p className="text-slate-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className={`px-3 py-1 text-xs font-medium ${
                        techIndex === 0 ? 'bg-thistle/20 text-thistle' :
                        techIndex === 1 ? 'bg-deep-purple/20 text-deep-purple' :
                        'bg-light-purple/20 text-light-purple'
                      }`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-thistle text-thistle hover:bg-thistle hover:text-slate-900 transition-all duration-300">
            View All Projects
            <ExternalLink className="ml-2" size={16} />
          </Button>
        </div>
      </div>
    </section>
  );
}
