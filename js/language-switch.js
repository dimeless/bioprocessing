  <!-- Language Switcher -->
  const languageToggle = document.getElementById('languageToggle');

  <!-- IDs for the text elements -->
  const englishText = {
    languageToggle: "Fr",

    <!-- nav.html text -->
    nav_about: "About",
    nav_capacities: "Capacities",
    nav_team: "Team",
    nav_client_feature: "Client Feature",
    nav_pricing: "Pricing",
    nav_contact: "Contact",
    nav_partners: "Partners",
    logo_nav: "img/CBP logo.png",

    <!-- header.html text -->
    big_text_header: "Full service R&D platform for microbe-based biomanufacturing",
    small_text_header: "Lab to Pilot Scale-Up Services",
    button_header: "Find out more",
    logo_header: "img/logo.png",


    <!-- testimonial.html text -->
    clientFeatureTitle: "Client Feature",
    clientTestimonial: "We ♥ Lalit. -You Know WhMOON",

    <!-- work-with-us.html text -->
    title_about:"Work with Our Experts",
    text_about:"With over 15 years of hands-on industrial fermentation experience and decades of expertise in microbial strain engineering, we support emerging startups and academic researchers by offering services in process optimization, scale-up and scale-down, production demonstration, and technology transfer.",
    button_about:"Browse Our Capacities",

    <!-- pledge.html text -->
    title_pledge: "At Your Service",
    subtitle_1: "Our Commitment",
    text_1: "Your success is our measure of success.",
    subtitle_2: "We Deliver",
    text_2: "Helping clients achieve milestones on time.",
    subtitle_3: "Consultative Approach",
    text_3: "Collaborating closely to meet your project needs.",
    subtitle_4: "Innovate with Us",
    text_4: "Exploring new ideas while ensuring your IP remains yours.",
    subtitle_5: "Your Process, Our Platform",
    text_5: "Leverage our equipment and expertise.",

    <!-- portfolio_alt.html text -->
    title1_portfolio: "Fermentation capacity",
    text1_1_portfolio: "Mini benchtop : 0.2 L (×8) (coming soon)",
    text1_2_portfolio: "Small benchtop : 3 L (×4), 5 L, 15 L (×2), 20 L (×2)",
    text1_3_portfolio: "Steam-in-place : 10 L, 100 L, 200 L (coming soon)",

    title2_portfolio: "Downstream Processing",
    text2_1_portfolio: "Continuous centrifugation (coming soon), tangential flow filtration, spray drying, lyophilization",

    title3_portfolio: "Monitoring & Analysis",
    text3_1_portfolio: "Biomass analysis, cell imaging, sugar & metabolite profiling, protein quantification",

    title4_portfolio: "Organisms we have worked with",
    text4_1_portfolio: "Bacteria, budding yeasts, methylotrophic yeasts, fungi",

    title5_portfolio: "Products we have experience with",
    text5_1_portfolio: "Biopolymers, biofertilizers, biopesticides, biofuels, probiotics, recombinant proteins, insulin, enzymes, acids, plasmid DNA, biological controls",

    title6_portfolio: "Modes and Control",
    text6_1_portfolio: "Run in batch, fed-batch, or continuous mode.",
    text6_2_portfolio: "Control by dissolved oxygen, pH, temperature, and off-gas.",

    <!-- team.html text -->
    title_team: "Our Team",
    text_boss1: "Director",
    text_boss2: "Director",
    text_LK_title: "Supervisor, Bioprocessing Facility",
    text_NG_title: "Senior Advisor, Business Development & Partnerships Engagement",
    text_AM_title: "Manager, Research Operations",

    <!-- pricing.html text -->
    title_pricing: "Competitive Pricing for Startups and Academics",
    text_pricing: "Ask about funding opportunities for Quebec startups.",
    button_pricing: "Contact Us for Pricing",

    <!-- contact.html text -->
    title_contact: "Contact Us",
    text_contact: "Contact us for an estimate and more information.",
    text_contact_facility: "Concordia Bioprocessing",
    button_contact: "Inquiry Form",

    <!-- affiliation.html text -->
    title_affiliation: "We work hand-in-hand with Canada's first biofoundry, a high-throughput synthetic biology platform for your strain prototyping and screening needs.",
    button_affiliation: "Explore the Genome Foundry",

    <!-- signoff_select.html text -->
    text_signoff_select: "Let us unlock the full potential of your strains with expert care.",

    <!-- signoff.html text -->
    text_signoff: "Let us unlock the full potential of your strains with expert care.",

    <!-- support.html text -->
    text_support: "With Support from",
    lallemand_link: "https://www.concordia.ca/cunews/offices/advancement/2022/09/28/collaboration-leads-to-success-lallemand-inc-gives-812-000-to-bioprocessing-centre.html",

    <!-- footer.html text -->
    text_footer: "Concordia Bioprocessing",

  };

  const frenchText = {
    languageToggle: "An",

    <!-- nav.html text -->
    nav_about: "À propos",
    nav_capacities: "Capacités",
    nav_team: "Équipe",
    nav_client_feature: "Client en vedette",
    nav_pricing: "Tarification",
    nav_contact: "Contact",
    nav_partners: "Partenaires",
    logo_nav: "img/CBP logo_fr.png",

    <!-- header.html text -->
    big_text_header: "Plateforme de R&D complète pour la bioproduction à base de microbes",
    small_text_header: "Services de transition du laboratoire à l’échelle pilote",
    button_header: "En savoir plus",
    logo_header: "img/logo_fr.png", // Path to French logo

    <!-- testimonial.html text -->
    clientFeatureTitle: "En vedette : client",
    clientTestimonial: "Nous ♥ Lalit. -Vache qui rit",

    <!-- work-with-us.html text -->
    title_about:"Travaillez avec nos experts",
    text_about:"Avec plus de 15 ans d'expérience pratique en fermentation industrielle et des décennies d'expertise en ingénierie des souches microbiennes, nous soutenons les startups émergentes et les chercheurs académiques en proposant des services d’optimisation des procédés, de montée et descente en échelle, de démonstration de production et de transfert de technologie.",
    button_about:"Découvrez nos solutions",

    <!-- pledge.html text -->
    title_pledge: "À votre service",
    subtitle_1: "Notre engagement",
    text_1: "Votre succès est notre mesure de succès.",
    subtitle_2: "Nous livrons",
    text_2: "Aider les clients à atteindre leurs objectifs à temps.",
    subtitle_3: "Approche consultative",
    text_3: "Collaborer étroitement pour répondre à vos besoins de projet.",
    subtitle_4: "Innovez avec nous",
    text_4: "Explorer de nouvelles idées tout en veillant à ce que votre propriété intellectuelle reste la vôtre.",
    subtitle_5: "Votre procédé, notre plateforme",
    text_5: "Profitez de nos équipements et de notre expertise.",

    <!-- portfolio_alt.html text -->
    title1_portfolio: "Capacité de fermentation",
    text1_1_portfolio: "Mini : 0,2 L (×8) (bientôt disponible)",
    text1_2_portfolio: "Petit : 3 L (×4), 5 L, 15 L (×2), 20 L (×2)",
    text1_3_portfolio: "Stérilisation en place : 10 L, 100 L, 200 L (bientôt disponible)",

    title2_portfolio: "Traitement en aval",
    text2_1_portfolio: "Centrifugation continue (bientôt disponible), filtration tangentielle, séchage par pulvérisation, lyophilisation",

    title3_portfolio: "Surveillance et analyse",
    text3_1_portfolio: "Analyse de la biomasse, imagerie cellulaire, profilage des sucres et des métabolites, quantification des protéines",

    title4_portfolio: "Organismes avec lesquels nous avons travaillé",
    text4_1_portfolio: "Bactéries, levures bourgeonnantes, levures méthylotrophes, champignons",

    title5_portfolio: "Produits avec lesquels nous avons de l'expérience",
    text5_1_portfolio: "Biopolymères, biofertilisants, biopesticides, biocarburants, probiotiques, protéines recombinantes, insuline, enzymes, acides, ADN plasmidique, contrôles biologiques",

    title6_portfolio: "Modes et contrôle",
    text6_1_portfolio: "Fonctionnez en mode batch, fed-batch ou continu.",
    text6_2_portfolio: "Contrôlez par l'oxygène dissous, le pH, la température, et les gaz résiduels.",

    <!-- team.html text -->
    title_team: "Notre équipe",
    text_boss1: "Directeur",
    text_boss2: "Directeur",
    text_LK_title: "Superviseur de l'installation de biotraitement",
    text_NG_title: "Conseiller principal- Développement des affaires et engagement des partenaires",
    text_AM_title: "Chef des activités de recherche",

    <!-- pricing.html text -->
    title_pricing: "Tarification compétitive pour les startups et les universitaires",
    text_pricing: "Demandez des informations sur les opportunités de financement pour les startups québécoises.",
    button_pricing: "Contactez-nous pour obtenir un devis",

    <!-- contact.html text -->
    title_contact: "Contactez-nous",
    text_contact: "Contactez-nous pour une estimation et plus d'informations.",
    text_contact_facility: "Biotransformation Concordia",
    button_contact: "Formulaire de demande",

    <!-- affiliation.html text -->
    title_affiliation: "Nous travaillons étroitement avec la première biofonderie du Canada, une plateforme de biologie synthétique à haut débit pour vos besoins de prototypage et de criblage de souches.",
    button_affiliation: "Explorer la fonderie de génomes",

    <!-- signoff_select.html text -->
    text_signoff_select: "Laissez-nous révéler le plein potentiel de vos souches grâce à nos soins experts.",

    <!-- signoff.html text -->
    text_signoff: "Laissez-nous révéler le plein potentiel de vos souches grâce à nos soins experts.",

    <!-- support.html text -->
    text_support: "Avec le soutien de",
    lallemand_link: "https://www.concordia.ca/ucactualites/bureaux/avancement/2022/09/28/la-collaboration-mene-au-succes-la-societe-lallemand-verse-812-000-au-centre-de-biotransformation.html",

    <!-- footer.html text -->
    text_footer: "Biotransformation Concordia",

  };

  let isEnglish = true;
  const languageLogoHeader = document.getElementById('languageLogo');
  const languageLogoNav = document.getElementById('languageLogo_nav');

  function updateLanguage()
  {
    const currentLanguage = isEnglish ? englishText : frenchText;

    // Update the logo FIRST:
    languageLogoHeader.src = currentLanguage.logo_header;
    languageLogoHeader.alt = isEnglish ? "Concordia Bioprocessing Logo (EN)" : "Concordia Bioprocessing Logo (FR)";

    languageLogoNav.src = currentLanguage.logo_nav;
    languageLogoNav.alt = isEnglish ? "Concordia Bioprocessing Logo (EN)" : "Concordia Bioprocessing Logo (FR)";

    const lallemandLink = document.querySelector('#support a'); // Select the <a> tag within #support
    if (lallemandLink) { // Check if the element exists
      lallemandLink.href = currentLanguage.lallemand_link;
    }

    for (const [id, textKey] of Object.entries(currentLanguage))
    {
      const element = document.getElementById(id);
      if (element) {
        element.textContent = textKey;
      }
    }
  }

languageToggle.addEventListener('click', () => {
  isEnglish = !isEnglish;
  updateLanguage();
});

updateLanguage();