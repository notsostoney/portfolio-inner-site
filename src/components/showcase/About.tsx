import React from 'react';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';
import { useT } from '../../context/LanguageContext';
import { tr } from '../../constants/translations';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    const t = useT();

    return (
        <div className="site-page-content">
            <h1 style={{ marginLeft: -16 }}>{t(tr['about.title'])}</h1>
            <h3>{t(tr['about.subtitle'])}</h3>
            <br />
            <div className="text-block">
                <p>{t(tr['about.intro1'])}</p>
                <br />
                <p>
                    {t(tr['about.intro2'])}{' '}
                    <Link to="/contact">{t(tr['about.contact.link'])}</Link>{' '}
                    {t(tr['about.contact.suffix'])}
                    <a href="mailto:antoine.pornin.fr@gmail.com">
                        antoine.pornin.fr@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>{t(tr['about.section.journey'])}</h3>
                <br />
                <p>{t(tr['about.p1'])}</p>
                <br />
                <p>{t(tr['about.p2'])}</p>
                <br />
                <p>{t(tr['about.p3'])}</p>
                <br />
                <h3>{t(tr['about.section.motivation'])}</h3>
                <br />
                <p>{t(tr['about.p4'])}</p>
                <br />
                <p>{t(tr['about.p5'])}</p>
                <br />
                <p>
                    {t(tr['about.contact.prefix'])}
                    <Link to="/contact">{t(tr['about.contact.link'])}</Link>
                    {t(tr['about.contact.suffix'])}
                    <a href="mailto:antoine.pornin.fr@gmail.com">
                        antoine.pornin.fr@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

export default About;
