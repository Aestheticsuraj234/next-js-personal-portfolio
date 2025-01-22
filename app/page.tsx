"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Terminal, Briefcase, Code2, ExternalLink, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import  GitHubStats  from "@/components/github-stats";
import { ContactForm } from "@/components/contact-forms";
import { Toaster } from "@/components/ui/toaster";
import { Testimonials } from "@/components/testimonials";
import { Badge } from "@/components/ui/badge";

const technologies = [
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Next.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "TypeScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Redux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
  { name: "GraphQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },

];

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
    features: [
      "Real-time inventory tracking",
      "Secure payment processing",
      "Admin dashboard",
      "Order management"
    ]
  },
  {
    title: "AI-Powered Task Manager",
    description: "Smart task management application that uses AI to prioritize and categorize tasks, with team collaboration features.",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "OpenAI", "MongoDB", "WebSocket"],
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/johndoe/taskmanager",
    features: [
      "AI task prioritization",
      "Real-time collaboration",
      "Custom workflows",
      "Analytics dashboard"
    ]
  },
  {
    title: "Social Media Analytics",
    description: "Comprehensive social media analytics platform providing insights and engagement metrics across multiple platforms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Python", "D3.js", "AWS", "Redis"],
    liveUrl: "https://analytics-demo.com",
    githubUrl: "https://github.com/johndoe/analytics",
    features: [
      "Cross-platform analytics",
      "Custom report generation",
      "Engagement tracking",
      "Trend analysis"
    ]
  }
];
export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-32 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-primary">John Doe</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Full Stack Developer crafting modern web experiences
            </p>
            <div className="flex gap-4">
              <Button variant="default" className="gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </Button>
              <Button variant="outline" className="gap-2">
                <Github className="w-4 h-4" />
                GitHub
              </Button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <Image
              src="/hero.svg"
              alt="Developer Illustration"
              width={500}
              height={500}
              priority
            />
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          <span className="text-primary">Skills</span> & Technologies
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
        >
          {technologies.map((tech, index) => (
            <Card
              key={index}
              className="p-4 flex flex-col items-center justify-center hover:border-primary transition-colors"
            >
              <Image
                src={tech.logo}
                alt={tech.name}
                width={48}
                height={48}
                className="mb-2"
              />
              <span className="text-sm font-medium">{tech.name}</span>
            </Card>
          ))}
        </motion.div>
      </section>
      <Testimonials />

      {/* Projects Section */}
         {/* Projects Section */}
         <section id="projects" className="container mx-auto px-4 py-20">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">
                Featured <span className="text-primary">Projects</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore my latest projects showcasing my expertise in full-stack development,
                from e-commerce platforms to AI-powered applications.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group overflow-hidden border-border/5 bg-card hover:shadow-xl transition-all duration-300">
                  <div className="relative overflow-hidden aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button asChild variant="secondary" size="sm">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild variant="secondary" size="sm">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="gap-2">
                          <Github className="w-4 h-4" />
                          Source
                        </a>
                      </Button>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-secondary/50">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <ul className="space-y-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="w-4 h-4 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

      {/* GitHub Stats Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">
          GitHub <span className="text-primary">Activity</span>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <GitHubStats username="Aestheticsuraj234" />
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Let's <span className="text-primary">Connect</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="flex gap-4 mb-8">
              <Button variant="outline" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <a href="mailto:john@example.com">
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
            <Card className="p-6">
              <ContactForm />
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center items-center mt-20"
          >
            <Image
              src="/contact.svg"
              alt="Contact Illustration"
              width={800}
              height={800}
            />
          </motion.div>
        </div>
      </section>
      <Toaster />
    </main>
  );
}