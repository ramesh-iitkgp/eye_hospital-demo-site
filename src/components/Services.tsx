import React from 'react';
import { motion } from 'motion/react';
import { Eye, Glasses, Activity, Droplet, Sun, Zap } from 'lucide-react';

const services = [
  {
    title: 'Cataract Surgery',
    description: 'Advanced micro-incision cataract surgery with premium IOLs for spectacle-free vision.',
    icon: Eye,
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'LASIK & Refractive',
    description: 'Get rid of glasses and contact lenses with our bladeless, customized LASIK procedures.',
    icon: Zap,
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Glaucoma Care',
    description: 'Early detection and comprehensive management of glaucoma to prevent vision loss.',
    icon: Activity,
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Retina Services',
    description: 'Expert treatment for diabetic retinopathy, macular degeneration, and retinal detachments.',
    icon: Sun,
    color: 'bg-amber-100 text-amber-600',
  },
  {
    title: 'Cornea Clinic',
    description: 'Specialized care for corneal diseases, keratoconus, and corneal transplantation.',
    icon: Droplet,
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    title: 'Pediatric Ophthalmology',
    description: 'Gentle, specialized eye care for children including squint correction and lazy eye treatment.',
    icon: Glasses,
    color: 'bg-purple-100 text-purple-600',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Our Specialties</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Comprehensive Eye Care Services
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-500 mx-auto">
            We offer a full spectrum of ophthalmic services using the latest technology and evidence-based treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.color} group-hover:scale-110 transition-transform`}>
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 mb-4 line-clamp-3">{service.description}</p>
              <a href="#" className="text-blue-600 font-medium inline-flex items-center group-hover:text-blue-700">
                Learn more <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
