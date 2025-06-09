import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Egerton University",
    period: "2016 - 2021",
    gpa: "2:1",
    description:
      "Focused on software engineering principles, data structures, algorithms, and web development. Completed capstone project building a full-stack e-commerce platform.",
    achievements: [
      "Mentored high school girls in coding via Technovation.",
      "Secretary General of the Computer Science Club.",
      "Won a team innovation challenge at a university hackathon.",
    ],
    coursework: [
      "Data Structures & Algorithms",
      "Software Engineering",
      "Database Systems",
      "Web Development",
      "Machine Learning",
      "Computer Networks",
    ],
  },
  {
    degree: " Pro Backened Web Development Bootcamp",
    institution: "ALX",
    period: "2025",
    gpa: "",
    description:
      "Intensive 8-month program focused on modern web development technologies including React, Node.js, Python, and cloud deployment.",
    achievements: [
      "Built scalable backend systems with Python and microservices.",
      "Used Docker and Kubernetes for DevOps tasks.",
      "Completed a real-world backend project.",
    ],
    coursework: [
      "Profesional Foundations",
      "Javascript",
      "Python & Django",
      "Cloud Deployment",
      "API Development",
      "Microservices",
      "Agile Methodologies",
      "Devops:CI/CD, Dockers,Kubernetes",
    ],
  },
];

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "2023",
    credentialId: "AWS-CSA-2023-001",
  },
  {
    title: "Azure Fundamentals",
    issuer: "Python Institute",
    date: "2020",
    credentialId: "PCPP-2022-456",
  },
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Education & <span className="text-thistle">Certifications</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Academic foundation and continuous learning in technology
          </p>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-thistle mb-8 flex items-center">
            <GraduationCap className="mr-3" size={28} />
            Education
          </h3>

          <div className="space-y-8">
            {educationData.map((education, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-thistle/30 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Main Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-semibold text-white mb-2">
                            {education.degree}
                          </h4>
                          <p className="text-thistle font-medium text-lg">
                            {education.institution}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center text-slate-400 mb-1">
                            <Calendar size={16} className="mr-2" />
                            {education.period}
                          </div>
                          <p className="text-deep-purple font-semibold">
                            {education.gpa}
                          </p>
                        </div>
                      </div>

                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {education.description}
                      </p>

                      <div className="mb-6">
                        <h5 className="text-light-purple font-semibold mb-3 flex items-center">
                          <Award className="mr-2" size={18} />
                          Achievements
                        </h5>
                        <ul className="space-y-2">
                          {education.achievements.map(
                            (achievement, achIndex) => (
                              <li
                                key={achIndex}
                                className="text-slate-400 flex items-center"
                              >
                                <div className="w-2 h-2 bg-thistle rounded-full mr-3"></div>
                                {achievement}
                              </li>
                            ),
                          )}
                        </ul>
                      </div>
                    </div>

                    {/* Coursework */}
                    <div>
                      <h5 className="text-light-purple font-semibold mb-4">
                        Key Coursework
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {education.coursework.map((course, courseIndex) => (
                          <Badge
                            key={courseIndex}
                            variant="secondary"
                            className="bg-slate-700/50 text-slate-300 hover:bg-thistle/20 hover:text-thistle transition-colors duration-200"
                          >
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-thistle mb-8 flex items-center">
            <Award className="mr-3" size={28} />
            Professional Certifications
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="bg-slate-800/50 border-slate-700 hover:border-thistle/30 transition-all duration-300 hover:transform hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-thistle/20 to-deep-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="text-thistle" size={32} />
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-thistle font-medium mb-1">{cert.issuer}</p>
                  <p className="text-slate-400 text-sm mb-3">{cert.date}</p>

                  <Badge
                    variant="outline"
                    className="border-slate-600 text-slate-400 text-xs"
                  >
                    ID: {cert.credentialId}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
