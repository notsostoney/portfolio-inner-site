import React from 'react';
import { Link } from '../general';
import { useNavigate } from 'react-router-dom';
import { useT } from '../../context/LanguageContext';
import { tr } from '../../constants/translations';

export interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
    const navigate = useNavigate();
    const t = useT();

    const goToContact = () => {
        navigate('/contact');
    };

    return (
        <div style={styles.page}>
            <div style={styles.header}>
                <h1 style={styles.name}>Antoine Pornin</h1>
                <h2>{t(tr['home.subtitle'])}</h2>
            </div>
            <div style={styles.buttons}>
                <Link containerStyle={styles.link} to="about" text={t(tr['nav.about'])} />
                <Link containerStyle={styles.link} to="experience" text={t(tr['nav.experience'])} />
                <Link containerStyle={styles.link} to="projects" text={t(tr['nav.projects'])} />
                <Link containerStyle={styles.link} to="contact" text={t(tr['nav.contact'])} />
            </div>
            <div style={styles.forHireContainer} onMouseDown={goToContact} />
        </div>
    );
};

const styles: StyleSheetCSS = {
    page: {
        left: 0,
        right: 0,
        top: 0,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%',
    },
    header: {
        textAlign: 'center',
        marginBottom: 64,
        marginTop: 64,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttons: {
        justifyContent: 'space-between',
    },
    link: {
        padding: 16,
    },
    forHireContainer: {
        marginTop: 64,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
    },
    name: {
        fontSize: 72,
        marginBottom: 16,
        lineHeight: 0.9,
    },
};

export default Home;
