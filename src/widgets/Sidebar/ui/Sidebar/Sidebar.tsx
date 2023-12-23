import React, { FC, useState } from 'react';

import { classNames } from 'shared/lib/classNames';
import { AppLink, Button, ThemeSwitcher } from 'shared/ui';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);
    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.Sidebar,
                { [styles.collapsed]: collapsed },
                [className],
            )}
        >
            <Button
                className={styles.collapseBtn}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ThemeButton.BACKGROUND_INVERTED}
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>

            <div className={styles.items}>
                <AppLink className={styles.item} theme={AppLinkTheme.SECONDARY} to={RoutesPath.main}>
                    <MainIcon className={styles.icon} />
                    <span className={styles.link}>{t('Главная')}</span>
                </AppLink>

                <AppLink className={styles.item} theme={AppLinkTheme.SECONDARY} to={RoutesPath.about}>
                    <AboutIcon className={styles.icon} />
                    <span className={styles.link}>
                        {t('О сайте')}
                    </span>
                </AppLink>
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang} />
            </div>
        </div>
    );
};
