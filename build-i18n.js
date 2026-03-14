#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

// Base HTML template - read from public/index.html and replace translatable strings
const baseHtml = fs.readFileSync(path.join(__dirname, 'public/index.html'), 'utf8');

const translations = {
  en: {
    lang: 'en', name: 'English',
    title: 'abolitionist mission — for life. for dignity. for the future.',
    navMissao: 'mission', navEventos: 'events', navJunte: 'join us',
    heroH1: 'join the movement.<br>be an abolitionist.',
    heroTagline: 'for life. for dignity. for the future.',
    heroBtn: 'join us',
    missaoTitle: 'our mission',
    prose1: 'Abolitionist Mission is an abolitionist movement rooted in Portugal that operates across Europe and the Lusophone world. Our purpose is clear and non-negotiable: to end the sacrifice of children. Just as the abolitionists of the past did not rest until they eradicated slavery, we will not rest until no innocent child is sacrificed. Every person, from conception to natural death, possesses an inviolable dignity — and we exist to defend it.',
    prose2: 'We are heirs of the abolitionists who changed the world. We work to build a culture of life where no life is disposable. From Lisbon to Luanda, from Porto to Maputo, from Coimbra to Dili — we educate, raise awareness, and mobilize. Because silence in the face of the sacrifice of the innocent is not neutrality — it is complicity.',
    pillarMissaoTitle: 'mission',
    pillarMissaoText: 'To end the sacrifice of children. To defend every human life from conception. From Portugal to Europe and the entire Lusophone world — no exceptions, no compromises.',
    pillarVisaoTitle: 'vision',
    pillarVisaoText: 'A world where no innocent child is sacrificed. Where every life is protected from conception to natural death. That world is possible — and we will build it.',
    pillarValoresTitle: 'values',
    pillarValoresText: 'Life. Truth. Dignity. Courage. Compassion. Solidarity.',
    eventosTitle: 'upcoming events',
    eventBadge1: 'confirmed participation',
    eventTitle1: 'Walk for Life 2026',
    eventDesc1: 'The Walk for Life is the largest pro-life event in Portugal, organized by the Portuguese Federation for Life since 1998. This year, it takes place simultaneously in 12 cities. Abolitionist Mission will be present in Lisbon — we want to gather abolitionists and march together from Largo de Camões to the Parliament. Come represent the movement with us.',
    eventDate1: 'March 21 &middot; 3:00 PM',
    eventLocal1: 'Largo de Camões &rarr; Parliament, Lisbon',
    eventBtn1: 'march with us',
    eventBtn1b: 'learn more',
    eventBadge2: 'gathering',
    eventTitle2: 'Abolitionist Dinner',
    eventDesc2: 'After the Walk, we will gather abolitionists at the table. Get to know each other, strengthen bonds, and plan the next steps. Sign up to save your seat.',
    eventDate2: 'March 21 &middot; after the walk',
    eventBtn2: 'save your seat',
    eventTitle3: 'More events soon',
    eventDesc3: 'We are preparing actions across Europe and the Lusophone world. Sign up to be the first to know.',
    eventBtn3: 'stay informed',
    formTitle: 'join us',
    formLead: 'fill out the form and be part of the abolitionist movement.',
    labelNome: 'full name *', phNome: 'your name',
    labelEmail: 'email *', phEmail: 'example@email.com',
    labelCidade: 'city *', phCidade: 'your city',
    labelPais: 'country *',
    selecione: 'select...',
    labelTelefone: 'phone', phTelefone: '(optional)',
    labelEvento: 'i want to participate in: *',
    optCaminhada: 'Walk for Life — March 21',
    optJantar: 'Abolitionist Dinner — March 21',
    optAmbos: 'Both (Walk + Dinner)',
    optNenhum: 'None for now — I just want to join the movement',
    labelComoSoube: 'how did you hear about us?',
    optRedes: 'Social Media', optAmigo: 'Friend or Family', optIgreja: 'Church / Parish',
    optEvento: 'Event', optPesquisa: 'Online Search', optOutro: 'Other',
    checkTermos: 'i accept the terms of use and the privacy policy *',
    btnSubmit: 'submit registration',
    footerTagline: 'for life. for dignity. for the future.',
    footerSub: 'from Portugal to Europe and the Lusophone world',
    footerCopy: '&copy; 2026 abolitionist mission. all rights reserved.',
    successTitle: 'registration submitted successfully.',
    successText: 'welcome to the abolitionist movement.',
    sending: 'sending...',
    errorMsg: 'Error submitting. Please try again.'
  },
  es: {
    lang: 'es', name: 'Español',
    title: 'abolitionist mission — por la vida. por la dignidad. por el futuro.',
    navMissao: 'misión', navEventos: 'eventos', navJunte: 'únete',
    heroH1: 'únete al movimiento.<br>sé abolicionista.',
    heroTagline: 'por la vida. por la dignidad. por el futuro.',
    heroBtn: 'únete a nosotros',
    missaoTitle: 'nuestra misión',
    prose1: 'Abolitionist Mission es un movimiento abolicionista con raíces en Portugal que actúa en toda Europa y el espacio lusófono. Nuestro propósito es claro y no negociable: acabar con el sacrificio infantil. Así como los abolicionistas del pasado no descansaron hasta erradicar la esclavitud, nosotros no descansaremos hasta que ningún niño inocente sea sacrificado. Toda persona, desde la concepción hasta la muerte natural, posee una dignidad inviolable — y nosotros existimos para defenderla.',
    prose2: 'Somos herederos de los abolicionistas que cambiaron el mundo. Trabajamos para construir una cultura de vida donde ninguna vida sea desechable. De Lisboa a Luanda, de Oporto a Maputo, de Coímbra a Dili — educamos, sensibilizamos y movilizamos. Porque el silencio ante el sacrificio de inocentes no es neutralidad — es complicidad.',
    pillarMissaoTitle: 'misión',
    pillarMissaoText: 'Acabar con el sacrificio infantil. Defender toda vida humana desde la concepción. De Portugal a Europa y toda la Lusofonía — sin excepciones, sin compromisos.',
    pillarVisaoTitle: 'visión',
    pillarVisaoText: 'Un mundo donde ningún niño inocente sea sacrificado. Donde toda vida sea protegida desde la concepción hasta la muerte natural. Ese mundo es posible — y lo construiremos.',
    pillarValoresTitle: 'valores',
    pillarValoresText: 'Vida. Verdad. Dignidad. Coraje. Compasión. Solidaridad.',
    eventosTitle: 'próximos eventos',
    eventBadge1: 'participación confirmada',
    eventTitle1: 'Caminata por la Vida 2026',
    eventDesc1: 'La Caminata por la Vida es el mayor evento pro-vida de Portugal, organizado por la Federación Portuguesa por la Vida desde 1998. Este año se celebra simultáneamente en 12 ciudades. Abolitionist Mission estará presente en Lisboa — queremos reunir a los abolicionistas y marchar juntos desde Largo de Camões hasta la Asamblea de la República.',
    eventDate1: '21 de marzo &middot; 15:00',
    eventLocal1: 'Largo de Camões &rarr; Asamblea de la República, Lisboa',
    eventBtn1: 'marcha con nosotros',
    eventBtn1b: 'saber más',
    eventBadge2: 'convivencia',
    eventTitle2: 'Cena Abolicionista',
    eventDesc2: 'Después de la Caminata, reuniremos a los abolicionistas en la mesa. Conocernos, fortalecer lazos y planificar los próximos pasos. Inscríbete para reservar tu lugar.',
    eventDate2: '21 de marzo &middot; después de la caminata',
    eventBtn2: 'reserva tu lugar',
    eventTitle3: 'Más eventos pronto',
    eventDesc3: 'Estamos preparando acciones por Europa y la Lusofonía. Inscríbete para ser el primero en saberlo.',
    eventBtn3: 'mantente informado',
    formTitle: 'únete a nosotros',
    formLead: 'rellena el formulario y forma parte del movimiento abolicionista.',
    labelNome: 'nombre completo *', phNome: 'tu nombre',
    labelEmail: 'email *', phEmail: 'ejemplo@email.com',
    labelCidade: 'ciudad *', phCidade: 'tu ciudad',
    labelPais: 'país *',
    selecione: 'selecciona...',
    labelTelefone: 'teléfono', phTelefone: '(opcional)',
    labelEvento: 'quiero participar en: *',
    optCaminhada: 'Caminata por la Vida — 21 marzo',
    optJantar: 'Cena Abolicionista — 21 marzo',
    optAmbos: 'Ambos (Caminata + Cena)',
    optNenhum: 'Ninguno por ahora — solo quiero unirme al movimiento',
    labelComoSoube: '¿cómo supiste de nosotros?',
    optRedes: 'Redes Sociales', optAmigo: 'Amigo o Familiar', optIgreja: 'Iglesia / Parroquia',
    optEvento: 'Evento', optPesquisa: 'Búsqueda Online', optOutro: 'Otro',
    checkTermos: 'acepto los términos de uso y la política de privacidad *',
    btnSubmit: 'enviar inscripción',
    footerTagline: 'por la vida. por la dignidad. por el futuro.',
    footerSub: 'de Portugal a Europa y la Lusofonía',
    footerCopy: '&copy; 2026 abolitionist mission. todos los derechos reservados.',
    successTitle: 'inscripción enviada con éxito.',
    successText: 'bienvenido al movimiento abolicionista.',
    sending: 'enviando...',
    errorMsg: 'Error al enviar. Inténtalo de nuevo.'
  },
  fr: {
    lang: 'fr', name: 'Français',
    title: 'abolitionist mission — pour la vie. pour la dignité. pour l\'avenir.',
    navMissao: 'mission', navEventos: 'événements', navJunte: 'rejoignez-nous',
    heroH1: 'rejoignez le mouvement.<br>soyez abolitionniste.',
    heroTagline: 'pour la vie. pour la dignité. pour l\'avenir.',
    heroBtn: 'rejoignez-nous',
    missaoTitle: 'notre mission',
    prose1: 'Abolitionist Mission est un mouvement abolitionniste enraciné au Portugal qui agit dans toute l\'Europe et l\'espace lusophone. Notre objectif est clair et non négociable : mettre fin au sacrifice des enfants. Tout comme les abolitionnistes du passé n\'ont pas cessé jusqu\'à éradiquer l\'esclavage, nous ne nous reposerons pas tant qu\'aucun enfant innocent ne sera sacrifié. Toute personne, de la conception à la mort naturelle, possède une dignité inviolable — et nous existons pour la défendre.',
    prose2: 'Nous sommes les héritiers des abolitionnistes qui ont changé le monde. Nous travaillons à construire une culture de vie où aucune vie n\'est jetable. De Lisbonne à Luanda, de Porto à Maputo, de Coimbra à Dili — nous éduquons, sensibilisons et mobilisons. Car le silence face au sacrifice d\'innocents n\'est pas de la neutralité — c\'est de la complicité.',
    pillarMissaoTitle: 'mission',
    pillarMissaoText: 'Mettre fin au sacrifice des enfants. Défendre toute vie humaine dès la conception. Du Portugal à l\'Europe et toute la Lusophonie — sans exceptions, sans compromis.',
    pillarVisaoTitle: 'vision',
    pillarVisaoText: 'Un monde où aucun enfant innocent n\'est sacrifié. Où toute vie est protégée de la conception à la mort naturelle. Ce monde est possible — et nous le construirons.',
    pillarValoresTitle: 'valeurs',
    pillarValoresText: 'Vie. Vérité. Dignité. Courage. Compassion. Solidarité.',
    eventosTitle: 'prochains événements',
    eventBadge1: 'participation confirmée',
    eventTitle1: 'Marche pour la Vie 2026',
    eventDesc1: 'La Marche pour la Vie est le plus grand événement pro-vie au Portugal, organisé par la Fédération Portugaise pour la Vie depuis 1998. Cette année, elle se tient simultanément dans 12 villes. Abolitionist Mission sera présente à Lisbonne — nous voulons rassembler les abolitionnistes et marcher ensemble de Largo de Camões au Parlement.',
    eventDate1: '21 mars &middot; 15h00',
    eventLocal1: 'Largo de Camões &rarr; Parlement, Lisbonne',
    eventBtn1: 'marchez avec nous',
    eventBtn1b: 'en savoir plus',
    eventBadge2: 'convivialité',
    eventTitle2: 'Dîner Abolitionniste',
    eventDesc2: 'Après la Marche, nous réunirons les abolitionnistes à table. Se connaître, renforcer les liens et planifier les prochaines étapes. Inscrivez-vous pour réserver votre place.',
    eventDate2: '21 mars &middot; après la marche',
    eventBtn2: 'réservez votre place',
    eventTitle3: 'Plus d\'événements bientôt',
    eventDesc3: 'Nous préparons des actions à travers l\'Europe et la Lusophonie. Inscrivez-vous pour être les premiers informés.',
    eventBtn3: 'restez informé',
    formTitle: 'rejoignez-nous',
    formLead: 'remplissez le formulaire et faites partie du mouvement abolitionniste.',
    labelNome: 'nom complet *', phNome: 'votre nom',
    labelEmail: 'email *', phEmail: 'exemple@email.com',
    labelCidade: 'ville *', phCidade: 'votre ville',
    labelPais: 'pays *',
    selecione: 'sélectionnez...',
    labelTelefone: 'téléphone', phTelefone: '(facultatif)',
    labelEvento: 'je souhaite participer à : *',
    optCaminhada: 'Marche pour la Vie — 21 mars',
    optJantar: 'Dîner Abolitionniste — 21 mars',
    optAmbos: 'Les deux (Marche + Dîner)',
    optNenhum: 'Aucun pour l\'instant — je veux juste rejoindre le mouvement',
    labelComoSoube: 'comment avez-vous entendu parler de nous ?',
    optRedes: 'Réseaux Sociaux', optAmigo: 'Ami ou Famille', optIgreja: 'Église / Paroisse',
    optEvento: 'Événement', optPesquisa: 'Recherche en ligne', optOutro: 'Autre',
    checkTermos: 'j\'accepte les conditions d\'utilisation et la politique de confidentialité *',
    btnSubmit: 'envoyer l\'inscription',
    footerTagline: 'pour la vie. pour la dignité. pour l\'avenir.',
    footerSub: 'du Portugal à l\'Europe et la Lusophonie',
    footerCopy: '&copy; 2026 abolitionist mission. tous droits réservés.',
    successTitle: 'inscription envoyée avec succès.',
    successText: 'bienvenue dans le mouvement abolitionniste.',
    sending: 'envoi en cours...',
    errorMsg: 'Erreur lors de l\'envoi. Veuillez réessayer.'
  },
  de: {
    lang: 'de', name: 'Deutsch',
    title: 'abolitionist mission — für das Leben. für die Würde. für die Zukunft.',
    navMissao: 'mission', navEventos: 'veranstaltungen', navJunte: 'mitmachen',
    heroH1: 'schließ dich der Bewegung an.<br>sei Abolitionist.',
    heroTagline: 'für das Leben. für die Würde. für die Zukunft.',
    heroBtn: 'mach mit',
    missaoTitle: 'unsere mission',
    prose1: 'Abolitionist Mission ist eine abolitionistische Bewegung mit Wurzeln in Portugal, die in ganz Europa und dem lusophonen Raum tätig ist. Unser Ziel ist klar und nicht verhandelbar: das Opfer von Kindern zu beenden. So wie die Abolitionisten der Vergangenheit nicht ruhten, bis sie die Sklaverei ausrotteten, werden wir nicht ruhen, bis kein unschuldiges Kind mehr geopfert wird. Jeder Mensch, von der Empfängnis bis zum natürlichen Tod, besitzt eine unverletzliche Würde — und wir existieren, um sie zu verteidigen.',
    prose2: 'Wir sind die Erben der Abolitionisten, die die Welt verändert haben. Wir arbeiten daran, eine Kultur des Lebens aufzubauen, in der kein Leben entbehrlich ist. Von Lissabon nach Luanda, von Porto nach Maputo, von Coimbra nach Dili — wir bilden, sensibilisieren und mobilisieren. Denn Schweigen angesichts des Opfers von Unschuldigen ist keine Neutralität — es ist Mittäterschaft.',
    pillarMissaoTitle: 'mission',
    pillarMissaoText: 'Das Opfer von Kindern beenden. Jedes menschliche Leben von der Empfängnis an verteidigen. Von Portugal nach Europa und die gesamte Lusophonie — ohne Ausnahmen, ohne Kompromisse.',
    pillarVisaoTitle: 'vision',
    pillarVisaoText: 'Eine Welt, in der kein unschuldiges Kind geopfert wird. In der jedes Leben von der Empfängnis bis zum natürlichen Tod geschützt ist. Diese Welt ist möglich — und wir werden sie aufbauen.',
    pillarValoresTitle: 'werte',
    pillarValoresText: 'Leben. Wahrheit. Würde. Mut. Mitgefühl. Solidarität.',
    eventosTitle: 'kommende veranstaltungen',
    eventBadge1: 'teilnahme bestätigt',
    eventTitle1: 'Marsch für das Leben 2026',
    eventDesc1: 'Der Marsch für das Leben ist die größte Pro-Life-Veranstaltung in Portugal, organisiert von der Portugiesischen Föderation für das Leben seit 1998. Dieses Jahr findet er gleichzeitig in 12 Städten statt. Abolitionist Mission wird in Lissabon dabei sein — wir wollen Abolitionisten versammeln und gemeinsam vom Largo de Camões zum Parlament marschieren.',
    eventDate1: '21. März &middot; 15:00 Uhr',
    eventLocal1: 'Largo de Camões &rarr; Parlament, Lissabon',
    eventBtn1: 'marschiere mit uns',
    eventBtn1b: 'mehr erfahren',
    eventBadge2: 'geselligkeit',
    eventTitle2: 'Abolitionistisches Abendessen',
    eventDesc2: 'Nach dem Marsch versammeln wir die Abolitionisten am Tisch. Einander kennenlernen, Bindungen stärken und die nächsten Schritte planen. Melde dich an, um deinen Platz zu sichern.',
    eventDate2: '21. März &middot; nach dem Marsch',
    eventBtn2: 'platz reservieren',
    eventTitle3: 'Weitere Veranstaltungen bald',
    eventDesc3: 'Wir bereiten Aktionen in ganz Europa und der Lusophonie vor. Melde dich an, um als Erster informiert zu werden.',
    eventBtn3: 'bleib informiert',
    formTitle: 'mach mit',
    formLead: 'fülle das Formular aus und werde Teil der abolitionistischen Bewegung.',
    labelNome: 'vollständiger Name *', phNome: 'dein Name',
    labelEmail: 'E-Mail *', phEmail: 'beispiel@email.com',
    labelCidade: 'Stadt *', phCidade: 'deine Stadt',
    labelPais: 'Land *',
    selecione: 'auswählen...',
    labelTelefone: 'Telefon', phTelefone: '(optional)',
    labelEvento: 'ich möchte teilnehmen an: *',
    optCaminhada: 'Marsch für das Leben — 21. März',
    optJantar: 'Abolitionistisches Abendessen — 21. März',
    optAmbos: 'Beides (Marsch + Abendessen)',
    optNenhum: 'Keines — ich möchte nur der Bewegung beitreten',
    labelComoSoube: 'wie hast du von uns erfahren?',
    optRedes: 'Soziale Medien', optAmigo: 'Freund oder Familie', optIgreja: 'Kirche / Gemeinde',
    optEvento: 'Veranstaltung', optPesquisa: 'Online-Suche', optOutro: 'Andere',
    checkTermos: 'ich akzeptiere die Nutzungsbedingungen und die Datenschutzrichtlinie *',
    btnSubmit: 'anmeldung absenden',
    footerTagline: 'für das Leben. für die Würde. für die Zukunft.',
    footerSub: 'von Portugal nach Europa und die Lusophonie',
    footerCopy: '&copy; 2026 abolitionist mission. alle Rechte vorbehalten.',
    successTitle: 'anmeldung erfolgreich gesendet.',
    successText: 'willkommen in der abolitionistischen Bewegung.',
    sending: 'wird gesendet...',
    errorMsg: 'Fehler beim Senden. Bitte versuche es erneut.'
  },
  it: {
    lang: 'it', name: 'Italiano',
    title: 'abolitionist mission — per la vita. per la dignità. per il futuro.',
    navMissao: 'missione', navEventos: 'eventi', navJunte: 'unisciti',
    heroH1: 'unisciti al movimento.<br>sii abolizionista.',
    heroTagline: 'per la vita. per la dignità. per il futuro.',
    heroBtn: 'unisciti a noi',
    missaoTitle: 'la nostra missione',
    prose1: 'Abolitionist Mission è un movimento abolizionista con radici in Portogallo che opera in tutta Europa e nel mondo lusofono. Il nostro scopo è chiaro e non negoziabile: porre fine al sacrificio dei bambini. Come gli abolizionisti del passato non si fermarono fino a sradicare la schiavitù, noi non ci fermeremo finché nessun bambino innocente sarà sacrificato. Ogni persona, dal concepimento alla morte naturale, possiede una dignità inviolabile — e noi esistiamo per difenderla.',
    prose2: 'Siamo gli eredi degli abolizionisti che hanno cambiato il mondo. Lavoriamo per costruire una cultura della vita dove nessuna vita sia sacrificabile. Da Lisbona a Luanda, da Porto a Maputo, da Coimbra a Dili — educhiamo, sensibilizziamo e mobilitiamo. Perché il silenzio di fronte al sacrificio degli innocenti non è neutralità — è complicità.',
    pillarMissaoTitle: 'missione',
    pillarMissaoText: 'Porre fine al sacrificio dei bambini. Difendere ogni vita umana dal concepimento. Dal Portogallo all\'Europa e tutta la Lusofonia — senza eccezioni, senza compromessi.',
    pillarVisaoTitle: 'visione',
    pillarVisaoText: 'Un mondo dove nessun bambino innocente è sacrificato. Dove ogni vita è protetta dal concepimento alla morte naturale. Quel mondo è possibile — e lo costruiremo.',
    pillarValoresTitle: 'valori',
    pillarValoresText: 'Vita. Verità. Dignità. Coraggio. Compassione. Solidarietà.',
    eventosTitle: 'prossimi eventi',
    eventBadge1: 'partecipazione confermata',
    eventTitle1: 'Marcia per la Vita 2026',
    eventDesc1: 'La Marcia per la Vita è il più grande evento pro-vita in Portogallo, organizzato dalla Federazione Portoghese per la Vita dal 1998. Quest\'anno si svolge simultaneamente in 12 città. Abolitionist Mission sarà presente a Lisbona — vogliamo riunire gli abolizionisti e marciare insieme da Largo de Camões al Parlamento.',
    eventDate1: '21 marzo &middot; 15:00',
    eventLocal1: 'Largo de Camões &rarr; Parlamento, Lisbona',
    eventBtn1: 'marcia con noi',
    eventBtn1b: 'scopri di più',
    eventBadge2: 'convivialità',
    eventTitle2: 'Cena Abolizionista',
    eventDesc2: 'Dopo la Marcia, riuniremo gli abolizionisti a tavola. Conoscerci, rafforzare i legami e pianificare i prossimi passi. Iscriviti per riservare il tuo posto.',
    eventDate2: '21 marzo &middot; dopo la marcia',
    eventBtn2: 'riserva il tuo posto',
    eventTitle3: 'Altri eventi in arrivo',
    eventDesc3: 'Stiamo preparando azioni in Europa e nella Lusofonia. Iscriviti per essere il primo a saperlo.',
    eventBtn3: 'resta informato',
    formTitle: 'unisciti a noi',
    formLead: 'compila il modulo e fai parte del movimento abolizionista.',
    labelNome: 'nome completo *', phNome: 'il tuo nome',
    labelEmail: 'email *', phEmail: 'esempio@email.com',
    labelCidade: 'città *', phCidade: 'la tua città',
    labelPais: 'paese *',
    selecione: 'seleziona...',
    labelTelefone: 'telefono', phTelefone: '(facoltativo)',
    labelEvento: 'voglio partecipare a: *',
    optCaminhada: 'Marcia per la Vita — 21 marzo',
    optJantar: 'Cena Abolizionista — 21 marzo',
    optAmbos: 'Entrambi (Marcia + Cena)',
    optNenhum: 'Nessuno per ora — voglio solo unirmi al movimento',
    labelComoSoube: 'come hai saputo di noi?',
    optRedes: 'Social Media', optAmigo: 'Amico o Familiare', optIgreja: 'Chiesa / Parrocchia',
    optEvento: 'Evento', optPesquisa: 'Ricerca Online', optOutro: 'Altro',
    checkTermos: 'accetto i termini di utilizzo e la politica sulla privacy *',
    btnSubmit: 'invia iscrizione',
    footerTagline: 'per la vita. per la dignità. per il futuro.',
    footerSub: 'dal Portogallo all\'Europa e alla Lusofonia',
    footerCopy: '&copy; 2026 abolitionist mission. tutti i diritti riservati.',
    successTitle: 'iscrizione inviata con successo.',
    successText: 'benvenuto nel movimento abolizionista.',
    sending: 'invio in corso...',
    errorMsg: 'Errore nell\'invio. Riprova.'
  },
  nl: {
    lang: 'nl', name: 'Nederlands',
    title: 'abolitionist mission — voor het leven. voor de waardigheid. voor de toekomst.',
    navMissao: 'missie', navEventos: 'evenementen', navJunte: 'doe mee',
    heroH1: 'sluit je aan bij de beweging.<br>wees abolitionist.',
    heroTagline: 'voor het leven. voor de waardigheid. voor de toekomst.',
    heroBtn: 'doe mee',
    missaoTitle: 'onze missie',
    prose1: 'Abolitionist Mission is een abolitionistische beweging met wortels in Portugal die actief is in heel Europa en de Lusofone wereld. Ons doel is duidelijk en niet-onderhandelbaar: een einde maken aan het offer van kinderen. Zoals de abolitionisten van het verleden niet rustten tot zij de slavernij hadden uitgeroeid, zullen wij niet rusten tot geen enkel onschuldig kind meer wordt opgeofferd. Ieder mens, van de conceptie tot de natuurlijke dood, bezit een onschendbare waardigheid — en wij bestaan om die te verdedigen.',
    prose2: 'Wij zijn de erfgenamen van de abolitionisten die de wereld veranderden. We werken aan een cultuur van leven waar geen enkel leven wegwerpbaar is. Van Lissabon tot Luanda, van Porto tot Maputo, van Coimbra tot Dili — wij onderwijzen, sensibiliseren en mobiliseren. Want stilte tegenover het offer van onschuldigen is geen neutraliteit — het is medeplichtigheid.',
    pillarMissaoTitle: 'missie', pillarMissaoText: 'Een einde maken aan het offer van kinderen. Elk menselijk leven verdedigen vanaf de conceptie. Van Portugal naar Europa en de hele Lusofonie — zonder uitzonderingen, zonder compromissen.',
    pillarVisaoTitle: 'visie', pillarVisaoText: 'Een wereld waar geen enkel onschuldig kind wordt opgeofferd. Waar elk leven beschermd is van conceptie tot natuurlijke dood. Die wereld is mogelijk — en wij zullen haar opbouwen.',
    pillarValoresTitle: 'waarden', pillarValoresText: 'Leven. Waarheid. Waardigheid. Moed. Mededogen. Solidariteit.',
    eventosTitle: 'komende evenementen',
    eventBadge1: 'deelname bevestigd', eventTitle1: 'Mars voor het Leven 2026',
    eventDesc1: 'De Mars voor het Leven is het grootste pro-life evenement in Portugal. Dit jaar vindt het gelijktijdig plaats in 12 steden. Abolitionist Mission zal aanwezig zijn in Lissabon.',
    eventDate1: '21 maart &middot; 15:00', eventLocal1: 'Largo de Camões &rarr; Parlement, Lissabon',
    eventBtn1: 'mars met ons mee', eventBtn1b: 'meer weten',
    eventBadge2: 'gezelligheid', eventTitle2: 'Abolitionistisch Diner',
    eventDesc2: 'Na de Mars komen we samen aan tafel. Elkaar leren kennen, banden versterken en de volgende stappen plannen.',
    eventDate2: '21 maart &middot; na de mars', eventBtn2: 'reserveer je plek',
    eventTitle3: 'Meer evenementen binnenkort', eventDesc3: 'We bereiden acties voor in Europa en de Lusofonie. Schrijf je in om als eerste op de hoogte te zijn.',
    eventBtn3: 'blijf op de hoogte',
    formTitle: 'doe mee', formLead: 'vul het formulier in en maak deel uit van de abolitionistische beweging.',
    labelNome: 'volledige naam *', phNome: 'je naam', labelEmail: 'e-mail *', phEmail: 'voorbeeld@email.com',
    labelCidade: 'stad *', phCidade: 'je stad', labelPais: 'land *', selecione: 'selecteer...',
    labelTelefone: 'telefoon', phTelefone: '(optioneel)',
    labelEvento: 'ik wil deelnemen aan: *',
    optCaminhada: 'Mars voor het Leven — 21 maart', optJantar: 'Abolitionistisch Diner — 21 maart',
    optAmbos: 'Beide (Mars + Diner)', optNenhum: 'Geen — ik wil alleen lid worden',
    labelComoSoube: 'hoe heb je over ons gehoord?',
    optRedes: 'Sociale Media', optAmigo: 'Vriend of Familie', optIgreja: 'Kerk / Parochie',
    optEvento: 'Evenement', optPesquisa: 'Online Zoeken', optOutro: 'Anders',
    checkTermos: 'ik accepteer de gebruiksvoorwaarden en het privacybeleid *',
    btnSubmit: 'inschrijving versturen',
    footerTagline: 'voor het leven. voor de waardigheid. voor de toekomst.',
    footerSub: 'van Portugal naar Europa en de Lusofonie',
    footerCopy: '&copy; 2026 abolitionist mission. alle rechten voorbehouden.',
    successTitle: 'inschrijving succesvol verzonden.', successText: 'welkom bij de abolitionistische beweging.',
    sending: 'verzenden...', errorMsg: 'Fout bij verzenden. Probeer het opnieuw.'
  },
  pl: {
    lang: 'pl', name: 'Polski',
    title: 'abolitionist mission — za życie. za godność. za przyszłość.',
    navMissao: 'misja', navEventos: 'wydarzenia', navJunte: 'dołącz',
    heroH1: 'dołącz do ruchu.<br>bądź abolicjonistą.',
    heroTagline: 'za życie. za godność. za przyszłość.',
    heroBtn: 'dołącz do nas',
    missaoTitle: 'nasza misja',
    prose1: 'Abolitionist Mission to ruch abolicjonistyczny z korzeniami w Portugalii, działający w całej Europie i świecie luzofońskim. Nasz cel jest jasny i niepodlegający negocjacjom: zakończyć ofiarę z dzieci. Tak jak abolicjoniści przeszłości nie spoczęli, dopóki nie wykorzenili niewolnictwa, my nie spoczniemy, dopóki żadne niewinne dziecko nie będzie poświęcane. Każda osoba, od poczęcia do naturalnej śmierci, posiada nienaruszalną godność — a my istniejemy, aby ją bronić.',
    prose2: 'Jesteśmy spadkobiercami abolicjonistów, którzy zmienili świat. Pracujemy nad budowaniem kultury życia, w której żadne życie nie jest jednorazowe. Od Lizbony do Luandy, od Porto do Maputo, od Coimbry do Dili — edukujemy, uwrażliwiamy i mobilizujemy. Bo milczenie wobec ofiary z niewinnych nie jest neutralnością — to współudział.',
    pillarMissaoTitle: 'misja', pillarMissaoText: 'Zakończyć ofiarę z dzieci. Bronić każdego ludzkiego życia od poczęcia. Z Portugalii do Europy i całej Lusofonii — bez wyjątków, bez kompromisów.',
    pillarVisaoTitle: 'wizja', pillarVisaoText: 'Świat, w którym żadne niewinne dziecko nie jest poświęcane. Gdzie każde życie jest chronione od poczęcia do naturalnej śmierci. Ten świat jest możliwy — i my go zbudujemy.',
    pillarValoresTitle: 'wartości', pillarValoresText: 'Życie. Prawda. Godność. Odwaga. Współczucie. Solidarność.',
    eventosTitle: 'nadchodzące wydarzenia',
    eventBadge1: 'udział potwierdzony', eventTitle1: 'Marsz za Życiem 2026',
    eventDesc1: 'Marsz za Życiem to największe wydarzenie pro-life w Portugalii. W tym roku odbywa się jednocześnie w 12 miastach. Abolitionist Mission będzie obecna w Lizbonie.',
    eventDate1: '21 marca &middot; 15:00', eventLocal1: 'Largo de Camões &rarr; Parlament, Lizbona',
    eventBtn1: 'maszeruj z nami', eventBtn1b: 'dowiedz się więcej',
    eventBadge2: 'spotkanie', eventTitle2: 'Kolacja Abolicjonistyczna',
    eventDesc2: 'Po Marszu spotkamy się przy stole. Poznać się, wzmocnić więzi i zaplanować kolejne kroki.',
    eventDate2: '21 marca &middot; po marszu', eventBtn2: 'zarezerwuj miejsce',
    eventTitle3: 'Więcej wydarzeń wkrótce', eventDesc3: 'Przygotowujemy akcje w Europie i Lusofonii. Zapisz się, aby być pierwszym, który się dowie.',
    eventBtn3: 'bądź na bieżąco',
    formTitle: 'dołącz do nas', formLead: 'wypełnij formularz i dołącz do ruchu abolicjonistycznego.',
    labelNome: 'imię i nazwisko *', phNome: 'twoje imię', labelEmail: 'e-mail *', phEmail: 'przykład@email.com',
    labelCidade: 'miasto *', phCidade: 'twoje miasto', labelPais: 'kraj *', selecione: 'wybierz...',
    labelTelefone: 'telefon', phTelefone: '(opcjonalnie)',
    labelEvento: 'chcę uczestniczyć w: *',
    optCaminhada: 'Marsz za Życiem — 21 marca', optJantar: 'Kolacja Abolicjonistyczna — 21 marca',
    optAmbos: 'Oba (Marsz + Kolacja)', optNenhum: 'Żadne — chcę tylko dołączyć do ruchu',
    labelComoSoube: 'jak dowiedziałeś się o nas?',
    optRedes: 'Media Społecznościowe', optAmigo: 'Przyjaciel lub Rodzina', optIgreja: 'Kościół / Parafia',
    optEvento: 'Wydarzenie', optPesquisa: 'Wyszukiwanie Online', optOutro: 'Inne',
    checkTermos: 'akceptuję regulamin i politykę prywatności *',
    btnSubmit: 'wyślij rejestrację',
    footerTagline: 'za życie. za godność. za przyszłość.',
    footerSub: 'z Portugalii do Europy i Lusofonii',
    footerCopy: '&copy; 2026 abolitionist mission. wszelkie prawa zastrzeżone.',
    successTitle: 'rejestracja wysłana pomyślnie.', successText: 'witamy w ruchu abolicjonistycznym.',
    sending: 'wysyłanie...', errorMsg: 'Błąd wysyłania. Spróbuj ponownie.'
  }
};

