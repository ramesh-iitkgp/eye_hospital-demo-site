import React from 'react';
import { ArrowRight, Calendar, Shield, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  return (
    <div className="relative bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-slate-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-10 md:pt-20">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="sm:text-center lg:text-left"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-slate-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">World-Class Eye Care</span>{' '}
                <span className="block text-blue-600 xl:inline">For A Brighter Tomorrow</span>
              </h1>
              <p className="mt-3 text-base text-slate-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Experience crystal clear vision with our advanced technology and expert ophthalmologists. We provide comprehensive eye care services from routine checkups to complex surgeries.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-all">
                    Book an Appointment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a href="#services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-all">
                    Our Services
                  </a>
                </div>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&q=80&w=2070"
          alt="Doctor examining patient's eyes"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply" />
      </div>

      {/* Quick Stats/Features Bar */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 z-20 hidden lg:block">
        <div className="bg-white rounded-xl shadow-xl p-6 grid grid-cols-3 gap-8 border border-slate-100">
          <div className="flex items-center space-x-4">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
              <Shield size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Advanced Tech</h3>
              <p className="text-sm text-slate-500">State-of-the-art equipment</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-l border-slate-100 pl-8">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
              <Award size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Expert Doctors</h3>
              <p className="text-sm text-slate-500">25+ years of experience</p>
            </div>
          </div>
          <div className="flex items-center space-x-4 border-l border-slate-100 pl-8">
            <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
              <Calendar size={24} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">Easy Booking</h3>
              <p className="text-sm text-slate-500">24/7 online appointments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
