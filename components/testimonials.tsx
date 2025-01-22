"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    content: "John's ability to transform our vision into reality was exceptional. His technical expertise and attention to detail made our project a huge success.",
  },
  {
    name: "Michael Chen",
    role: "CTO at InnovateLabs",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
    content: "Working with John was a game-changer for our startup. His full-stack expertise and problem-solving skills are truly remarkable.",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager at DevCorp",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    content: "John not only delivered outstanding code but also brought innovative solutions to our challenges. His collaborative approach made him a valuable team member.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="container mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-12 text-center">
        Client <span className="text-primary">Testimonials</span>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="p-6 h-full flex flex-col bg-card border-border/5">
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary opacity-50" />
              </div>
              <p className="text-muted-foreground mb-6 flex-grow">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}