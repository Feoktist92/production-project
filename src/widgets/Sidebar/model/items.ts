import React from 'react';
import { RoutesPath } from 'shared/config/routeConfig/routeConfig';
import MainIcon from 'shared/assets/icons/home.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    text: string;
    path: string;
    Icon?: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const sidebarItemsList: SidebarItemType[] = [
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
    },
];
