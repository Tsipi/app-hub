type Translations = {
  about: string
  products: string
  contact: string
  login: string
  signup: string
  viewAllProducts: string
  heroTitle: string
  heroSubtitle: string
  featuredProducts: string
  latestUpdates: string
  readMore: string
  exploreAll: string
  categories: string
  popularItems: string
  newArrivals: string
  specialOffers: string
  viewDetails: string
  addToCart: string
  price: string
  description: string
  specifications: string
  reviews: string
  rating: string
  relatedProducts: string
  readyToStart: string
  joinCustomers: string
  noCreditCard: string
  features: string[]
  featureDescriptions: string[]
  company: string
  companyDescription: string
  aiProducts: string
  cloudProducts: string
  securityProducts: string
  analyticsProducts: string
  resources: string
  blog: string
  documentation: string
  support: string
  community: string
  legal: string
  privacyPolicy: string
  termsOfService: string
  cookiePolicy: string
  contactUs: string
  allRightsReserved: string
  accessibility: string
  sitemap: string
  aboutUs: string
  careers: string
  press: string
  help: string
  newsletter: string
  newsletterPlaceholder: string
  subscribe: string
  socialMedia: string
  paymentMethods: string
  securePayment: string
  customerService: string
  satisfaction: string

  // Mega Menu
  softwareSolutions: string
  cloudServices: string
  analyticsDescription: string
  ecommerceSuite: string
  ecommerceDescription: string
  securityDescription: string
  integrationApi: string
  integrationDescription: string
  cloudDescription: string
  dedicatedServers: string
  serversDescription: string
  mobileSolutions: string
  mobileDescription: string
  performanceOptimization: string
  performanceDescription: string
}

export type TranslationKey = keyof Translations

