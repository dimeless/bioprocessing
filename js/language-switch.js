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

    <!-- header.html text -->
    big_text_header: "Full service R&D platform for microbe-based biomanufacturing",
    small_text_header: "From Laboratory Research to Industrial Scale-Up & Technology Transfer",
    button_header: "Find out more",

    <!-- testimonial.html text -->
    title: "Client Feature",
    // testimonial: "We ♥ Lalit. <i>-You Know Wh<strong>MOO</strong>N</i>",

    <!-- work-with-us.html text -->
    title_about:"Work with Our Experts",
    text_about:"With decades of microbial engineering expertise and over 15+ years of industrial fermentation experience, our team supports projects at every stage, from academic proof-of-concept scale-ups to production demonstrations for startups. We also provide consulting on fermentation strategy to help optimize your process and maximize efficiency.",
    button_about:"Learn What We Do",

    <!-- pledge.html text -->
    title_pledge: "At Your Service",
    subtitle_1: "Our Commitment",
    text_1: "Your success is our measure of success.",
    subtitle_2: "We Deliver",
    text_2: "Helping clients achieve milestones on time.",
    subtitle_3: "Consultative Approach",
    text_3: "Collaborating closely to meet your project needs.",
    subtitle_4: "Innovative",
    text_4: "Exploring new ideas while ensuring your IP remains yours.",

    <!-- portfolio_alt.html text -->
    title1_portfolio: "Fermentation capacity",
    text1_1_portfolio: "Mini benchtop : 0.2 L (×8) (coming in Spring 2025)",
    text1_2_portfolio: "Small benchtop : 3 L (×4), 5 L, 15 L (×2), 20 L (×2)",
    text1_3_portfolio: "Steam-in-place : 10 L, 100 L, 200 L (coming until 2026)",

    title2_portfolio: "Downstream Processing",
    text2_1_portfolio: "Continuous centrifugation (coming soon), tangential flow filtration, spray drying, lyophilization",

    title3_portfolio: "Monitoring & Analysis",
    text3_1_portfolio: " Biomass analysis, cell imaging, sugar & metabolite profiling, protein quantification",

    title4_portfolio: "Organisms we have worked with",
    text4_1_portfolio: "Bacteria, budding yeasts, methylotrophic yeasts, fungi",

    title5_portfolio: "Products we have experience with",
    text5_1_portfolio: "Biopolymers, biofertilizers, biopesticides, biofuels, probiotics, recombinant proteins, Insulin, enzymes, acids, plasmid DNA, biological controls",

    title6_portfolio: "Modes and Control",
    text6_1_portfolio: "Run in batch, fed-batch, or continuous mode",
    text6_2_portfolio: "Control by dissolved oxygen, pH, temperature, off-gas",

    <!-- team.html text -->
    title_team: "Our Team",

    <!-- pricing.html text -->
    title_pricing: "Competitive Pricing for Startups and Academics",
    text_pricing: "Ask about funding opportunities for Quebec startups.",
    button_pricing: "Contact Us for Pricing",

    <!-- contact.html text -->
    title_contact: "Contact Us",
    text_contact: "Contact us for an estimate and more information",
    button_contact: "Inquiry Form",

    <!-- affiliation.html text -->
    title_affiliation: "We work hand-in-hand with Canada's first biofoundry, a high-throughput synbio platform, for your strain prototyping needs.",
    button_affiliation: "Explore the Genome Foundry",

    <!-- support.html text -->
    text_support: "With Support from",

  };

  const frenchText = {
    languageToggle: "En",

    <!-- nav.html text -->
    nav_about: "À propos",
    nav_capacities: "Capacités",
    nav_team: "Équipe",
    nav_client_feature: "Client en vedette",
    nav_pricing: "Tarification",
    nav_contact: "Contact",
    nav_partners: "Partenaires",

    <!-- header.html text -->
    big_text_header: "Plateforme de R&D complète pour la bioproduction à base de microbes",
    small_text_header: "De la recherche en laboratoire à l'industrialisation et au transfert de technologie",
    button_header: "En savoir plus",

    <!-- testimonial.html text -->
    title: "En vedette : client",
    // testimonial: "Nous ♥ Lalit. <i>-Vous savez qui 🐄</i>",

    <!-- work-with-us.html text -->
    title_about:"Travaillez avec nos experts",
    text_about:"Avec des décennies d'expertise en ingénierie microbienne et plus de 15 ans d'expérience en fermentation industrielle, notre équipe soutient les projets à chaque étape, de la preuve de concept académique à la démonstration de production pour les startups. Nous fournissons également des conseils sur la stratégie de fermentation pour aider à optimiser votre processus et à maximiser l'efficacité.",
    button_about:"Découvrez ce que nous faisons",

    <!-- pledge.html text -->
    title_pledge: "À votre service",
    subtitle_1: "Notre engagement",
    text_1: "Votre succès est notre mesure de succès.",
    subtitle_2: "Nous livrons",
    text_2: "Aider les clients à atteindre des jalons à temps.",
    subtitle_3: "Approche consultative",
    text_3: "Collaborer étroitement pour répondre à vos besoins de projet.",
    subtitle_4: "Innovant",
    text_4: "Explorer de nouvelles idées tout en veillant à ce que votre PI reste la vôtre.",

    <!-- portfolio_alt.html text -->
    title1_portfolio: "Capacité de fermentation",
    text1_1_portfolio: "Mini : 0,2 L (×8) (à venir au printemps 2025)",
    text1_2_portfolio: "Petit : 3 L (×4), 5 L, 15 L (×2), 20 L (×2)",
    text1_3_portfolio: "Stérilisation en place : 10 L, 100 L, 200 L (à venir avant 2026)",

    title2_portfolio: "Traitement en aval",
    text2_1_portfolio: "Centrifugation continue (bientôt disponible), filtration tangentielle, séchage par pulvérisation, lyophilisation",

    title3_portfolio: "Surveillance et analyse",
    text3_1_portfolio: "Analyse de la biomasse, imagerie cellulaire, profilage des sucres et des métabolites, quantification des protéines",

    title4_portfolio: "Organismes avec lesquels nous avons travaillé",
    text4_1_portfolio: "Bactéries, levures bourgeonnantes, levures méthylotrophes, champignons",

    title5_portfolio: "Produits avec lesquels nous avons de l'expérience",
    text5_1_portfolio: "Biopolymères, biofertilisants, biopesticides, biocarburants, probiotiques, protéines recombinantes, insuline, enzymes, acides, ADN plasmidique, contrôles biologiques",

    title6_portfolio: "Modes et contrôle",
    text6_1_portfolio: "Fonctionne en mode batch, fed-batch ou continu",
    text6_2_portfolio: "Contrôle par l'oxygène dissous, le pH, la température, les gaz résiduels",

    <!-- team.html text -->
    title_team: "Notre équipe",

    <!-- pricing.html text -->
    title_pricing: "Tarification compétitive pour les startups et les universitaires",
    text_pricing: "Demandez des informations sur les opportunités de financement pour les startups québécoises.",
    button_pricing: "Contactez-nous pour obtenir un devis",

    <!-- contact.html text -->
    title_contact: "Contactez-nous",
    text_contact: "Contactez-nous pour une estimation et plus d'informations",
    button_contact: "Formulaire de demande",

    <!-- affiliation.html text -->
    title_affiliation: "Nous travaillons main dans la main avec le premier biofonderie du Canada, une plateforme de synbio à haut débit, pour vos besoins de prototypage de souches.",
    button_affiliation: "Explorer la fonderie de génomes",

    <!-- support.html text -->
    text_support: "Avec le soutien de",

  };

  let isEnglish = true;

  function updateLanguage()
  {
    const currentLanguage = isEnglish ? englishText : frenchText;

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