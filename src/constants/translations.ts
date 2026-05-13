import { Lang } from '../context/LanguageContext';

type T = Record<Lang, string>;

export const tr: Record<string, T> = {
    // ── Navigation ──────────────────────────────────────────────────────────
    'nav.about':      { fr: 'À PROPOS', en: 'ABOUT',      de: 'ÜBER MICH', zh: '关于' },
    'nav.experience': { fr: 'EXPÉRIENCES', en: 'EXPERIENCE', de: 'ERFAHRUNG', zh: '经历' },
    'nav.projects':   { fr: 'PROJETS',    en: 'PROJECTS',  de: 'PROJEKTE',  zh: '项目' },
    'nav.contact':    { fr: 'CONTACT',    en: 'CONTACT',   de: 'KONTAKT',   zh: '联系' },

    // ── Home ────────────────────────────────────────────────────────────────
    'home.subtitle': {
        fr: 'Commerce International · Business Dev',
        en: 'International Trade · Business Dev',
        de: 'Internationaler Handel · Business Dev',
        zh: '国际贸易 · 商业发展',
    },

    // ── About ───────────────────────────────────────────────────────────────
    'about.title': { fr: 'Bienvenue', en: 'Welcome', de: 'Willkommen', zh: '欢迎' },
    'about.subtitle': {
        fr: 'Je suis Antoine Pornin',
        en: 'I am Antoine Pornin',
        de: 'Ich bin Antoine Pornin',
        zh: '我是 Antoine Pornin',
    },
    'about.intro1': {
        fr: "Étudiant en BUT Techniques de Commercialisation option Commerce International à l'IUT de l'Indre (Issoudun). Actuellement en stage chez Golden Sun Health Technology Group à Jinhua, Chine.",
        en: "Student in International Trade (BUT TC) at IUT de l'Indre (Issoudun). Currently interning at Golden Sun Health Technology Group in Jinhua, China.",
        de: "Student im Bereich Internationaler Handel (BUT TC) am IUT de l'Indre (Issoudun). Derzeit Praktikant bei der Golden Sun Health Technology Group in Jinhua, China.",
        zh: '就读于法国兰德里工学院（伊苏敦）国际商务专业（BUT TC）。目前在中国金华金太阳健康科技集团实习。',
    },
    'about.intro2': {
        fr: "Merci de visiter mon portfolio. N'hésite pas à me contacter via ce formulaire ou directement par email :",
        en: 'Thank you for visiting my portfolio. Feel free to contact me via this form or directly by email:',
        de: 'Danke für Ihren Besuch auf meinem Portfolio. Kontaktieren Sie mich gerne über dieses Formular oder direkt per E-Mail:',
        zh: '感谢您访问我的作品集。欢迎通过联系表单或直接发送电子邮件与我联系：',
    },
    'about.section.journey': {
        fr: 'Mon parcours',
        en: 'My Journey',
        de: 'Mein Werdegang',
        zh: '我的历程',
    },
    'about.p1': {
        fr: "Né le 9 avril 2005 à Issoudun, j'ai grandi avec une forte curiosité pour l'international. Dès la fin du collège, une opportunité footballistique m'a amené en Allemagne, au Gymnasium de Sankt Georgen, où j'ai vécu une première expérience d'adaptation à l'étranger : nouvelle langue, nouvelle culture, nouvelle autonomie.",
        en: 'Born on April 9, 2005 in Issoudun, I grew up with a strong curiosity for the world. At the end of middle school, a football opportunity took me to Germany, to the Gymnasium of Sankt Georgen, where I experienced my first cultural immersion abroad: new language, new culture, new autonomy.',
        de: 'Ich wurde am 9. April 2005 in Issoudun geboren und bin mit einer starken Neugier für die Welt aufgewachsen. Am Ende der Mittelschule brachte mich eine Fußballchance nach Deutschland, ans Gymnasium Sankt Georgen, wo ich meine erste kulturelle Auslandserfahrung machte: neue Sprache, neue Kultur, neue Selbstständigkeit.',
        zh: '2005年4月9日生于伊苏敦，从小对国际事务充满好奇。初中结束时，一次足球机会让我来到德国圣格奥尔根文理中学，在那里经历了我人生中第一次海外文化适应：新语言、新文化、新的独立生活。',
    },
    'about.p2': {
        fr: "Cette expérience a ancré en moi le goût du défi international. J'ai ensuite intégré le BUT TC Commerce International à l'IUT de l'Indre, dans un environnement économique riche — Safran et Louis Vuitton sont implantés à proximité — qui m'a donné de solides bases en marketing, négociation, analyse de marchés et gestion de projet.",
        en: "This experience gave me a taste for international challenges. I then enrolled in the International Trade program (BUT TC) at IUT de l'Indre, in a rich economic environment — with companies like Safran and Louis Vuitton nearby — giving me a solid foundation in marketing, negotiation, market analysis and project management.",
        de: "Diese Erfahrung hat in mir die Leidenschaft für internationale Herausforderungen geweckt. Anschließend habe ich das Programm für internationalen Handel (BUT TC) am IUT de l'Indre begonnen, in einem wirtschaftlich starken Umfeld — mit Unternehmen wie Safran und Louis Vuitton in der Nähe — und solide Grundlagen in Marketing, Verhandlung, Marktanalyse und Projektmanagement erworben.",
        zh: '这段经历让我爱上了国际挑战。随后，我进入兰德里工学院就读国际商务专业（BUT TC），在萨夫朗、路易威登等知名企业汇聚的经济活跃环境中，打下了市场营销、谈判、市场分析和项目管理的坚实基础。',
    },
    'about.p3': {
        fr: "En parallèle de ma formation, j'ai développé une activité d'intermédiation commerciale entre la France et Yiwu (Chine), la capitale mondiale du sourcing. J'identifie et qualifie des fournisseurs pour des entreprises françaises, réduisant leur incertitude avant tout engagement avec un partenaire chinois.",
        en: "Alongside my studies, I developed a commercial intermediation activity between France and Yiwu (China), the world's sourcing capital. I identify and qualify suppliers for French companies, reducing their uncertainty before engaging with a Chinese partner.",
        de: 'Neben meinem Studium habe ich eine Handelsvermittlungstätigkeit zwischen Frankreich und Yiwu (China), der weltweiten Sourcing-Hauptstadt, aufgebaut. Ich identifiziere und qualifiziere Lieferanten für französische Unternehmen und reduziere deren Unsicherheit vor der Zusammenarbeit mit chinesischen Partnern.',
        zh: '在学习期间，我同时开展了法国与义乌（中国）之间的商业中介活动。义乌是全球最大的小商品集散地。我为法国企业甄选和评估供应商，降低他们在与中国合作伙伴合作前的不确定性。',
    },
    'about.section.motivation': {
        fr: 'Ce qui me motive',
        en: 'What Drives Me',
        de: 'Was mich antreibt',
        zh: '我的动力',
    },
    'about.p4': {
        fr: "Je me passionne pour les ponts entre cultures et marchés. L'adaptation interculturelle, la négociation internationale et la communication digitale sont les axes sur lesquels je construis mon profil. Je parle français (natif), anglais (TOEIC 885), allemand (B1/B2) et je débute le mandarin.",
        en: "I am passionate about bridging cultures and markets. Intercultural adaptation, international negotiation and digital communication are the pillars on which I am building my profile. I speak French (native), English (TOEIC 885), German (B1/B2) and I am beginning Mandarin.",
        de: 'Ich begeistere mich für die Verbindung von Kulturen und Märkten. Interkulturelle Anpassung, internationale Verhandlung und digitale Kommunikation sind die Schwerpunkte, auf denen ich mein Profil aufbaue. Ich spreche Französisch (Muttersprache), Englisch (TOEIC 885), Deutsch (B1/B2) und beginne mit Mandarin.',
        zh: '我热衷于连接不同文化与市场。跨文化适应、国际谈判和数字传播是我构建个人竞争力的三大核心方向。我会说法语（母语）、英语（TOEIC 885）、德语（B1/B2），并正在学习普通话。',
    },
    'about.p5': {
        fr: "En dehors du travail, le football a toujours été un pilier de ma vie — il m'a appris la discipline, le travail d'équipe et m'a ouvert les portes de l'Allemagne. Je suis également passionné par le voyage, la culture chinoise et le développement personnel.",
        en: 'Outside of work, football has always been a pillar of my life — it taught me discipline, teamwork and opened the doors to Germany for me. I am also passionate about travel, Chinese culture and personal development.',
        de: 'Außerhalb der Arbeit war Fußball schon immer ein wichtiger Teil meines Lebens — er hat mir Disziplin, Teamgeist gelehrt und mir die Türen nach Deutschland geöffnet. Ich begeistere mich außerdem für Reisen, chinesische Kultur und persönliche Entwicklung.',
        zh: '工作之外，足球一直是我生活的重要支柱——它教会了我纪律和团队合作，也为我打开了德国的大门。我同样热爱旅行、中国文化和自我提升。',
    },
    'about.contact.prefix': {
        fr: 'Tu peux me joindre via la ',
        en: 'You can reach me via the ',
        de: 'Sie können mich über die ',
        zh: '您可以通过',
    },
    'about.contact.link': {
        fr: 'page contact',
        en: 'contact page',
        de: 'Kontaktseite',
        zh: '联系页面',
    },
    'about.contact.suffix': {
        fr: ' ou par email à ',
        en: ' or by email at ',
        de: ' erreichen oder per E-Mail an ',
        zh: '联系我，或直接发送电子邮件至',
    },

    // ── Experience ──────────────────────────────────────────────────────────
    'exp.gs.role': {
        fr: 'Stagiaire Commercial International',
        en: 'International Sales Intern',
        de: 'Praktikant internationaler Vertrieb',
        zh: '国际商务实习生',
    },
    'exp.gs.date': {
        fr: 'Fév – Juil 2026 · 4 mois · Jinhua, Chine',
        en: 'Feb – Jul 2026 · 4 months · Jinhua, China',
        de: 'Feb – Jul 2026 · 4 Monate · Jinhua, China',
        zh: '2026年2月–7月 · 4个月 · 中国金华',
    },
    'exp.gs.intro': {
        fr: "Développement des ventes à l'international d'une entreprise dont l'activité est jusqu'ici essentiellement locale.",
        en: 'Developing international sales for a company whose activity was until then essentially local.',
        de: 'Entwicklung des internationalen Vertriebs eines Unternehmens, das bis dahin hauptsächlich lokal tätig war.',
        zh: '为一家此前主要面向本地市场的企业开拓国际销售渠道。',
    },
    'exp.gs.li1': {
        fr: "Développement des ventes à l'international — analyse de marchés étrangers et identification d'opportunités export.",
        en: 'International sales development — analysis of foreign markets and identification of export opportunities.',
        de: 'Internationaler Vertriebsaufbau — Analyse ausländischer Märkte und Identifizierung von Exportchancen.',
        zh: '国际市场开发——分析海外市场，识别出口机会。',
    },
    'exp.gs.li2': {
        fr: "Adaptation interculturelle des argumentaires commerciaux selon les marchés cibles.",
        en: 'Cross-cultural adaptation of sales pitches for target markets.',
        de: 'Interkulturelle Anpassung der Verkaufsargumente für Zielmärkte.',
        zh: '针对目标市场进行商业话术的跨文化调整。',
    },
    'exp.gs.li3': {
        fr: "Création de contenus commerciaux en anglais pour les marchés étrangers.",
        en: 'Creation of commercial content in English for foreign markets.',
        de: 'Erstellung kommerzieller Inhalte auf Englisch für ausländische Märkte.',
        zh: '为海外市场创作英语商业内容。',
    },
    'exp.gs.li4': {
        fr: "Échanges directs avec des prospects et partenaires internationaux.",
        en: 'Direct communication with international prospects and partners.',
        de: 'Direkter Austausch mit internationalen Interessenten und Partnern.',
        zh: '直接与国际潜在客户及合作伙伴沟通往来。',
    },
    'exp.yiwu.role': {
        fr: 'Intermédiaire Commercial France–Chine',
        en: 'France–China Trade Intermediary',
        de: 'Handelsvermittler Frankreich–China',
        zh: '法中商业中间商',
    },
    'exp.yiwu.date': {
        fr: '2024 – présent · Yiwu, Chine',
        en: '2024 – present · Yiwu, China',
        de: '2024 – heute · Yiwu, China',
        zh: '2024年至今 · 中国义乌',
    },
    'exp.yiwu.intro': {
        fr: "Activité indépendante : pont entre la France et Yiwu, la capitale mondiale du sourcing.",
        en: 'Independent activity: bridging France and Yiwu, the world capital of sourcing.',
        de: 'Selbstständige Tätigkeit: Verbindung zwischen Frankreich und Yiwu, der weltweiten Sourcing-Hauptstadt.',
        zh: '独立从事中介业务，连接法国与全球最大小商品集散地——义乌。',
    },
    'exp.yiwu.li1': {
        fr: "Identification et qualification de fournisseurs pour des entreprises françaises.",
        en: 'Identification and qualification of suppliers for French companies.',
        de: 'Identifizierung und Qualifizierung von Lieferanten für französische Unternehmen.',
        zh: '为法国企业甄别和评估供应商。',
    },
    'exp.yiwu.li2': {
        fr: "Présélection, comparaison d'offres, réduction de l'incertitude avant tout partenariat.",
        en: "Pre-selection, comparison of offers, reducing uncertainty before any partnership.",
        de: 'Vorauswahl, Angebotsvergleich, Risikominimierung vor jeder Partnerschaft.',
        zh: '预筛选、报价比较，降低合作前的不确定性。',
    },
    'exp.yiwu.li3': {
        fr: "Négociation et suivi des relations commerciales France–Chine.",
        en: 'Negotiation and follow-up of France–China business relations.',
        de: 'Verhandlung und Betreuung der Handelsbeziehungen Frankreich–China.',
        zh: '谈判并跟进法中商业合作关系。',
    },
    'exp.iut.role': {
        fr: 'BUT TC – Commerce International',
        en: 'BUT TC – International Trade',
        de: 'BUT TC – Internationaler Handel',
        zh: 'BUT TC – 国际商务',
    },
    'exp.iut.date': {
        fr: '2023 – 2026 · Issoudun, France',
        en: '2023 – 2026 · Issoudun, France',
        de: '2023 – 2026 · Issoudun, Frankreich',
        zh: '2023 – 2026 · 法国伊苏敦',
    },
    'exp.iut.intro': {
        fr: "Formation alliant théorie et pratique puisqu'à la fin de chaque année un stage est nécessaire pour valider le diplôme.",
        en: "A program combining theory and practice, with a mandatory internship at the end of each year to validate the degree.",
        de: 'Ein Programm, das Theorie und Praxis verbindet, mit einem Pflichtpraktikum am Ende jedes Jahres zur Diplomvalidierung.',
        zh: '理论与实践相结合的专业，每学年末均需完成规定实习方可获得学位认证。',
    },
    'exp.iut.li1': {
        fr: "Marketing, vente, négociation, analyse commerciale.",
        en: 'Marketing, sales, negotiation, commercial analysis.',
        de: 'Marketing, Vertrieb, Verhandlung, Unternehmensanalyse.',
        zh: '市场营销、销售、谈判、商业分析。',
    },
    'exp.iut.li2': {
        fr: "Gestion de projet, communication digitale, e-commerce international.",
        en: 'Project management, digital communication, international e-commerce.',
        de: 'Projektmanagement, digitale Kommunikation, internationaler E-Commerce.',
        zh: '项目管理、数字传播、国际电子商务。',
    },
    'exp.iut.li3': {
        fr: "Anglais professionnel (TOEIC 885), initiation au mandarin.",
        en: 'Professional English (TOEIC 885), introduction to Mandarin.',
        de: 'Professionelles Englisch (TOEIC 885), Einführung ins Mandarin.',
        zh: '职业英语（TOEIC 885），普通话入门。',
    },
    'exp.sg.role': {
        fr: 'Expérience Internationale – Football',
        en: 'International Experience – Football',
        de: 'Internationale Erfahrung – Fußball',
        zh: '海外足球经历',
    },
    'exp.sg.date': {
        fr: 'Sankt Georgen · Allemagne',
        en: 'Sankt Georgen · Germany',
        de: 'Sankt Georgen · Deutschland',
        zh: '德国圣格奥尔根',
    },
    'exp.sg.intro': {
        fr: "Opportunité footballistique : changer de pays pour grandir.",
        en: 'A football opportunity: moving abroad to grow as a person.',
        de: 'Eine Fußballchance: ins Ausland gehen, um zu wachsen.',
        zh: '借助足球机会只身赴德，在异国他乡历练成长。',
    },
    'exp.sg.li1': {
        fr: "Immersion totale dans un environnement germanophone — allemand B1/B2.",
        en: 'Total immersion in a German-speaking environment — German B1/B2.',
        de: 'Vollständige Immersion in einem deutschsprachigen Umfeld — Deutsch B1/B2.',
        zh: '全身心融入德语环境，德语水平达到B1/B2。',
    },
    'exp.sg.li2': {
        fr: "Adaptation rapide, autonomie et intégration dans une culture différente.",
        en: 'Rapid adaptation, autonomy and integration into a different culture.',
        de: 'Schnelle Anpassung, Selbstständigkeit und Integration in eine andere Kultur.',
        zh: '快速适应、独立生活，融入异国文化。',
    },
    'exp.sg.li3': {
        fr: "Discipline sportive et développement du sens du collectif.",
        en: 'Sports discipline and development of team spirit.',
        de: 'Sportliche Disziplin und Entwicklung des Teamgeistes.',
        zh: '体育纪律训练，培养集体合作意识。',
    },

    // ── Contact ─────────────────────────────────────────────────────────────
    'contact.intro': {
        fr: "Disponible pour des opportunités en commerce international, business development ou communication digitale. N'hésitez pas à me contacter !",
        en: "Available for opportunities in international trade, business development or digital communication. Don't hesitate to contact me!",
        de: 'Verfügbar für Möglichkeiten im internationalen Handel, Business Development oder digitaler Kommunikation. Zögern Sie nicht, mich zu kontaktieren!',
        zh: '欢迎洽谈国际贸易、商业发展或数字传播方向的合作机会，随时联系我！',
    },
    'contact.email.label': { fr: 'Email :', en: 'Email:', de: 'E-Mail:', zh: '电子邮件：' },
    'contact.form.name': { fr: 'Votre nom :', en: 'Your name:', de: 'Ihr Name:', zh: '您的姓名：' },
    'contact.form.name.ph': { fr: 'Nom', en: 'Name', de: 'Name', zh: '姓名' },
    'contact.form.email': { fr: 'Email :', en: 'Email:', de: 'E-Mail:', zh: '电子邮件：' },
    'contact.form.email.ph': { fr: 'Email', en: 'Email', de: 'E-Mail', zh: '邮箱' },
    'contact.form.message': { fr: 'Message :', en: 'Message:', de: 'Nachricht:', zh: '留言：' },
    'contact.form.message.ph': { fr: 'Votre message...', en: 'Your message...', de: 'Ihre Nachricht...', zh: '您的留言...' },
    'contact.form.send': { fr: 'Envoyer le message', en: 'Send message', de: 'Nachricht senden', zh: '发送消息' },
    'contact.form.info': {
        fr: 'Le message ouvre votre messagerie',
        en: 'The message will open your mail client',
        de: 'Die Nachricht öffnet Ihren E-Mail-Client',
        zh: '消息将打开您的邮件客户端',
    },
    'contact.form.thanks': {
        fr: "Merci ! Votre messagerie va s'ouvrir.",
        en: 'Thank you! Your mail client will open.',
        de: 'Danke! Ihr E-Mail-Client wird geöffnet.',
        zh: '感谢！您的邮件客户端即将打开。',
    },
    'contact.required': { fr: '= requis', en: '= required', de: '= erforderlich', zh: '= 必填' },

    // ── Resume ───────────────────────────────────────────────────────────────
    'resume.title': {
        fr: 'Télécharger mon CV',
        en: 'Download my CV',
        de: 'Lebenslauf herunterladen',
        zh: '下载我的简历',
    },
    'resume.fr': { fr: 'Français', en: 'French', de: 'Französisch', zh: '法语版' },
    'resume.en': { fr: 'Anglais', en: 'English', de: 'Englisch', zh: '英语版' },
    'resume.de': { fr: 'Allemand', en: 'German', de: 'Deutsch', zh: '德语版' },
    'resume.zh': { fr: 'Chinois', en: 'Chinese', de: 'Chinesisch', zh: '中文版' },
    'resume.contact': {
        fr: 'Contactez-moi pour le recevoir !',
        en: 'Contact me to receive it!',
        de: 'Kontaktieren Sie mich, um ihn zu erhalten!',
        zh: '联系我获取！',
    },
};
