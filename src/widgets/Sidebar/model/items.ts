import React from 'react';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about.svg';
import MainIcon from 'shared/assets/icons/main.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';
import ArticleIcon from 'shared/assets/icons/article.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutesPath.main,
        Icon: MainIcon,
        text: 'Главная',
    },
    {
        path: RoutesPath.about,
        Icon: AboutIcon,
        text: 'О сайте',
    },
    {
        path: RoutesPath.profile,
        Icon: ProfileIcon,
        text: 'Профиль',
        authOnly: true,
    },
    {
        path: RoutesPath.articles,
        Icon: ArticleIcon,
        text: 'Статьи',
        authOnly: true,
    },
];
