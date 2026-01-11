'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="glass fixed w-full z-50 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/images/logo eclat.svg"
                                alt="Ô ECLAT Logo"
                                width={48}
                                height={48}
                                className="h-12 w-auto object-contain dark:brightness-0 dark:invert"
                                style={{ height: '48px', width: 'auto' }}
                            />
                            <span className="text-2xl font-bold text-primary dark:text-primary-dark">
                                Ô ECLAT
                            </span>
                        </Link>
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-gray-700 hover:text-primary transition-colors dark:text-white dark:hover:text-primary-dark font-medium">
                            Accueil
                        </Link>
                        <Link href="/#services" className="text-gray-700 hover:text-primary transition-colors dark:text-white dark:hover:text-primary-dark font-medium">
                            Services
                        </Link>
                        <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors dark:text-white dark:hover:text-primary-dark font-medium">
                            Contact
                        </Link>
                        <ThemeToggle />
                        <Link href="/contact" className="bg-accent text-white px-4 py-2 rounded-md hover:bg-accent/90 transition-colors flex items-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
                            <Phone size={18} className="mr-2" />
                            Devis Gratuit
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center space-x-4">
                        <ThemeToggle />
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-primary focus:outline-none dark:text-gray-300"
                            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
                            aria-expanded={isOpen}
                        >
                            {isOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t dark:bg-gray-900 dark:border-gray-800">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary-dark"
                        >
                            Accueil
                        </Link>
                        <Link
                            href="/#services"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary-dark"
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-gray-700 hover:text-primary transition-colors dark:text-gray-300 dark:hover:text-primary-dark"
                        >
                            Contact
                        </Link>
                        <Link
                            href="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-primary font-semibold hover:text-primary-hover transition-colors dark:text-primary-dark"
                        >
                            Obtenir un devis
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
