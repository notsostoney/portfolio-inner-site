import React, { createContext, useContext, useState } from 'react';

export type Lang = 'fr' | 'en' | 'de' | 'zh';

interface LanguageContextType {
    lang: Lang;
    setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageContextType>({
    lang: 'fr',
    setLang: () => {},
});

export const useLang = () => useContext(LanguageContext);

export const useT = () => {
    const { lang } = useLang();
    return (key: Record<Lang, string>) => key[lang];
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    const [lang, setLang] = useState<Lang>('fr');
    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    );
};
