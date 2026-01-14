import GallerySlider from '@/components/GallerySlider';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Galerie - Ô ECLAT | Nos Réalisations',
    description: 'Découvrez notre galerie de réalisations. Ô ECLAT, votre expert en nettoyage et rénovation à Dijon, Besançon et Fontaine Française.',
};

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-background transition-colors duration-300">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-primary to-primary-dark dark:from-primary-dark dark:to-primary py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Notre Galerie
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Découvrez nos réalisations et notre savoir-faire à travers nos projets
                    </p>
                </div>
            </div>

            {/* Gallery Slider */}
            <GallerySlider />

            {/* Additional Info Section */}
            <section className="py-16 bg-muted">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-6">
                        Des Résultats qui Parlent d'Eux-Mêmes
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8">
                        Chaque projet est unique et mérite une attention particulière.
                        Nos équipes professionnelles s'engagent à fournir des résultats
                        exceptionnels qui dépassent vos attentes.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="bg-card p-6 rounded-xl shadow-lg border border-muted">
                            <div className="text-4xl font-bold text-primary dark:text-primary-dark mb-2">
                                100+
                            </div>
                            <p className="text-muted-foreground">Projets Réalisés</p>
                        </div>
                        <div className="bg-card p-6 rounded-xl shadow-lg border border-muted">
                            <div className="text-4xl font-bold text-primary dark:text-primary-dark mb-2">
                                98%
                            </div>
                            <p className="text-muted-foreground">Clients Satisfaits</p>
                        </div>
                        <div className="bg-card p-6 rounded-xl shadow-lg border border-muted">
                            <div className="text-4xl font-bold text-primary dark:text-primary-dark mb-2">
                                10+
                            </div>
                            <p className="text-muted-foreground">Années d'Expérience</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
