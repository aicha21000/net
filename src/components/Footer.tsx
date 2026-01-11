import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import { servicesData } from '@/lib/services-data';

const Footer = () => {
    return (
        <footer className="bg-muted text-foreground pt-12 pb-8 dark:bg-black z-40 relative isolate border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold text-primary">Ô ECLAT</h3>
                        <p className="text-muted-foreground text-sm">
                            Société de nettoyage professionnel. Votre partenaire de confiance pour un résultat impeccable.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Suivez-nous sur Facebook">
                                <Facebook size={20} aria-hidden="true" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Suivez-nous sur Instagram">
                                <Instagram size={20} aria-hidden="true" />
                            </a>
                            <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Suivez-nous sur Twitter">
                                <Twitter size={20} aria-hidden="true" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-foreground">Liens Rapides</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link href="/#services" className="text-muted-foreground hover:text-primary transition-colors">
                                    Nos Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                                    Demander un devis
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-foreground">Nos Services</h4>
                        <ul className="space-y-2">
                            {servicesData.map((service) => (
                                <li key={service.slug}>
                                    <Link
                                        href={`/services/${service.slug}`}
                                        className="text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {service.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-foreground">Contactez-nous</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin size={20} className="text-primary mr-2 mt-1 flex-shrink-0" aria-hidden="true" />
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Fontaine+Française+France"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="Voir l'adresse sur Google Maps"
                                >
                                    Fontaine Française, France
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Phone size={20} className="text-primary mr-2 flex-shrink-0" aria-hidden="true" />
                                <div className="flex flex-col">
                                    <a href="tel:+33615687194" className="text-muted-foreground hover:text-primary transition-colors">06 15 68 71 94</a>
                                    <a href="tel:+33603423673" className="text-muted-foreground hover:text-primary transition-colors">06 03 42 36 73</a>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <Mail size={20} className="text-primary mr-2 flex-shrink-0" aria-hidden="true" />
                                <a
                                    href="mailto:oeclat21@outlook.fr"
                                    className="text-muted-foreground hover:text-primary transition-colors"
                                    aria-label="Envoyer un email à oeclat21@outlook.fr"
                                >
                                    oeclat21@outlook.fr
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
                    <p>&copy; {new Date().getFullYear()} OECLAT. SIRET : 945 000 644 00019. Tous droits réservés.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/mentions-legales" className="hover:text-primary transition-colors">Mentions Légales</Link>
                        <Link href="/politique-de-confidentialite" className="hover:text-primary transition-colors">Confidentialité</Link>
                        <Link href="/cgv" className="hover:text-primary transition-colors">CGV</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
