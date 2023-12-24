import { Counter } from 'entities/Counter';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

interface MainPageProps {
    className?: string;
}

const MainPage: FC<MainPageProps> = () => {
    const { t } = useTranslation();
    return (
        <div className={classNames('MainPage', {}, [])}>
            {t('Главная страница')}
        </div>
    );
};

export default MainPage;
