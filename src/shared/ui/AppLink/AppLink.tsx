import React, { FC, ReactNode, memo } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import styles from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    children?: ReactNode;
    theme?: AppLinkTheme;
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        to,
        ...otherProps
    } = props;

    return (
        <Link
            to={to}
            className={classNames(styles.AppLink, {}, [
                className,
                styles[theme],
            ])}
            {...otherProps}
        >
            {children}
        </Link>
    );
});
