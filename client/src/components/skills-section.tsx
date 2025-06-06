import { Card, CardContent } from "@/components/ui/card";
import { Code, Server, Settings, Brain } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code,
    color: "text-thistle",
    bgColor: "from-thistle/20 to-deep-purple/20",
    skills: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "text-deep-purple",
    bgColor: "from-deep-purple/20 to-thistle/20",
    skills: [
      { name: "Python", level: 95 },
      { name: "Django", level: 88 },
      { name: "FastAPI", level: 82 },
      { name: "PostgreSQL", level: 78 }
    ]
  },
  {
    title: "DevOps",
    icon: Settings,
    color: "text-light-purple",
    bgColor: "from-light-purple/20 to-thistle/20",
    skills: [
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Git", level: 90 },
      { name: "CI/CD", level: 70 }
    ]
  },
  {
    title: "Other",
    icon: Brain,
    color: "text-thistle",
    bgColor: "from-thistle/20 to-light-purple/20",
    skills: [
      { name: "System Design", level: 75 },
      { name: "Testing", level: 82 },
      { name: "Agile", level: 85 },
      { name: "UI/UX", level: 70 }
    ]
  }
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Skills & <span className="text-thistle">Technologies</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Technologies I work with to build modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="bg-slate-800/50 border-slate-700 hover:border-thistle/30 transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${category.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className={`text-2xl ${category.color}`} size={32} />
                  </div>
                  <h3 className={`text-xl font-semibold ${category.color}`}>{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-slate-300">{skill.name}</span>
                      <div className="w-24 bg-slate-700 rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${
                            index === 0 ? 'from-thistle to-deep-purple' :
                            index === 1 ? 'from-deep-purple to-thistle' :
                            index === 2 ? 'from-light-purple to-thistle' :
                            'from-thistle to-light-purple'
                          } h-2 rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
