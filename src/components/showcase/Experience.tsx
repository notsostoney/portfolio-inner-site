import React from 'react';
import ResumeDownload from './ResumeDownload';
import { useT } from '../../context/LanguageContext';
import { tr } from '../../constants/translations';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    const t = useT();

    return (
        <div className="site-page-content">
            <ResumeDownload />

            {/* ── Golden Sun ── */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Golden Sun</h1>
                        <h4>Golden Sun Health Technology Group</h4>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>{t(tr['exp.gs.role'])}</h3>
                        <b><p>{t(tr['exp.gs.date'])}</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>{t(tr['exp.gs.intro'])}</p>
                <br />
                <ul>
                    <li><p>{t(tr['exp.gs.li1'])}</p></li>
                    <li><p>{t(tr['exp.gs.li2'])}</p></li>
                    <li><p>{t(tr['exp.gs.li3'])}</p></li>
                    <li><p>{t(tr['exp.gs.li4'])}</p></li>
                </ul>
            </div>

            {/* ── Yiwu ── */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Yiwu Sourcing</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>{t(tr['exp.yiwu.role'])}</h3>
                        <b><p>{t(tr['exp.yiwu.date'])}</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>{t(tr['exp.yiwu.intro'])}</p>
                <br />
                <ul>
                    <li><p>{t(tr['exp.yiwu.li1'])}</p></li>
                    <li><p>{t(tr['exp.yiwu.li2'])}</p></li>
                    <li><p>{t(tr['exp.yiwu.li3'])}</p></li>
                </ul>
            </div>

            {/* ── IUT ── */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>IUT de l'Indre</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>{t(tr['exp.iut.role'])}</h3>
                        <b><p>{t(tr['exp.iut.date'])}</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>{t(tr['exp.iut.intro'])}</p>
                <br />
                <ul>
                    <li><p>{t(tr['exp.iut.li1'])}</p></li>
                    <li><p>{t(tr['exp.iut.li2'])}</p></li>
                    <li><p>{t(tr['exp.iut.li3'])}</p></li>
                </ul>
            </div>

            {/* ── Sankt Georgen ── */}
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Sankt Georgen</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>{t(tr['exp.sg.role'])}</h3>
                        <b><p>{t(tr['exp.sg.date'])}</p></b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>{t(tr['exp.sg.intro'])}</p>
                <br />
                <ul>
                    <li><p>{t(tr['exp.sg.li1'])}</p></li>
                    <li><p>{t(tr['exp.sg.li2'])}</p></li>
                    <li><p>{t(tr['exp.sg.li3'])}</p></li>
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
};

export default Experience;
