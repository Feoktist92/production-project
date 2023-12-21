import React from 'react';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={classNames(styles.links, {}, [className])}>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/">
                    {t('Главная')}
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
