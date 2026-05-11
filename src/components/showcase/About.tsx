import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>Bienvenue</h1>
            <h3>Je suis Antoine Pornin</h3>
            <br />
            <div className="text-block">
                <p>
                    Étudiant en BUT Techniques de Commercialisation option
                    Commerce International à l'IUT de l'Indre (Issoudun).
                    Actuellement en stage chez Golden Sun Health Technology
                    Group à Jinhua, Chine.
                </p>
                <br />
                <p>
                    Merci de visiter mon portfolio. N'hésite pas à me contacter
                    via{' '}
                    <Link to="/contact">ce formulaire</Link> ou directement par
                    email :{' '}
                    <a href="mailto:antoine.pornin.fr@gmail.com">
                        antoine.pornin.fr@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>Mon parcours</h3>
                <br />
                <p>
                    Né le 9 avril 2005 à Issoudun, j'ai grandi avec une forte
                    curiosité pour l'international. Dès le lycée, une
                    opportunité footballistique m'a amené en Allemagne, au
                    Gymnasium de Sankt Georgen, où j'ai vécu une première
                    expérience d'adaptation à l'étranger : nouvelle langue,
                    nouvelle culture, nouvelle autonomie.
                </p>
                <br />
                <p>
                    Cette expérience a ancré en moi le goût du défi international.
                    J'ai ensuite intégré le BUT TC Commerce International à
                    l'IUT de l'Indre, dans un environnement économique riche —
                    Safran et Louis Vuitton sont implantés à proximité — qui
                    m'a donné de solides bases en marketing, négociation,
                    analyse de marchés et gestion de projet.
                </p>
                <br />
                <p>
                    En parallèle de ma formation, j'ai développé une activité
                    d'intermédiation commerciale entre la France et Yiwu
                    (Chine), la capitale mondiale du sourcing. J'identifie et
                    qualifie des fournisseurs pour des entreprises françaises,
                    réduisant leur incertitude avant tout engagement avec un
                    partenaire chinois.
                </p>
                <br />
                <h3>Ce qui me motive</h3>
                <br />
                <p>
                    Je me passionne pour les ponts entre cultures et marchés.
                    L'adaptation interculturelle, la négociation internationale
                    et la communication digitale sont les axes sur lesquels je
                    construis mon profil. Je parle français (natif), anglais
                    (TOEIC 885), allemand (B1/B2) et je débute le mandarin.
                </p>
                <br />
                <p>
                    En dehors du travail, le football a toujours été un pilier
                    de ma vie — il m'a appris la discipline, le travail
                    d'équipe et m'a ouvert les portes de l'Allemagne. Je suis
                    également passionné par le voyage, la culture chinoise et
                    le développement personnel.
                </p>
                <br />
                <p>
                    Tu peux me joindre via la{' '}
                    <Link to="/contact">page contact</Link> ou par email à{' '}
                    <a href="mailto:antoine.pornin.fr@gmail.com">
                        antoine.pornin.fr@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        height: 'auto',
        width: '100%',
    },
};

export default About;