// Add remaining EU languages with shorter translations (same structure)
const remaining = {
  bg: { name: 'Български', heroH1: 'присъединете се към движението.<br>бъдете аболиционист.', heroTagline: 'за живота. за достойнството. за бъдещето.', heroBtn: 'присъединете се', missaoTitle: 'нашата мисия', eventosTitle: 'предстоящи събития', formTitle: 'присъединете се', btnSubmit: 'изпрати регистрация' },
  hr: { name: 'Hrvatski', heroH1: 'pridružite se pokretu.<br>budite abolicionist.', heroTagline: 'za život. za dostojanstvo. za budućnost.', heroBtn: 'pridružite se', missaoTitle: 'naša misija', eventosTitle: 'nadolazeći događaji', formTitle: 'pridružite se nama', btnSubmit: 'pošalji prijavu' },
  cs: { name: 'Čeština', heroH1: 'připojte se k hnutí.<br>buďte abolicionista.', heroTagline: 'za život. za důstojnost. za budoucnost.', heroBtn: 'připojte se', missaoTitle: 'naše mise', eventosTitle: 'nadcházející události', formTitle: 'připojte se k nám', btnSubmit: 'odeslat registraci' },
  da: { name: 'Dansk', heroH1: 'slut dig til bevægelsen.<br>vær abolitionist.', heroTagline: 'for livet. for værdigheden. for fremtiden.', heroBtn: 'deltag', missaoTitle: 'vores mission', eventosTitle: 'kommende begivenheder', formTitle: 'deltag', btnSubmit: 'send tilmelding' },
  et: { name: 'Eesti', heroH1: 'liitu liikumisega.<br>ole abolitionist.', heroTagline: 'elu eest. väärikuse eest. tuleviku eest.', heroBtn: 'liitu meiega', missaoTitle: 'meie missioon', eventosTitle: 'tulevased sündmused', formTitle: 'liitu meiega', btnSubmit: 'saada registreering' },
  fi: { name: 'Suomi', heroH1: 'liity liikkeeseen.<br>ole abolitionisti.', heroTagline: 'elämän puolesta. ihmisarvon puolesta. tulevaisuuden puolesta.', heroBtn: 'liity meihin', missaoTitle: 'missiomme', eventosTitle: 'tulevat tapahtumat', formTitle: 'liity meihin', btnSubmit: 'lähetä ilmoittautuminen' },
  el: { name: 'Ελληνικά', heroH1: 'ενταχθείτε στο κίνημα.<br>γίνετε αμπολισιονιστές.', heroTagline: 'για τη ζωή. για την αξιοπρέπεια. για το μέλλον.', heroBtn: 'ελάτε μαζί μας', missaoTitle: 'η αποστολή μας', eventosTitle: 'επερχόμενα γεγονότα', formTitle: 'ελάτε μαζί μας', btnSubmit: 'αποστολή εγγραφής' },
  hu: { name: 'Magyar', heroH1: 'csatlakozz a mozgalomhoz.<br>légy abolicionista.', heroTagline: 'az életért. a méltóságért. a jövőért.', heroBtn: 'csatlakozz', missaoTitle: 'küldetésünk', eventosTitle: 'közelgő események', formTitle: 'csatlakozz hozzánk', btnSubmit: 'regisztráció küldése' },
  ga: { name: 'Gaeilge', heroH1: 'bí páirteach sa ghluaiseacht.<br>bí i do dhíothóir.', heroTagline: 'ar son na beatha. ar son na dínite. ar son na todhchaí.', heroBtn: 'bí linn', missaoTitle: 'ár misean', eventosTitle: 'imeachtaí atá le teacht', formTitle: 'bí linn', btnSubmit: 'seol clárú' },
  lv: { name: 'Latviešu', heroH1: 'pievienojieties kustībai.<br>esiet abolicionists.', heroTagline: 'par dzīvi. par cieņu. par nākotni.', heroBtn: 'pievienojieties', missaoTitle: 'mūsu misija', eventosTitle: 'gaidāmie pasākumi', formTitle: 'pievienojieties mums', btnSubmit: 'nosūtīt reģistrāciju' },
  lt: { name: 'Lietuvių', heroH1: 'prisijunkite prie judėjimo.<br>būkite abolicionistas.', heroTagline: 'už gyvybę. už orumą. už ateitį.', heroBtn: 'prisijunkite', missaoTitle: 'mūsų misija', eventosTitle: 'artėjantys renginiai', formTitle: 'prisijunkite prie mūsų', btnSubmit: 'siųsti registraciją' },
  mt: { name: 'Malti', heroH1: 'ingħaqad mal-moviment.<br>kun abolizzjonista.', heroTagline: 'għall-ħajja. għad-dinjità. għall-futur.', heroBtn: 'ingħaqad magħna', missaoTitle: 'il-missjoni tagħna', eventosTitle: 'avvenimenti li ġejjin', formTitle: 'ingħaqad magħna', btnSubmit: 'ibgħat reġistrazzjoni' },
  ro: { name: 'Română', heroH1: 'alătură-te mișcării.<br>fii aboliționist.', heroTagline: 'pentru viață. pentru demnitate. pentru viitor.', heroBtn: 'alătură-te', missaoTitle: 'misiunea noastră', eventosTitle: 'evenimente viitoare', formTitle: 'alătură-te nouă', btnSubmit: 'trimite înscrierea' },
  sk: { name: 'Slovenčina', heroH1: 'pridajte sa k hnutiu.<br>buďte abolicionista.', heroTagline: 'za život. za dôstojnosť. za budúcnosť.', heroBtn: 'pridajte sa', missaoTitle: 'naša misia', eventosTitle: 'nadchádzajúce udalosti', formTitle: 'pridajte sa k nám', btnSubmit: 'odoslať registráciu' },
  sl: { name: 'Slovenščina', heroH1: 'pridružite se gibanju.<br>bodite abolicionist.', heroTagline: 'za življenje. za dostojanstvo. za prihodnost.', heroBtn: 'pridružite se', missaoTitle: 'naše poslanstvo', eventosTitle: 'prihajajoči dogodki', formTitle: 'pridružite se nam', btnSubmit: 'pošlji prijavo' },
  sv: { name: 'Svenska', heroH1: 'gå med i rörelsen.<br>bli abolitionist.', heroTagline: 'för livet. för värdigheten. för framtiden.', heroBtn: 'gå med', missaoTitle: 'vårt uppdrag', eventosTitle: 'kommande evenemang', formTitle: 'gå med oss', btnSubmit: 'skicka registrering' }
};

