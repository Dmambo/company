"use client"

import { motion } from 'framer-motion';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import Link from 'next/link';
import RequestQuoteModal from '@/components/modal';
import { ModalProvider } from '@/components/ui/animated-modal';
import RequestQuote from './../quote/page';
import {Button} from '@/components/ui/button';

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 100,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <ModalProvider>
    <div className="mx-auto p-6 md:p-12 bg-black text-white rounded-lg shadow-lg">
      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-gray-300 mb-16 tracking-wide">Our Services</h1>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

        {/* Website Creation */}
        <motion.div 
          className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 100 }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6 overflow-hidden rounded-lg">
            <Image
              src="/web.jpg"
              alt="Website Creation"
              width={500}
              height={300}
              className="rounded-lg transform transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Website Creation</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We craft custom websites tailored to your business needs. From design to development, we ensure your site is not only visually appealing but also functional, user-friendly, and optimized for growth.
            </p>
            
              <div>
                <Link
                href="/quote">
                  <Button>Get Quote</Button>          
                </Link>
              </div>
            
          </div>
        </motion.div>

        {/* Local SEO */}
        <motion.div 
          className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 100 }}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6 overflow-hidden rounded-lg">
            <Image
              src="/seo.jpg"
              alt="Local SEO"
              width={500}
              height={300}
              className="rounded-lg transform transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Local SEO</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our Local SEO services help your business stand out in local searches. We optimize your online presence to attract more local customers, ensuring you rank higher in search results.
            </p>
            
              <div>
             <Link
                href="/quote">
                  <Button>Get Quote</Button>          
                </Link>
              </div>
            
          </div>
        </motion.div>

        {/* Maintenance */}
        <motion.div 
          className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 100 }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6 overflow-hidden rounded-lg">
            <Image
              src="/maintain.jpg"
              alt="Maintenance"
              width={500}
              height={300}
              className="rounded-lg transform transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Maintenance</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Keep your website running smoothly with our maintenance services. We handle regular updates, security checks, and performance optimization, so you can focus on your business.
            </p>
            
              <div>
             <Link
                href="/quote">
                  <Button>Get Quote</Button>          
                </Link>
              </div>
            
          </div>
        </motion.div>

        {/* Support */}
        <motion.div 
          className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 100 }}
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="md:w-1/2 mb-6 md:mb-0 md:mr-6 overflow-hidden rounded-lg">
            <Image
              src="/support.jpg"
              alt="Support"
              width={500}
              height={300}
              className="rounded-lg transform transition-transform duration-300"
            />
          </div>
          <div className="md:w-1/2">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Support</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our support services provide you with the assistance you need, whenever you need it. Whether it’s troubleshooting, making updates, or offering advice, our team is here to help.
            </p>
            
              <div>
             <Link
                href="/quote">
                  <Button>Get Quote</Button>          
                </Link>
              </div>
            
          </div>
        </motion.div>

      </div>
    </div>
    </ModalProvider>
  );
};

export default Services;
