'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative bg-background overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32 pt-10 px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-20 lg:px-8 xl:pt-28">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-4xl tracking-tight font-extrabold text-foreground sm:text-5xl md:text-6xl"
                        >
                            <span className="block xl:inline">La propreté,</span>{' '}
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-dark xl:inline">
                                notre priorité.
                            </span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-3 text-base text-muted-foreground sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                        >
                            Votre société de nettoyage à Dijon, Fontaine Française et Besançon. Nous rendons vos espaces impeccables avec une équipe qualifiée et des produits écologiques.
                        </motion.p>
                        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="rounded-md shadow"
                            >
                                <Link
                                    href="/contact"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[image:var(--gradient-primary)] hover:bg-[image:var(--gradient-hover)] hover:shadow-lg transition-all transform hover:-translate-y-1 md:py-4 md:text-lg md:px-10"
                                >
                                    Obtenir un devis
                                </Link>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.4 }}
                                className="mt-3 sm:mt-0 sm:ml-3"
                            >
                                <Link
                                    href="#services"
                                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-primary/10 hover:bg-primary/20 md:py-4 md:text-lg md:px-10"
                                >
                                    Nos Services
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative lg:col-span-6 lg:mt-0 lg:flex lg:items-center"
                    >
                        <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                src="/images/net.png"
                                alt="Nettoyage professionnel"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
