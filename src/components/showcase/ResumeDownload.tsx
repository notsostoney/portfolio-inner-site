import React from 'react';
import printer from '../../assets/resume/printer.gif';
import { useT, Lang } from '../../context/LanguageContext';
import { tr } from '../../constants/translations';

export interface ResumeDownloadProps {
    altText?: string;
}

const CV_FILES: { lang: Lang; flag: string; nameKey: string; file: string }[] = [
    { lang: 'fr', flag: '🇫🇷', nameKey: 'resume.fr', file: 'cv/Antoine_Pornin_CV_FR.pdf' },
    { lang: 'en', flag: '🇬🇧', nameKey: 'resume.en', file: 'cv/Antoine_Pornin_CV_EN.pdf' },
    { lang: 'de', flag: '🇩🇪', nameKey: 'resume.de', file: 'cv/Antoine_Pornin_CV_DE.pdf' },
    { lang: 'zh', flag: '🇨🇳', nameKey: 'resume.zh', file: 'cv/Antoine_Pornin_CV_ZH.pdf' },
];

const ResumeDownload: React.FC<ResumeDownloadProps> = ({ altText }) => {
    const t = useT();

    return (
        <div style={styles.resumeContainer}>
            <img style={styles.resumePrinter} alt="" src={printer} />
            <div style={styles.resumeContainerText}>
                <h3>{altText ? altText : t(tr['resume.title'])}</h3>
                <div style={styles.buttons}>
                    {CV_FILES.map((cv) => (
                        <a
                            key={cv.lang}
                            rel="noreferrer"
                            target="_blank"
                            href={cv.file}
                            style={styles.link}
                        >
                            <button className="site-button" style={styles.btn}>
                                <span style={styles.flag}>{cv.flag}</span>
                                {t(tr[cv.nameKey])}
                            </button>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    resumeContainer: {
        backgroundColor: 'white',
        padding: 12,
        boxSizing: 'border-box',
        border: '2px solid black',
        borderLeftWidth: 0,
        borderRightWidth: 0,
        width: '100%',
        alignItems: 'center',
    },
    resumeContainerText: {
        flexDirection: 'column',
        flex: 1,
    },
    resumePrinter: {
        width: 56,
        height: 48,
        paddingRight: 24,
    },
    buttons: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: 8,
        marginTop: 8,
    },
    link: {
        textDecoration: 'none',
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        padding: '4px 12px',
        fontSize: 14,
    },
    flag: {
        fontSize: 16,
    },
};

export default ResumeDownload;
