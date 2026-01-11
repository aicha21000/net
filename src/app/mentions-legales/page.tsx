export default function MentionsLegales() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-8 text-primary">Mentions Légales</h1>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">1. Éditeur du site</h2>
                <p className="text-muted-foreground">
                    Le présent site est édité par la société Ô ECLAT, immatriculée au Registre du Commerce et des Sociétés sous le numéro SIRET 945 000 644 00019.<br />
                    Siège social : Fontaine Française, France.<br />
                    Zones d'intervention : Dijon, Fontaine Française et Besançon.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">2. Directeur de la publication</h2>
                <p className="text-muted-foreground">
                    Le Responsable de la publication est le Gérant de la société Ô ECLAT.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">3. Hébergement</h2>
                <p className="text-muted-foreground">
                    Le site est hébergé par Vercel Inc., 7671 31st St, Suite B, North Highlands, CA 95660, USA.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">4. Propriété intellectuelle</h2>
                <p className="text-muted-foreground">
                    L'ensemble des éléments constituant le site (textes, graphismes, logiciels, photographies, images, logos, etc.) sont la propriété exclusive de OCLAT ou ont fait l'objet d'une autorisation préalable d'utilisation. Toute reproduction totale ou partielle est strictement interdite sans notre accord préalable écrit.
                </p>
            </section>
        </div>
    );
}
