import React, { FC, useState } from 'react';
import styles from './Sidebar.module.scss';
import { classNames } from 'shared/lib/classNames';
import { ThemeSwitcher } from 'shared/ui';
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div
            className={classNames(
                styles.Sidebar,
                { [styles.collapsed]: collapsed },
                [className]
            )}
        >
            <button onClick={onToggle}>toggle</button>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
