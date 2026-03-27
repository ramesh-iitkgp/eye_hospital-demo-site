import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    content: "I had my LASIK surgery here. The process was incredibly smooth, and the staff made me feel comfortable throughout. Waking up the next day with perfect vision was life-changing!",
    author: "Sarah Jenkins",
    role: "Patient",
    rating: 5
  },
  {
    content: "My father's cataract surgery was handled with utmost professionalism. Dr. Smith explained everything clearly, and the recovery was exactly as predicted. Highly recommended.",
    author: "Michael Chen",
    role: "Patient's Son",
    rating: 5
  },
  {
    content: "The pediatric eye care team is fantastic. They were so patient with my 5-year-old daughter during her eye exam. It's the only hospital she doesn't mind visiting.",
    author: "Emily Rodriguez",
    role: "Mother",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40L40 0H20L0 20M40 40V20L20 40" stroke="currentColor" strokeWidth="1" fill="none" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-blue-300 font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            What Our Patients Say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20"
            >
              <Quote className="h-10 w-10 text-blue-400 mb-6 opacity-50" />
              <p className="text-blue-50 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center justify-between mt-auto">
                <div>
                  <p className="font-bold text-white">{testimonial.author}</p>
                  <p className="text-sm text-blue-300">{testimonial.role}</p>
                </div>
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
