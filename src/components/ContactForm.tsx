'use client';

import { useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import FileUpload from './FileUpload';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        fileUrl: '',
    });
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUploadComplete = (url: string) => {
        setFormData(prev => ({ ...prev, fileUrl: url }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // 1. Send Email via API (Priority)
        let emailSuccess = false;
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                emailSuccess = true;
            } else {
                console.error('Email sending failed');
            }
        } catch (error) {
            console.error('Network error requesting email API:', error);
        }

        // 2. Save to Firestore (Backup - Fire and Forget)
        // We don't await this to block the UI if email succeeded
        const saveToFirestore = async () => {
            try {
                await addDoc(collection(db, 'contacts'), {
                    ...formData,
                    createdAt: new Date(),
                });
            } catch (error) {
                console.error('Firestore backup failed (non-critical):', error);
            }
        };
        saveToFirestore();

        // 3. Update UI based on Email result
        if (emailSuccess) {
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '', fileUrl: '' });
            // Optional: Reset status after 5 seconds
            setTimeout(() => setStatus('idle'), 5000);
        } else {
            // If email failed, we hope firestore might work, but usually we show error
            setStatus('error');
        }
    };

    return (
        <div className="bg-background py-16 px-4 sm:px-6 lg:px-8 lg:py-24 transition-colors duration-300">
            <div className="relative max-w-xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                        Contactez-nous
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-muted-foreground">
                        Une question ? Un devis ? Envoyez-nous un message.
                    </p>
                </div>
                <div className="mt-12">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nom</label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    autoComplete="name"
                                    required
                                    aria-required="true"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md bg-gray-50 text-gray-900 border dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    aria-required="true"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md bg-gray-50 text-gray-900 border dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Téléphone</label>
                            <div className="mt-1">
                                <input
                                    type="text"
                                    name="phone"
                                    id="phone"
                                    autoComplete="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md bg-gray-50 text-gray-900 border dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                            <div className="mt-1">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    aria-required="true"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="py-3 px-4 block w-full shadow-sm focus:ring-primary focus:border-primary border-gray-300 rounded-md bg-gray-50 text-gray-900 border dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:focus:ring-blue-500"
                                />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <FileUpload onUploadComplete={handleUploadComplete} />
                        </div>

                        <div className="sm:col-span-2">
                            <button
                                type="submit"
                                disabled={status === 'submitting' || status === 'success'}
                                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                            >
                                {status === 'submitting' ? 'Envoi en cours...' : status === 'success' ? 'Message Envoyé !' : 'Envoyer'}
                            </button>
                        </div>
                        <div className="sm:col-span-2" aria-live="polite">
                            {status === 'success' && (
                                <div className="rounded-md bg-green-50 p-4">
                                    <div className="flex">
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-green-800">
                                                Message envoyé avec succès ! Nous vous recontacterons bientôt.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {status === 'error' && (
                                <div className="rounded-md bg-red-50 p-4">
                                    <div className="flex">
                                        <div className="ml-3">
                                            <p className="text-sm font-medium text-red-800">
                                                Une erreur est survenue. Veuillez réessayer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
