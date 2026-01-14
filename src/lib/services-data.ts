import { Maximize, Layers, Trash2, Sun, Home, Hammer } from 'lucide-react';

export const servicesData = [
    {
        slug: 'vitres',
        title: 'Nettoyage de Vitres',
        shortDescription: 'Clarté et transparence pour toutes vos surfaces vitrées, même en hauteur.',
        fullDescription: 'Nous assurons un nettoyage professionnel de vos vitres, vitrines et baies vitrées. Notre équipe utilise des techniques adaptées pour un résultat sans traces et une luminosité maximale dans vos locaux.',
        features: [
            'Nettoyage de vitres intérieures et extérieures',
            'Entretien des encadrements et rails',
            'Nettoyage de baies vitrées et vérandas',
            'Intervention sur vitrines commerciales',
            'Utilisation de produits respectueux de l\'environnement'
        ],
        icon: Maximize,
        image: '/images/vitre.png'
    },
    {
        slug: 'sols',
        title: 'Entretien des Sols',
        shortDescription: 'Traitement et nettoyage de tous types de sols pour une longévité accrue.',
        fullDescription: 'Qu\'il s\'agisse de carrelage, parquet, thermoplastique ou béton, nous maîtrisons les techniques de nettoyage et de remise en état adaptées à chaque revêtement.',
        features: [
            'Décapage et protection des sols',
            'Shampouinage de moquettes',
            'Nettoyage haute pression',
            'Cristallisation de marbre',
            'Lavage mécanisé (autolaveuse)'
        ],
        icon: Layers,
        image: '/images/sols_net1.png'
    },
    {
        slug: 'bardages',
        title: 'Nettoyage de Bardages',
        shortDescription: 'Redonnez de l\'éclat à vos façades et structures industrielles.',
        fullDescription: 'Le nettoyage de bardage est essentiel pour l\'image de votre bâtiment et sa conservation. Nous intervenons sur tous types de matériaux (métal, bois, composite).',
        features: [
            'Nettoyage basse ou haute pression',
            'Démoussage et traitement préventif',
            'Nettoyage de structures industrielles',
            'Élimination des traces de pollution',
            'Intervention sécurisée en hauteur'
        ],
        icon: Home,
        image: '/images/bardage.png'
    },
    {
        slug: 'panneaux-solaires',
        title: 'Panneaux Solaires',
        shortDescription: 'Optimisez votre rendement énergétique avec un nettoyage régulier.',
        fullDescription: 'La poussière et les saletés peuvent réduire l\'efficacité de vos panneaux solaires jusqu\'à 15%. Un nettoyage régulier est indispensable pour maintenir une production optimale.',
        features: [
            'Nettoyage à l\'eau pure sans produits chimiques',
            'Élimination des fientes et dépôts de pollution',
            'Inspection visuelle de l\'état des panneaux',
            'Optimisation du rendement photovoltaïque',
            'Intervention sur toitures résidentielles et industrielles'
        ],
        icon: Sun,
        image: '/images/panneaux.jpg'
    },
    {
        slug: 'debarras',
        title: 'Service de Débarras',
        shortDescription: 'Libérez vos espaces encombrés rapidement et efficacement.',
        fullDescription: 'Nous vous accompagnons pour vider vos locaux, maisons, caves ou greniers. Nous gérons l\'évacuation et le tri des déchets en centre de traitement agréé.',
        features: [
            'Débarras complet après sinistre ou déménagement',
            'Évacuation de gravats et encombrants',
            'Tri sélectif et mise en décharge',
            'Nettoyage après débarras',
            'Intervention rapide et discrète'
        ],
        icon: Trash2,
        image: '/images/debarras.jpg'
    },
    {
        slug: 'renovation-sinistre',
        title: 'Rénovation des logements après sinistre',
        shortDescription: 'Remise en état complète de logements après dégâts des eaux, incendies ou sinistres divers.',
        fullDescription: 'Suite à un sinistre (dégâts des eaux, incendie, insalubrité ou logement dégradé), nous intervenons rapidement pour remettre votre logement en état. Notre approche globale permet une rénovation efficace, sécurisée et conforme aux normes en vigueur.',
        features: [
            'Déblaiement et évacuation des déchets',
            'Nettoyage approfondi après sinistre',
            'Traitement contre l\'humidité et les moisissures',
            'Réfection des murs, sols et plafonds',
            'Remise en état avant réoccupation ou relocation'
        ],
        icon: Hammer,
        image: '/images/renovation-sinistre.jpg'
    },
];
