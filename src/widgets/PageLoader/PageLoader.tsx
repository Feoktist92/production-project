import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames';

import { useTranslation } from 'react-i18next';
import { Loader } from 'shared/ui';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.PageLoader, {}, [className])}>
            <Loader />
        </div>
    );
};
