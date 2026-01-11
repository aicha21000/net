import { servicesData } from '@/lib/services-data';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export async function generateStaticParams() {
    return servicesData.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = servicesData.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <div className="bg-background min-h-screen transition-colors duration-300">
            <div className="relative h-[500px] w-full">
                <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover object-[center_75%]"
                    priority
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
                        {service.title}
                    </h1>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Link
                    href="/#services"
                    className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors dark:text-blue-400 dark:hover:text-blue-300"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Retour aux services
                </Link>

                <div className="bg-card rounded-2xl shadow-xl p-8 border border-muted">
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-xl text-muted-foreground mb-8 font-medium">
                            {service.fullDescription}
                        </p>

                        <h2 className="text-2xl font-bold text-foreground mb-6">Ce que nous proposons :</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            {service.features.map((feature, index) => (
                                <div key={index} className="flex items-start">
                                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                    <span className="text-foreground">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-[image:var(--gradient-primary)] rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all"
                        >
                            Demander un devis pour ce service
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
