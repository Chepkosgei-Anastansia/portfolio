import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Eye, Calendar } from "lucide-react";

export default function ResumeSection() {
  const handleDownloadResume = () => {
    // Create a simple resume PDF download
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Alex_Chen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    window.open('/api/resume/view', '_blank');
  };

  return (
    <section id="resume" className="py-20 bg-slate-800/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Download My <span className="text-thistle">Resume</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Get a comprehensive overview of my experience, skills, and achievements
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Resume Preview Card */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-thistle/30 transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-thistle/20 to-deep-purple/20 rounded-3xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="text-thistle" size={40} />
                </div>
                <h3 className="text-2xl font-semibold text-thistle mb-2">Professional Resume</h3>
                <p className="text-slate-400">Complete career overview with detailed experience</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-thistle rounded-full mr-3"></div>
                  <span>5+ years of software development experience</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-deep-purple rounded-full mr-3"></div>
                  <span>Python & React specialization</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-light-purple rounded-full mr-3"></div>
                  <span>Full-stack project portfolio</span>
                </div>
                <div className="flex items-center text-slate-300">
                  <div className="w-2 h-2 bg-thistle rounded-full mr-3"></div>
                  <span>Professional certifications & education</span>
                </div>
              </div>

              <div className="flex flex-col space-y-3">
                <Button
                  onClick={handleViewResume}
                  variant="outline"
                  className="border-thistle text-thistle hover:bg-thistle hover:text-slate-900 transition-all duration-300"
                >
                  <Eye className="mr-2" size={18} />
                  Preview Resume
                </Button>
                
                <Button
                  onClick={handleDownloadResume}
                  className="bg-gradient-to-r from-thistle to-deep-purple text-white hover:shadow-lg hover:shadow-thistle/25 transform hover:scale-105 transition-all duration-300"
                >
                  <Download className="mr-2" size={18} />
                  Download PDF
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Resume Stats Card */}
          <Card className="bg-slate-800/50 border-slate-700 hover:border-thistle/30 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-semibold text-light-purple mb-6">Resume Highlights</h3>
              
              <div className="space-y-6">
                <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-xl">
                  <div>
                    <p className="text-slate-400 text-sm">Years of Experience</p>
                    <p className="text-2xl font-bold text-thistle">5+</p>
                  </div>
                  <div className="w-12 h-12 bg-thistle/20 rounded-full flex items-center justify-center">
                    <Calendar className="text-thistle" size={24} />
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-xl">
                  <div>
                    <p className="text-slate-400 text-sm">Projects Completed</p>
                    <p className="text-2xl font-bold text-deep-purple">20+</p>
                  </div>
                  <div className="w-12 h-12 bg-deep-purple/20 rounded-full flex items-center justify-center">
                    <FileText className="text-deep-purple" size={24} />
                  </div>
                </div>

                <div className="flex justify-between items-center p-4 bg-slate-700/30 rounded-xl">
                  <div>
                    <p className="text-slate-400 text-sm">Technologies Mastered</p>
                    <p className="text-2xl font-bold text-light-purple">15+</p>
                  </div>
                  <div className="w-12 h-12 bg-light-purple/20 rounded-full flex items-center justify-center">
                    <FileText className="text-light-purple" size={24} />
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gradient-to-br from-thistle/10 to-deep-purple/10 rounded-xl border border-thistle/20">
                <p className="text-slate-300 text-sm text-center">
                  <span className="text-thistle font-semibold">Last Updated:</span> June 2024
                </p>
                <p className="text-slate-400 text-xs text-center mt-1">
                  Resume includes latest projects and certifications
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-6">
              <h4 className="text-lg font-semibold text-thistle mb-3">Need a Custom Format?</h4>
              <p className="text-slate-400 mb-4">
                I can provide my resume in different formats or create a custom version tailored to your specific requirements.
              </p>
              <Button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                variant="outline"
                size="sm"
                className="border-slate-600 text-slate-400 hover:border-thistle hover:text-thistle transition-all duration-300"
              >
                Contact Me for Custom Format
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}