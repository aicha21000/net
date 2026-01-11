'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const ShowcaseSection = () => {
    return (
        <section className="py-16 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl font-extrabold text-foreground mb-4">
                        Notre Expertise en Image
                    </h2>
                    <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Découvrez la qualité de nos interventions à travers nos réalisations. Un travail propre, précis et professionnel.
                    </p>

                    <div className="relative w-full max-w-5xl mx-auto h-[300px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-muted group">
                        <Image
                            src="/images/sols.png"
                            alt="Showcase de nos services de nettoyage"
                            fill
                            className="object-contain bg-muted/20"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ShowcaseSection;