export const translations: Record<"en" | "fr" | "es" | "de" | "he", Translations> = {
  en: {
    // Navbar
    about: "About",
    products: "Products",
    contact: "Contact Us",
    login: "Login",
    signup: "Sign Up",
    viewAllProducts: "View all products →",

    // Main Content
    heroTitle: "Welcome to AppHub",
    heroSubtitle: "A modern, responsive SaaS platform for all your application needs.",
    featuredProducts: "Featured Products",
    latestUpdates: "Latest Updates",
    readMore: "Read More",
    exploreAll: "Explore Products",
    categories: "Categories",
    popularItems: "Popular Items",
    newArrivals: "New Arrivals",
    specialOffers: "Special Offers",
    viewDetails: "View Details",
    addToCart: "Add to Cart",
    price: "Price",
    description: "Description",
    specifications: "Specifications",
    reviews: "Reviews",
    rating: "Rating",
    relatedProducts: "Related Products",
    readyToStart: "Ready to get started?",
    joinCustomers: "Join thousands of satisfied customers using our products.",
    noCreditCard: "No credit card required. Free trial for 14 days.",
    features: [
      "Powerful Analytics",
      "Secure Infrastructure",
      "Easy Integration"
    ],
    featureDescriptions: [
      "Get detailed insights and analytics to make data-driven decisions.",
      "Enterprise-grade security to protect your data and applications.",
      "Seamlessly integrate with your existing tools and workflows."
    ],

    // Footer
    company: "Company",
    companyDescription: "Building amazing digital products, brands, and experiences.",
    aiProducts: "AI Solutions",
    cloudProducts: "Cloud Hosting",
    securityProducts: "Security Tools",
    analyticsProducts: "Analytics Platform",
    resources: "Resources",
    blog: "Blog",
    documentation: "Documentation",
    support: "Support",
    community: "Community",
    legal: "Legal",
    privacyPolicy: "Privacy Policy",
    termsOfService: "Terms of Service",
    cookiePolicy: "Cookie Policy",
    contactUs: "Contact Us",
    allRightsReserved: "All rights reserved.",
    accessibility: "Accessibility",
    sitemap: "Sitemap",
    aboutUs: "About Us",
    careers: "Careers",
    press: "Press",
    help: "Help",
    newsletter: "Subscribe to our newsletter",
    newsletterPlaceholder: "Enter your email",
    subscribe: "Subscribe",
    socialMedia: "Follow Us",
    paymentMethods: "Payment Methods",
    securePayment: "Secure Payment",
    customerService: "Customer Service",
    satisfaction: "100% Satisfaction Guarantee",

    // Mega Menu
    softwareSolutions: "Software Solutions",
    cloudServices: "Cloud Services",
    analyticsDescription: "Advanced data analytics and visualization tools",
    ecommerceSuite: "E-commerce Suite",
    ecommerceDescription: "Complete solution for online stores",
    securityDescription: "Enterprise-grade security solutions",
    integrationApi: "Integration APIs",
    integrationDescription: "Connect your systems seamlessly",
    cloudDescription: "Scalable and reliable cloud infrastructure",
    dedicatedServers: "Dedicated Servers",
    serversDescription: "High-performance dedicated hardware",
    mobileSolutions: "Mobile Solutions",
    mobileDescription: "Cross-platform mobile development tools",
    performanceOptimization: "Performance Optimization",
    performanceDescription: "Speed up your applications"
  },
  fr: {
    // Navbar
    about: "À propos",
    products: "Produits",
    contact: "Contactez-nous",
    login: "Connexion",
    signup: "S'inscrire",
    viewAllProducts: "Voir tous les produits →",

    // Main Content
    heroTitle: "Bienvenue sur AppHub",
    heroSubtitle: "Une plateforme SaaS moderne et réactive pour tous vos besoins applicatifs.",
    featuredProducts: "Produits en Vedette",
    latestUpdates: "Dernières Mises à Jour",
    readMore: "Lire Plus",
    exploreAll: "Explorer les Produits",
    categories: "Catégories",
    popularItems: "Articles Populaires",
    newArrivals: "Nouveautés",
    specialOffers: "Offres Spéciales",
    viewDetails: "Voir les Détails",
    addToCart: "Ajouter au Panier",
    price: "Prix",
    description: "Description",
    specifications: "Spécifications",
    reviews: "Avis",
    rating: "Note",
    relatedProducts: "Produits Similaires",
    readyToStart: "Prêt à commencer ?",
    joinCustomers: "Rejoignez des milliers de clients satisfaits utilisant nos produits.",
    noCreditCard: "Aucune carte de crédit requise. Essai gratuit de 14 jours.",
    features: [
      "Analyses Puissantes",
      "Infrastructure Sécurisée",
      "Intégration Facile"
    ],
    featureDescriptions: [
      "Obtenez des analyses détaillées pour prendre des décisions basées sur les données.",
      "Sécurité de niveau entreprise pour protéger vos données et applications.",
      "Intégration transparente avec vos outils et flux de travail existants."
    ],

    // Footer
    company: "Entreprise",
    companyDescription: "Création de produits numériques, marques et expériences exceptionnels.",
    aiProducts: "Solutions IA",
    cloudProducts: "Hébergement Cloud",
    securityProducts: "Outils de Sécurité",
    analyticsProducts: "Plateforme d'Analyse",
    resources: "Ressources",
    blog: "Blog",
    documentation: "Documentation",
    support: "Support",
    community: "Communauté",
    legal: "Légal",
    privacyPolicy: "Politique de Confidentialité",
    termsOfService: "Conditions d'Utilisation",
    cookiePolicy: "Politique des Cookies",
    contactUs: "Contactez-nous",
    allRightsReserved: "Tous droits réservés.",
    accessibility: "Accessibilité",
    sitemap: "Plan du Site",
    aboutUs: "À Propos",
    careers: "Carrières",
    press: "Presse",
    help: "Aide",
    newsletter: "Abonnez-vous à notre newsletter",
    newsletterPlaceholder: "Entrez votre email",
    subscribe: "S'abonner",
    socialMedia: "Suivez-nous",
    paymentMethods: "Moyens de Paiement",
    securePayment: "Paiement Sécurisé",
    customerService: "Service Client",
    satisfaction: "Garantie Satisfaction 100%",

    // Mega Menu
    softwareSolutions: "Solutions Logicielles",
    cloudServices: "Services Cloud",
    analyticsDescription: "Outils avancés d'analyse et de visualisation de données",
    ecommerceSuite: "Suite E-commerce",
    ecommerceDescription: "Solution complète pour les boutiques en ligne",
    securityDescription: "Solutions de sécurité de niveau entreprise",
    integrationApi: "APIs d'Intégration",
    integrationDescription: "Connectez vos systèmes en toute transparence",
    cloudDescription: "Infrastructure cloud évolutive et fiable",
    dedicatedServers: "Serveurs Dédiés",
    serversDescription: "Matériel haute performance dédié",
    mobileSolutions: "Solutions Mobiles",
    mobileDescription: "Outils de développement multiplateforme",
    performanceOptimization: "Optimisation des Performances",
    performanceDescription: "Accélérez vos applications"
  },
  es: {
    // Navbar
    about: "Acerca de",
    products: "Productos",
    contact: "Contáctenos",
    login: "Iniciar sesión",
    signup: "Registrarse",
    viewAllProducts: "Ver todos los productos →",

    // Main Content
    heroTitle: "Bienvenido a AppHub",
    heroSubtitle: "Una plataforma SaaS moderna y receptiva para todas tus necesidades de aplicaciones.",
    featuredProducts: "Productos Destacados",
    latestUpdates: "Últimas Actualizaciones",
    readMore: "Leer Más",
    exploreAll: "Explorar Productos",
    categories: "Categorías",
    popularItems: "Artículos Populares",
    newArrivals: "Nuevos Lanzamientos",
    specialOffers: "Ofertas Especiales",
    viewDetails: "Ver Detalles",
    addToCart: "Añadir al Carrito",
    price: "Precio",
    description: "Descripción",
    specifications: "Especificaciones",
    reviews: "Reseñas",
    rating: "Calificación",
    relatedProducts: "Productos Relacionados",
    readyToStart: "¿Listo para comenzar?",
    joinCustomers: "Únete a miles de clientes satisfechos usando nuestros productos.",
    noCreditCard: "Sin tarjeta de crédito. Prueba gratuita de 14 días.",
    features: [
      "Análisis Potente",
      "Infraestructura Segura",
      "Integración Fácil"
    ],
    featureDescriptions: [
      "Obtén información detallada para tomar decisiones basadas en datos.",
      "Seguridad de nivel empresarial para proteger tus datos y aplicaciones.",
      "Integración perfecta con tus herramientas y flujos de trabajo existentes."
    ],

    // Footer
    company: "Empresa",
    companyDescription: "Creando productos digitales, marcas y experiencias increíbles.",
    aiProducts: "Soluciones de IA",
    cloudProducts: "Alojamiento en la Nube",
    securityProducts: "Herramientas de Seguridad",
    analyticsProducts: "Plataforma de Análisis",
    resources: "Recursos",
    blog: "Blog",
    documentation: "Documentación",
    support: "Soporte",
    community: "Comunidad",
    legal: "Legal",
    privacyPolicy: "Política de Privacidad",
    termsOfService: "Términos de Servicio",
    cookiePolicy: "Política de Cookies",
    contactUs: "Contáctenos",
    allRightsReserved: "Todos los derechos reservados.",
    accessibility: "Accesibilidad",
    sitemap: "Mapa del Sitio",
    aboutUs: "Sobre Nosotros",
    careers: "Carreras",
    press: "Prensa",
    help: "Ayuda",
    newsletter: "Suscríbete a nuestro boletín",
    newsletterPlaceholder: "Ingresa tu correo",
    subscribe: "Suscribirse",
    socialMedia: "Síguenos",
    paymentMethods: "Métodos de Pago",
    securePayment: "Pago Seguro",
    customerService: "Servicio al Cliente",
    satisfaction: "Garantía de Satisfacción 100%",

    // Mega Menu
    softwareSolutions: "Soluciones de Software",
    cloudServices: "Servicios en la Nube",
    analyticsDescription: "Herramientas avanzadas de análisis y visualización de datos",
    ecommerceSuite: "Suite de Comercio Electrónico",
    ecommerceDescription: "Solución completa para tiendas en línea",
    securityDescription: "Soluciones de seguridad de nivel empresarial",
    integrationApi: "APIs de Integración",
    integrationDescription: "Conecte sus sistemas sin problemas",
    cloudDescription: "Infraestructura en la nube escalable y confiable",
    dedicatedServers: "Servidores Dedicados",
    serversDescription: "Hardware dedicado de alto rendimiento",
    mobileSolutions: "Soluciones Móviles",
    mobileDescription: "Herramientas de desarrollo multiplataforma",
    performanceOptimization: "Optimización de Rendimiento",
    performanceDescription: "Acelere sus aplicaciones"
  },
  de: {
    // Navbar
    about: "Über uns",
    products: "Produkte",
    contact: "Kontakt",
    login: "Anmelden",
    signup: "Registrieren",
    viewAllProducts: "Alle Produkte anzeigen →",

    // Main Content
    heroTitle: "Willkommen bei AppHub",
    heroSubtitle: "Eine moderne, responsive SaaS-Plattform für alle Ihre Anwendungsbedürfnisse.",
    featuredProducts: "Ausgewählte Produkte",
    latestUpdates: "Neueste Updates",
    readMore: "Weiterlesen",
    exploreAll: "Produkte Erkunden",
    categories: "Kategorien",
    popularItems: "Beliebte Artikel",
    newArrivals: "Neuheiten",
    specialOffers: "Sonderangebote",
    viewDetails: "Details Anzeigen",
    addToCart: "In den Warenkorb",
    price: "Preis",
    description: "Beschreibung",
    specifications: "Spezifikationen",
    reviews: "Bewertungen",
    rating: "Bewertung",
    relatedProducts: "Ähnliche Produkte",
    readyToStart: "Bereit zu starten?",
    joinCustomers: "Schließen Sie sich Tausenden zufriedenen Kunden an, die unsere Produkte nutzen.",
    noCreditCard: "Keine Kreditkarte erforderlich. Kostenlose Testversion für 14 Tage.",
    features: [
      "Leistungsstarke Analysen",
      "Sichere Infrastruktur",
      "Einfache Integration"
    ],
    featureDescriptions: [
      "Erhalten Sie detaillierte Einblicke für datengestützte Entscheidungen.",
      "Unternehmenssicherheit zum Schutz Ihrer Daten und Anwendungen.",
      "Nahtlose Integration mit Ihren bestehenden Tools und Workflows."
    ],

    // Footer
    company: "Unternehmen",
    companyDescription: "Entwicklung außergewöhnlicher digitaler Produkte, Marken und Erlebnisse.",
    aiProducts: "KI-Lösungen",
    cloudProducts: "Cloud-Hosting",
    securityProducts: "Sicherheitstools",
    analyticsProducts: "Analytics-Plattform",
    resources: "Ressourcen",
    blog: "Blog",
    documentation: "Dokumentation",
    support: "Support",
    community: "Community",
    legal: "Rechtliches",
    privacyPolicy: "Datenschutzerklärung",
    termsOfService: "Nutzungsbedingungen",
    cookiePolicy: "Cookie-Richtlinie",
    contactUs: "Kontakt",
    allRightsReserved: "Alle Rechte vorbehalten.",
    accessibility: "Barrierefreiheit",
    sitemap: "Sitemap",
    aboutUs: "Über Uns",
    careers: "Karriere",
    press: "Presse",
    help: "Hilfe",
    newsletter: "Newsletter abonnieren",
    newsletterPlaceholder: "E-Mail eingeben",
    subscribe: "Abonnieren",
    socialMedia: "Folgen Sie uns",
    paymentMethods: "Zahlungsmethoden",
    securePayment: "Sicherer Zahlung",
    customerService: "Kundenservice",
    satisfaction: "100% Zufriedenheitsgarantie",

    // Mega Menu
    softwareSolutions: "Software-Lösungen",
    cloudServices: "Cloud-Dienste",
    analyticsDescription: "Fortschrittliche Datenanalyse- und Visualisierungstools",
    ecommerceSuite: "E-Commerce-Suite",
    ecommerceDescription: "Komplettlösung für Online-Shops",
    securityDescription: "Sicherheitslösungen auf Unternehmensebene",
    integrationApi: "Integrations-APIs",
    integrationDescription: "Verbinden Sie Ihre Systeme nahtlos",
    cloudDescription: "Skalierbare und zuverlässige Cloud-Infrastruktur",
    dedicatedServers: "Dedizierte Server",
    serversDescription: "Hochleistungs-Dedicated-Hardware",
    mobileSolutions: "Mobile Lösungen",
    mobileDescription: "Plattformübergreifende Entwicklungstools",
    performanceOptimization: "Leistungsoptimierung",
    performanceDescription: "Beschleunigen Sie Ihre Anwendungen"
  },
  he: {
    // Navbar
    about: "אודות",
    products: "מוצרים",
    contact: "צור קשר",
    login: "התחברות",
    signup: "הרשמה",
    viewAllProducts: "צפה בכל המוצרים →",

    // Main Content
    heroTitle: "ברוכים הבאים ל-AppHub",
    heroSubtitle: "פלטפורמת SaaS מודרנית ורספונסיבית לכל צרכי האפליקציות שלך.",
    featuredProducts: "מוצרים מומלצים",
    latestUpdates: "עדכונים אחרונים",
    readMore: "קרא עוד",
    exploreAll: "חקור מוצרים",
    categories: "קטגוריות",
    popularItems: "פריטים פופולריים",
    newArrivals: "חדשים",
    specialOffers: "הצעות מיוחדות",
    viewDetails: "צפה בפרטים",
    addToCart: "הוסף לעגלה",
    price: "מחיר",
    description: "תיאור",
    specifications: "מפרט",
    reviews: "ביקורות",
    rating: "דירוג",
    relatedProducts: "מוצרים קשורים",
    readyToStart: "מוכן להתחיל?",
    joinCustomers: "הצטרף לאלפי לקוחות מרוצים המשתמשים במוצרים שלנו.",
    noCreditCard: "לא נדרשת כרטיס אשראי. ניסיון חינם למשך 14 יום.",
    features: [
      "ניתוחים חזקים",
      "תשתית מאובטחת",
      "אינטגרציה קלה"
    ],
    featureDescriptions: [
      "קבל תובנות מפורטות לקבלת החלטות מבוססות נתונים.",
      "אבטחה ברמת ארגון להגנה על הנתונים והאפליקציות שלך.",
      "אינטגרציה חלקה עם הכלים וזרימות העבודה הקיימים שלך."
    ],

    // Footer
    company: "חברה",
    companyDescription: "בונים מוצרים דיגיטליים, מותגים וחוויות מדהימים.",
    aiProducts: "פתרונות בינה מלאכותית",
    cloudProducts: "אירוח בענן",
    securityProducts: "כלי אבטחה",
    analyticsProducts: "פלטפורמת אנליטיקה",
    resources: "משאבים",
    blog: "בלוג",
    documentation: "תיעוד",
    support: "תמיכה",
    community: "קהילה",
    legal: "משפטי",
    privacyPolicy: "מדיניות פרטיות",
    termsOfService: "תנאי שימוש",
    cookiePolicy: "מדיניות עוגיות",
    contactUs: "צור קשר",
    allRightsReserved: "כל הזכויות שמורות.",
    accessibility: "נגישות",
    sitemap: "מפת אתר",
    aboutUs: "אודותינו",
    careers: "קריירה",
    press: "עיתונות",
    help: "עזרה",
    newsletter: "הירשם לניוזלטר שלנו",
    newsletterPlaceholder: "הזן את האימייל שלך",
    subscribe: "הירשם",
    socialMedia: "עקוב אחרינו",
    paymentMethods: "אמצעי תשלום",
    securePayment: "תשלום מאובטח",
    customerService: "שירות לקוחות",
    satisfaction: "הבטחת שביעות רצון 100%",

    // Mega Menu
    softwareSolutions: "פתרונות תוכנה",
    cloudServices: "שירותי ענן",
    analyticsDescription: "כלים מתקדמים לניתוח והצגת נתונים",
    ecommerceSuite: "חבילת מסחר אלקטרוני",
    ecommerceDescription: "פתרון מלא לחנויות מקוונות",
    securityDescription: "פתרונות אבטחה ברמת ארגון",
    integrationApi: "ממשקי API לאינטגרציה",
    integrationDescription: "חיבור חלק בין המערכות שלך",
    cloudDescription: "תשתית ענן מדרגית ואמינה",
    dedicatedServers: "שרתים ייעודיים",
    serversDescription: "חומרה ייעודית בביצועים גבוהים",
    mobileSolutions: "פתרונות מובייל",
    mobileDescription: "כלי פיתוח חוצה פלטפורמות",
    performanceOptimization: "אופטימיזציית ביצועים",
    performanceDescription: "האצת האפליקציות שלך"
  }
}; 