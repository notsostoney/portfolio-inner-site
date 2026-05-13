import React, { useEffect, useState } from 'react';
import { Link } from '../general';
import { useLocation, useNavigate } from 'react-router-dom';
import { useT } from '../../context/LanguageContext';
import { tr } from '../../constants/translations';

export interface VerticalNavbarProps {}

const VerticalNavbar: React.FC<VerticalNavbarProps> = (props) => {
    const location = useLocation();
    const t = useT();
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
            <div style={styles.spacer} />
            <div style={styles.forHireContainer} onMouseDown={goToContact} />
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
        marginBottom: 64,
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
        flex: 1,
        justifyContent: 'center',
    },
    spacer: {
        flex: 1,
    },
    forHireContainer: {
        cursor: 'pointer',
        width: '100%',
    },
};

export default VerticalNavbar;
