import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 lg:mb-0"
          >
            <div className="relative">
              <img
                className="rounded-2xl shadow-2xl object-cover w-full h-[500px]"
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000"
                alt="Surgeon performing eye surgery"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <p className="text-4xl font-extrabold mb-1">25+</p>
                <p className="text-blue-100 font-medium">Years of Excellence</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About VisionCare</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Pioneering Vision Care Since 1998
            </p>
            <p className="text-lg text-slate-600 mb-8">
              VisionCare Eye Hospital is a premier institution dedicated to providing world-class eye care. Our team of highly skilled ophthalmologists uses cutting-edge technology to deliver precise diagnoses and effective treatments.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'NABH Accredited Eye Hospital',
                'Over 100,000+ Successful Surgeries',
                'State-of-the-art Operation Theaters',
                'Dedicated Pediatric Eye Care Wing',
                '24/7 Emergency Eye Trauma Care'
              ].map((item, i) => (
                <div key={i} className="flex items-center">
                  <CheckCircle2 className="h-6 w-6 text-emerald-500 mr-3 flex-shrink-0" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-slate-900 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-800 transition-colors">
              More About Our Journey
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