// For remaining languages, use English as base and override key fields
const enBase = translations.en;
for (const [code, overrides] of Object.entries(remaining)) {
  translations[code] = { ...enBase, lang: code, ...overrides,
    title: `abolitionist mission — ${overrides.heroTagline}`,
    footerTagline: overrides.heroTagline,
    footerSub: enBase.footerSub,
    footerCopy: enBase.footerCopy,
    navMissao: overrides.missaoTitle ? overrides.missaoTitle.split(' ').pop() : enBase.navMissao,
    navEventos: overrides.eventosTitle ? overrides.eventosTitle.split(' ').pop() : enBase.navEventos,
    navJunte: overrides.heroBtn || enBase.navJunte,
  };
}

// Language list for the switcher (all codes including pt)
const allLangs = { pt: 'Português', ...Object.fromEntries(Object.entries(translations).map(([k, v]) => [k, v.name])) };

function buildLangSwitcher(currentLang) {
  let html = '<div class="lang-switcher"><select onchange="window.location.href=this.value" aria-label="Language">';
  for (const [code, name] of Object.entries(allLangs)) {
    const href = code === 'pt' ? '/' : `/${code}/`;
    const selected = code === currentLang ? ' selected' : '';
    html += `<option value="${href}"${selected}>${name}</option>`;
  }
  html += '</select></div>';
  return html;
}

