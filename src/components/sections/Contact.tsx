import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "swatejsingh91@gmail.com",
      href: "mailto:swatejsingh91@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "+91 8090364310",
      href: "tel:+918090364310"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Unnao, Uttar Pradesh, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      href: "https://github.com/swatejsr",
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/swatejsingh91/",
      color: "hover:text-blue-600"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Get In <span className="text-gradient-accent">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, projects, or just having 
            a conversation about technology and cybersecurity. Let's connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-slide-up">
            <Card className="shadow-card border-0 bg-card h-full card-3d hover-3d">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground tilt-effect">
                  Let's Start a Conversation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <p className="text-muted-foreground">
                  Whether you're looking for a passionate developer, have a project in mind, 
                  or just want to connect, I'd love to hear from you. Feel free to reach out 
                  through any of the channels below.
                </p>

                {/* Contact Details */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className="flex items-center p-4 rounded-lg bg-accent/5 hover:bg-accent/10 transition-spring group card-3d"
                    >
                      <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-spring mr-4 floating-3d">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{info.label}</p>
                        <p className="text-sm text-muted-foreground">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-semibold text-foreground mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link, index) => (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-accent/5 text-accent hover:bg-accent hover:text-accent-foreground transition-spring shadow-card card-3d magnetic-hover floating-3d"
                        aria-label={link.label}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Quick Response Promise */}
                <div className="p-4 rounded-lg bg-gradient-accent/10 border border-accent/20 card-3d pulse-glow">
                  <p className="text-sm text-foreground font-medium mb-1">Quick Response Guarantee</p>
                  <p className="text-xs text-muted-foreground">
                    I typically respond to messages within 24 hours. For urgent matters, 
                    feel free to call directly.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up">
            <Card className="shadow-card border-0 bg-card card-3d hover-3d">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground tilt-effect">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1 border-accent/30 focus:border-accent hover-3d transition-spring"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1 border-accent/30 focus:border-accent hover-3d transition-spring"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="mt-1 border-accent/30 focus:border-accent hover-3d transition-spring"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="mt-1 border-accent/30 focus:border-accent resize-none hover-3d transition-spring"
                      placeholder="Tell me about your project, question, or just say hello..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-accent hover:bg-accent-glow text-accent-foreground shadow-glow transition-spring card-3d magnetic-hover"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-accent-foreground mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2 wiggle-effect" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;