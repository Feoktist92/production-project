import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';

interface AboutPageProps {
    className?: string;
}
const AboutPage: FC<AboutPageProps> = () => {
    const { t } = useTranslation('about');

    return <div className={classNames('AboutPage', {}, [])}>{t('О сайте')}</div>;
};

export default AboutPage;