function esc(s) { return s.replace(/'/g, "\\'").replace(/\n/g, '\\n'); }

function generateHtml(t) {
  const langSwitcher = buildLangSwitcher(t.lang);

  // Read the base template and replace
  let html = baseHtml;

  // Replace lang attribute
  html = html.replace('lang="pt"', `lang="${t.lang}"`);

  // Title
  html = html.replace(/<title>[^<]+<\/title>/, `<title>${t.title}</title>`);

  // Add lang switcher CSS before </style>
  const langCss = `
    .lang-switcher{position:fixed;bottom:20px;right:20px;z-index:1001}
    .lang-switcher select{font-family:var(--sans);font-size:.8rem;padding:8px 28px 8px 12px;border:1px solid var(--border);border-radius:4px;background:var(--white);color:var(--text);cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 5 5-5' stroke='%234B5563' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;box-shadow:0 2px 8px rgba(0,0,0,.1)}
    .section-dark .lang-switcher select{background:var(--card-dark);color:#fff;border-color:var(--border-dark)}`;
  html = html.replace('</style>', langCss + '\n    </style>');

  // Nav
  html = html.replace('>missão</a>', `>${t.navMissao}</a>`);
  html = html.replace('>eventos</a>', `>${t.navEventos}</a>`);
  html = html.replace('>junte-se</a>', `>${t.navJunte}</a>`);

  // Hero
  html = html.replace('junte-se ao movimento.<br>seja abolicionista.', t.heroH1);
  html = html.replace('pela vida. pela dignidade. pelo futuro.', t.heroTagline);
  html = html.replace('>junte-se a nós</a>', `>${t.heroBtn}</a>`);

  // Mission section
  html = html.replace('>a nossa missão</h2>', `>${t.missaoTitle}</h2>`);
  html = html.replace(/A Abolitionist Mission é um movimento abolicionista com raízes.*?defender\.<\/p>/, `${t.prose1}</p>`);
  html = html.replace(/Somos herdeiros dos abolicionistas.*?cumplicidade\.<\/p>/, `${t.prose2}</p>`);
  html = html.replace('>missão</h3>', `>${t.pillarMissaoTitle}</h3>`);
  html = html.replace(/Acabar com o sacrifício infantil\. Defender toda vida.*?compromissos\./, t.pillarMissaoText);
  html = html.replace('>visão</h3>', `>${t.pillarVisaoTitle}</h3>`);
  html = html.replace(/Um mundo onde nenhuma criança inocente.*?construí-lo\./, t.pillarVisaoText);
  html = html.replace('>valores</h3>', `>${t.pillarValoresTitle}</h3>`);
  html = html.replace('Vida. Verdade. Dignidade. Coragem. Compaixão. Solidariedade.', t.pillarValoresText);

  // Events
  html = html.replace('>próximos eventos</h2>', `>${t.eventosTitle}</h2>`);
  html = html.replace('>participação confirmada</span>', `>${t.eventBadge1}</span>`);
  html = html.replace('>Caminhada pela Vida 2026</h3>', `>${t.eventTitle1}</h3>`);
  html = html.replace(/A Caminhada pela Vida é o maior evento.*?connosco\./, t.eventDesc1);
  html = html.replace('21 de março &middot; 15h00', t.eventDate1);
  html = html.replace('Largo de Camões &rarr; Assembleia da República, Lisboa', t.eventLocal1);
  html = html.replace('>marcha connosco</a>', `>${t.eventBtn1}</a>`);
  html = html.replace('>saber mais</a>', `>${t.eventBtn1b}</a>`);
  html = html.replace('>convívio</span>', `>${t.eventBadge2}</span>`);
  html = html.replace('>Jantar Abolicionista</h3>', `>${t.eventTitle2}</h3>`);
  html = html.replace(/Depois da Caminhada.*?lugar\./, t.eventDesc2);
  html = html.replace('21 de março &middot; após a caminhada', t.eventDate2);
  html = html.replace('>reserva o teu lugar</a>', `>${t.eventBtn2}</a>`);
  html = html.replace('>Mais eventos em breve</h3>', `>${t.eventTitle3}</h3>`);
  html = html.replace(/Estamos a preparar.*?saber\./, t.eventDesc3);
  html = html.replace('>fica a par</a>', `>${t.eventBtn3}</a>`);

  // Form
  html = html.replace('>junte-se a nós</h2>', `>${t.formTitle}</h2>`);
  html = html.replace('preenche o formulário e faz parte do movimento abolicionista.', t.formLead);
  html = html.replace('>nome completo *</label>', `>${t.labelNome}</label>`);
  html = html.replace('placeholder="o teu nome"', `placeholder="${t.phNome}"`);
  html = html.replace('>email *</label>', `>${t.labelEmail}</label>`);
  html = html.replace('>cidade *</label>', `>${t.labelCidade}</label>`);
  html = html.replace('placeholder="a tua cidade"', `placeholder="${t.phCidade}"`);
  html = html.replace('>país *</label>', `>${t.labelPais}</label>`);
  html = html.replace(/>selecione\.\.\.<\/option>/g, `>${t.selecione}</option>`);
  html = html.replace('>telefone</label>', `>${t.labelTelefone}</label>`);
  html = html.replace('placeholder="(opcional)"', `placeholder="${t.phTelefone}"`);
  html = html.replace('>quero participar na: *</label>', `>${t.labelEvento}</label>`);
  html = html.replace('>como soube de nós?</label>', `>${t.labelComoSoube}</label>`);
  html = html.replace('aceito os termos de utilização e a política de privacidade *', t.checkTermos);
  html = html.replace('>enviar inscrição</button>', `>${t.btnSubmit}</button>`);

  // Footer
  html = html.replace(/pela vida\. pela dignidade\. pelo futuro\.(?=<\/p>)/, t.footerTagline);
  html = html.replace('de Portugal para a Europa e a Lusofonia', t.footerSub);
  html = html.replace(/&copy; 2026 abolitionist mission\. todos os direitos reservados\./, t.footerCopy);

  // JS strings
  html = html.replace("'a enviar...'", `'${esc(t.sending)}'`);
  html = html.replace('inscrição enviada com sucesso.', t.successTitle);
  html = html.replace('bem-vindo ao movimento abolicionista.', t.successText);
  html = html.replace("'Erro ao enviar. Tenta novamente.'", `'${esc(t.errorMsg)}'`);

  // Fix asset paths (we're in a subdirectory)
  html = html.replace(/src="icon-filled\.png"/g, 'src="../icon-filled.png"');
  html = html.replace(/src="logo-filled\.png"/g, 'src="../logo-filled.png"');
  html = html.replace(/href="favicon\.png"/g, 'href="../favicon.png"');
  html = html.replace(/href="apple-touch-icon\.png"/g, 'href="../apple-touch-icon.png"');

  // Add lang switcher before </body>
  html = html.replace('</body>', langSwitcher + '\n</body>');

  return html;
}

// Generate all language versions
const publicDir = path.join(__dirname, 'public');

for (const [code, t] of Object.entries(translations)) {
  const dir = path.join(publicDir, code);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const html = generateHtml(t);
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`Generated: /${code}/index.html (${t.name})`);
}

// Also add lang switcher to the main PT page
let ptHtml = baseHtml;
const ptLangCss = `
    .lang-switcher{position:fixed;bottom:20px;right:20px;z-index:1001}
    .lang-switcher select{font-family:var(--sans);font-size:.8rem;padding:8px 28px 8px 12px;border:1px solid var(--border);border-radius:4px;background:var(--white);color:var(--text);cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6'%3E%3Cpath d='M0 0l5 5 5-5' stroke='%234B5563' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center;box-shadow:0 2px 8px rgba(0,0,0,.1)}`;
ptHtml = ptHtml.replace('</style>', ptLangCss + '\n    </style>');
ptHtml = ptHtml.replace('</body>', buildLangSwitcher('pt') + '\n</body>');
fs.writeFileSync(path.join(publicDir, 'index.html'), ptHtml);
console.log('Updated: /index.html (Português) with lang switcher');

console.log(`\nDone! Generated ${Object.keys(translations).length} language versions + updated PT.`);
