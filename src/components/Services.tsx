'use client';

import { servicesData } from '@/lib/services-data';
import Link from 'next/link';
import { motion } from 'framer-motion';

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

const Services = () => {
    return (
        <section id="services" className="py-20 bg-muted transition-colors duration-300 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl text-primary font-bold tracking-wide uppercase dark:text-primary-dark"
                    >
                        Nos Services
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-foreground sm:text-4xl"
                    >
                        Ce que nous faisons pour vous
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 max-w-2xl text-xl text-muted-foreground mx-auto"
                    >
                        Nous offrons une gamme complète de services de nettoyage adaptés à vos besoins.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mt-16"
                >
                    <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-x-8 md:gap-y-10">
                        {servicesData.map((service) => (
                            <motion.div
                                key={service.title}
                                variants={item}
                            >
                                <Link href={`/services/${service.slug}`} className="block h-full">
                                    <div className="relative bg-card p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-muted h-full hover:-translate-y-1 group">
                                        <dt>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[image:var(--gradient-primary)] text-white shadow-lg group-hover:scale-110 transition-transform">
                                                <service.icon className="h-6 w-6" aria-hidden="true" />
                                            </div>
                                            <p className="ml-16 text-lg leading-6 font-bold text-card-foreground group-hover:text-primary transition-colors">{service.title}</p>
                                        </dt>
                                        <dd className="mt-2 ml-16 text-base text-muted-foreground">
                                            {service.shortDescription}
                                        </dd>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </dl>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
