import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-800/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My <span className="text-thistle">Story</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            The journey from curiosity to crafting digital solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 hover:border-thistle/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-thistle">
                  The Beginning
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  My journey into software engineering began during my computer
                  science studies, where I saw how code could be a tool for
                  real-world impact. What began as curiosity about how systems
                  work quickly became a drive to build meaningful applications
                  that solve problems in underserved communities.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-thistle/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-thistle">
                  The Evolution
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  With a foundation in IT technical support and network
                  administration, I developed strong diagnostic and
                  communication skills. As I transitioned into Python backend
                  development, I built projects ranging from data dashboards to
                  community platforms, deepening my expertise in clean code, API
                  design, and scalable systems that support social good.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-thistle/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-thistle">
                  Today & Tomorrow
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  Today, I'm refining my backend and DevOps skills through the
                  ALX Pro Backend Program, building robust, secure systems with
                  tools like Docker, PostgreSQL, and FastAPI. I aim to keep
                  growing as a backend engineer who creates solutions that are
                  not only technically sound but also address the global
                  challenges and global opportunities.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Visual Timeline */}
          <div className="relative">
            <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-thistle to-deep-purple"></div>

            <div className="space-y-12 pl-20">
              <div className="relative">
                <div className="absolute -left-20 w-4 h-4 bg-thistle rounded-full border-4 border-slate-800"></div>
                <div className="bg-gradient-to-br from-thistle/10 to-deep-purple/10 p-6 rounded-xl border border-thistle/20">
                  <h4 className="font-semibold text-thistle mb-2">
                    2021 - Started Journey
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Graduated with a degree in Computer Science
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-20 w-4 h-4 bg-deep-purple rounded-full border-4 border-slate-800"></div>
                <div className="bg-gradient-to-br from-deep-purple/10 to-thistle/10 p-6 rounded-xl border border-deep-purple/20">
                  <h4 className="font-semibold text-deep-purple mb-2">
                    2021 - First Projects
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Built personal projects with Python
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-20 w-4 h-4 bg-light-purple rounded-full border-4 border-slate-800"></div>
                <div className="bg-gradient-to-br from-light-purple/10 to-thistle/10 p-6 rounded-xl border border-light-purple/20">
                  <h4 className="font-semibold text-light-purple mb-2">
                    2022 - Professional Expereince
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Worked in IT technical support and network administration,
                    strengthening my troubleshooting, systems management, and
                    communication skills.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-20 w-4 h-4 bg-light-purple rounded-full border-4 border-slate-800"></div>
                <div className="bg-gradient-to-br from-light-purple/10 to-thistle/10 p-6 rounded-xl border border-light-purple/20">
                  <h4 className="font-semibold text-light-purple mb-2">
                    2024 - Transition to Development
                  </h4>
                  <p className="text-slate-400 text-sm">
                    Refocused on backend development—relearning Python and
                    building projects with Flask and Django. Started ALX Pro
                    Backend Program to deepen my skills in backend development,
                    DevOps, and cloud deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
