import React from 'react';
import styles from './Navbar.module.scss';
import { classNames } from 'shared/lib/classNames';
import { AppLink } from 'shared/ui';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(styles.Navbar, {}, [className])}>
            <div className={classNames(styles.links, {}, [className])}>
                <AppLink theme={AppLinkTheme.PRIMARY} to='/'>
                    Главная
                </AppLink>
                <AppLink theme={AppLinkTheme.PRIMARY} to='/about'>
                    О сайте
                </AppLink>
            </div>
        </div>
    );
};
