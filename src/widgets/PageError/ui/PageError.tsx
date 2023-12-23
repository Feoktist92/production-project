import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button } from 'shared/ui';
import { useTranslation } from 'react-i18next';
import { ThemeButton } from 'shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}
const PageError:FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(styles.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка :(')}</p>
            <Button
                theme={ThemeButton.CLEAR}
                onClick={reloadPage}
                className={classNames(styles.reload, {}, [className])}
            >
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};

export default PageError;
