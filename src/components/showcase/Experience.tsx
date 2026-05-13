import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            {/* ── Golden Sun ── */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Golden Sun</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://www.linkedin.com/company/golden-sun-health-technology-group/"
                        >
                            <h4>Golden Sun Health Technology Group</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Stagiaire Commercial International</h3>
                        <b>
                            <p>Fév – Juil 2026 · 4 mois · Jinhua, Chine</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Développement des ventes à l'international d'une entreprise
                    dont l'activité est jusqu'ici essentiellement locale.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Développement des ventes à l'international — analyse
                            de marchés étrangers et identification d'opportunités
                            export.
                        </p>
                    </li>
                    <li>
                        <p>
                            Adaptation interculturelle des argumentaires
                            commerciaux selon les marchés cibles.
                        </p>
                    </li>
                    <li>
                        <p>
                            Création de contenus commerciaux en anglais pour les
                            marchés étrangers.
                        </p>
                    </li>
                    <li>
                        <p>
                            Échanges directs avec des prospects et partenaires
                            internationaux.
                        </p>
                    </li>
                </ul>
            </div>

            {/* ── Intermédiation Yiwu ── */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Yiwu Sourcing</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Intermédiaire Commercial France–Chine</h3>
                        <b>
                            <p>2024 – présent · Yiwu, Chine</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Activité indépendante : pont entre la France et Yiwu, la
                    capitale mondiale du sourcing.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Identification et qualification de fournisseurs pour
                            des entreprises françaises.
                        </p>
                    </li>
                    <li>
                        <p>
                            Présélection, comparaison d'offres, réduction de
                            l'incertitude avant tout partenariat.
                        </p>
                    </li>
                    <li>
                        <p>
                            Négociation et suivi des relations commerciales
                            France–Chine.
                        </p>
                    </li>
                </ul>
            </div>

            {/* ── IUT ── */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>IUT de l'Indre</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>BUT TC – Commerce International</h3>
                        <b>
                            <p>2023 – 2026 · Issoudun, France</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Formation alliant théorie et pratique puisqu'à la fin de chaque années un stage est nécessaire pour valider le diplôme. 
                </p>
                <br />
                <ul>
                    <li>
                        <p>Marketing, vente, négociation, analyse commerciale.</p>
                    </li>
                    <li>
                        <p>
                            Gestion de projet, communication digitale,
                            e-commerce international.
                        </p>
                    </li>
                    <li>
                        <p>
                            Anglais professionnel (TOEIC 885), initiation au
                            mandarin.
                        </p>
                    </li>
                </ul>
            </div>

            {/* ── Sankt Georgen ── */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Sankt Georgen</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Expérience Internationale – Football</h3>
                        <b>
                            <p>Sankt Georgen · Allemagne</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Opportunité footballistique : changer de pays pour grandir.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Immersion totale dans un environnement germanophone —
                            allemand B1/B2.
                        </p>
                    </li>
                    <li>
                        <p>
                            Adaptation rapide, autonomie et intégration dans une
                            culture différente.
                        </p>
                    </li>
                    <li>
                        <p>
                            Discipline sportive et développement du sens du
                            collectif.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
