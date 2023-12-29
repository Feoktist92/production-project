import React, { FC, memo, useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeSwitcher } from 'shared/ui';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { sidebarItemsList } from '../../model/items';
import { SidebarItem } from '../SidebarItem/SidebarItem';

import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

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
                {sidebarItemsList.map((item) => (
                    <SidebarItem item={item} collapsed={collapsed} key={item.path} />
                ))}
            </div>

            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} className={styles.lang} />
            </div>
        </div>
    );
});
