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
                <h3 className="text-2xl font-semibold mb-4 text-thistle">The Beginning</h3>
                <p className="text-slate-300 leading-relaxed">
                  My journey into software engineering began during my computer science studies, where I discovered the power of turning ideas into reality through code. What started as curiosity about how websites work evolved into a passion for building full-stack applications.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-thistle/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-thistle">The Evolution</h3>
                <p className="text-slate-300 leading-relaxed">
                  Specializing in Python backend development and React frontend, I've worked on projects ranging from e-commerce platforms to data visualization tools. Each project taught me valuable lessons about clean code, user experience, and scalable architecture.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 hover:border-thistle/30 transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-thistle">Today & Tomorrow</h3>
                <p className="text-slate-300 leading-relaxed">
                  Today, I focus on creating robust, user-centric applications while staying updated with emerging technologies. I believe in writing code that not only works but is maintainable, scalable, and makes a positive impact on users' lives.
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
                  <h4 className="font-semibold text-thistle mb-2">2020 - Started Journey</h4>
                  <p className="text-slate-400 text-sm">Began learning programming fundamentals</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-20 w-4 h-4 bg-deep-purple rounded-full border-4 border-slate-800"></div>
                <div className="bg-gradient-to-br from-deep-purple/10 to-thistle/10 p-6 rounded-xl border border-deep-purple/20">
                  <h4 className="font-semibold text-deep-purple mb-2">2021 - First Projects</h4>
                  <p className="text-slate-400 text-sm">Built personal projects with Python & React</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-20 w-4 h-4 bg-light-purple rounded-full border-4 border-slate-800"></div>
                <div className="bg-gradient-to-br from-light-purple/10 to-thistle/10 p-6 rounded-xl border border-light-purple/20">
                  <h4 className="font-semibold text-light-purple mb-2">2022 - Professional Work</h4>
                  <p className="text-slate-400 text-sm">Joined development teams, shipped features</p>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -left-20 w-4 h-4 bg-thistle rounded-full border-4 border-slate-800 animate-pulse"></div>
                <div className="bg-gradient-to-br from-thistle/10 to-deep-purple/10 p-6 rounded-xl border border-thistle/20">
                  <h4 className="font-semibold text-thistle mb-2">2024 - Present</h4>
                  <p className="text-slate-400 text-sm">Full-stack developer building impactful solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
