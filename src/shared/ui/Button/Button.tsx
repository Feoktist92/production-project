import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import styles from './Button.module.scss';
import { classNames } from 'shared/lib/classNames';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: ReactNode;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const { className, children, theme, ...otherProps } = props;

    return (
        <button
            className={classNames(styles.Button, {}, [
                className,
                styles[theme],
            ])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
