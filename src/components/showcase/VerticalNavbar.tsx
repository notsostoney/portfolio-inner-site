import React, { useEffect, useState } from 'react';
import { Link } from '../general';
import { useLocation, useNavigate } from 'react-router-dom';
import { useT, useLang, Lang } from '../../context/LanguageContext';
import { tr } from '../../constants/translations';

const LANGS: { code: Lang; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'zh', label: '中' },
];

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = (props) => {
    const location = useLocation();
    const t = useT();
    const { lang, setLang } = useLang();
    const [projectsExpanded, setProjectsExpanded] = useState(false);
    const [isHome, setIsHome] = useState(false);

    const navigate = useNavigate();
    const goToContact = () => {
        navigate('/contact');
    };

    useEffect(() => {
        if (location.pathname.includes('/projects')) {
            setProjectsExpanded(true);
        } else {
            setProjectsExpanded(false);
        }
        if (location.pathname === '/') {
            setIsHome(true);
        } else {
            setIsHome(false);
        }
        return () => {};
    }, [location.pathname]);

    return !isHome ? (
        <div style={styles.navbar}>
            <div style={styles.header}>
                <h1 style={styles.headerText}>Antoine</h1>
                <h1 style={styles.headerText}>Pornin</h1>
                <h3 style={styles.headerShowcase}>Showcase '26</h3>
                <div style={styles.langSwitcher}>
                    {LANGS.map((l) => (
                        <button
                            key={l.code}
                            className="site-button"
                            style={Object.assign(
                                {},
                                styles.langBtn,
                                lang === l.code && styles.langBtnActive
                            )}
                            onMouseDown={() => setLang(l.code)}
                        >
                            {l.label}
                        </button>
                    ))}
                </div>
            </div>
            <div style={styles.links}>
                <Link containerStyle={styles.link} to="" text="HOME" />
                <Link containerStyle={styles.link} to="about" text={t(tr['nav.about'])} />
                <Link
                    containerStyle={styles.link}
                    to="experience"
                    text={t(tr['nav.experience'])}
                />
                <Link
                    containerStyle={Object.assign(
                        {},
                        styles.link,
                        projectsExpanded && styles.expandedLink
                    )}
                    to="projects"
                    text={t(tr['nav.projects'])}
                />
                {projectsExpanded && (
                    <div style={styles.insetLinks}>
                        <Link
                            containerStyle={styles.insetLink}
                            to="projects/software"
                            text="SOFTWARE"
                        />
                        <Link
                            containerStyle={styles.insetLink}
                            to="projects/music"
                            text="MUSIC"
                        />
                        <Link
                            containerStyle={styles.insetLink}
                            to="projects/art"
                            text="ART"
                        />
                    </div>
                )}
                <Link
                    containerStyle={styles.link}
                    to="contact"
                    text={t(tr['nav.contact'])}
                />
            </div>
        </div>
    ) : (
        <></>
    );
};

const styles: StyleSheetCSS = {
    navbar: {
        width: 300,
        height: '100%',
        flexDirection: 'column',
        padding: 48,
        boxSizing: 'border-box',
        position: 'fixed',
        overflow: 'hidden',
    },
    header: {
        flexDirection: 'column',
        marginBottom: 32,
    },
    headerText: {
        fontSize: 38,
        lineHeight: 1,
    },
    headerShowcase: {
        marginTop: 12,
    },
    logo: {
        width: '100%',
        marginBottom: 8,
    },
    link: {
        marginBottom: 32,
    },
    expandedLink: {
        marginBottom: 16,
    },
    insetLinks: {
        flexDirection: 'column',
        marginLeft: 32,
        marginBottom: 16,
    },
    insetLink: {
        marginBottom: 8,
    },
    links: {
        flexDirection: 'column',
        justifyContent: 'center',
        marginBottom: 24,
    },
    spacer: {
        flex: 1,
    },
    langSwitcher: {
        display: 'flex',
        flexDirection: 'row',
        gap: 4,
        marginTop: 16,
        marginBottom: 8,
    },
    langBtn: {
        flex: 1,
        padding: '4px 0',
        fontSize: 13,
        fontFamily: 'MSSerif',
        textAlign: 'center',
    },
    langBtnActive: {
        background: '#0000aa',
        color: 'white',
    },
};

export default VerticalNavbar;
