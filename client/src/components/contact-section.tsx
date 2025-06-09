import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, MessageCircle, Linkedin, Send, Loader2 } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { toast } = useToast();
  const queryClient = useQueryClient();

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description:
          error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in discussing a project with you.",
    );
    window.open(`https://wa.me/15551234567?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let's <span className="text-thistle">Connect</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-thistle">
                  Get In Touch
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-thistle/20 rounded-full flex items-center justify-center">
                      <Mail className="text-thistle" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium">
                        anastansiachepkosgei@gmail.com
                      </p>
                      <p className="text-slate-500 text-sm">Drop me an email</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-deep-purple/20 rounded-full flex items-center justify-center">
                      <SiWhatsapp className="text-deep-purple" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium">
                        +254 711 264 880
                      </p>
                      <p className="text-slate-500 text-sm">
                        WhatsApp me directly
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-light-purple/20 rounded-full flex items-center justify-center">
                      <Linkedin className="text-light-purple" size={20} />
                    </div>
                    <div>
                      <p className="text-slate-300 font-medium">
                        www.linkedin.com/in/anastansia-chepkosgei
                      </p>
                      <p className="text-slate-500 text-sm">
                        Connect professionally
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick WhatsApp Button */}
            <Button
              onClick={openWhatsApp}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
            >
              <SiWhatsapp className="mr-3" size={20} />
              <span className="font-semibold">Chat on WhatsApp</span>
            </Button>
          </div>

          {/* Contact Form */}
          <Card className="bg-slate-800/50 border-slate-700">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-slate-300 mb-2">
                    Name
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-thistle focus:ring-2 focus:ring-thistle/20"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-slate-300 mb-2">
                    Email
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-thistle focus:ring-2 focus:ring-thistle/20"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="subject" className="text-slate-300 mb-2">
                    Subject
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-thistle focus:ring-2 focus:ring-thistle/20"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-slate-300 mb-2">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    required
                    className="bg-slate-700/50 border-slate-600 text-white placeholder-slate-400 focus:border-thistle focus:ring-2 focus:ring-thistle/20 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full bg-gradient-to-r from-thistle to-deep-purple text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-thistle/25 transform hover:scale-105 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-thistle/50"
                >
                  {contactMutation.isPending ? (
                    <div className="flex items-center justify-center space-x-2">
                      <Loader2 className="animate-spin" size={16} />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Send Message</span>
                      <Send size={16} />
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
