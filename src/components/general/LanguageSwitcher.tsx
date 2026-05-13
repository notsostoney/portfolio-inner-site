import React from 'react';
import { useLang, Lang } from '../../context/LanguageContext';

const LANGS: { code: Lang; label: string }[] = [
    { code: 'fr', label: 'FR' },
    { code: 'en', label: 'EN' },
    { code: 'de', label: 'DE' },
    { code: 'zh', label: '中' },
];

const LanguageSwitcher: React.FC = () => {
    const { lang, setLang } = useLang();

    return (
        <div style={styles.container}>
            {LANGS.map((l, i) => (
                <React.Fragment key={l.code}>
                    <button
                        className="site-button"
                        style={Object.assign(
                            {},
                            styles.btn,
                            lang === l.code && styles.active
                        )}
                        onMouseDown={() => setLang(l.code)}
                    >
                        {l.label}
                    </button>
                    {i < LANGS.length - 1 && (
                        <span style={styles.sep}>|</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

const styles: StyleSheetCSS = {
    container: {
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        marginRight: 8,
    },
    btn: {
        padding: '2px 6px',
        fontSize: 12,
        fontFamily: 'MSSerif',
        minWidth: 'auto',
        height: 22,
    },
    active: {
        background: '#0000aa',
        color: 'white',
    },
    sep: {
        fontSize: 12,
        color: '#666',
        padding: '0 2px',
        userSelect: 'none',
    },
};

export default LanguageSwitcher;
