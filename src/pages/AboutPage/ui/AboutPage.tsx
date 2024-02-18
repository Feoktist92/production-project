import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'shared/ui/Page/Page';

interface AboutPageProps {
    className?: string;
}
const AboutPage: FC<AboutPageProps> = () => {
    const { t } = useTranslation('about');

    return (
        <Page className={classNames('AboutPage', {}, [])}>
            {t('О сайте')}
        </Page>
    );
};

export default AboutPage;
