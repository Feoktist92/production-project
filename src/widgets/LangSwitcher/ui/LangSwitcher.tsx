import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui';
import { ThemeButton } from 'shared/ui/Button/Button';
import { classNames } from 'shared/lib/classNames/classNames';

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}
export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
    const { t, i18n } = useTranslation();

    const changeLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ThemeButton.BACKGROUND_INVERTED}
            onClick={changeLanguage}
        >
            {t(short ? 'Короткий язык' : 'Язык')}
        </Button>
    );
};
