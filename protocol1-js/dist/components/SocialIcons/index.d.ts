/// <reference types="react" />
import './style.scss';
export declare enum SocialType {
    Twitter = "Twitter",
    Instagram = "Instagram",
    Telegram = "Telegram",
    Github = "Github",
    Discord = "Discord"
}
export interface SocialIcon {
    url: string;
    type: SocialType;
}
export interface SocialIconsProps {
    className?: string;
    linkClassName?: string;
    iconHeight: number;
    iconWidth: number;
    colored?: boolean;
    white?: boolean;
    withTitle?: boolean;
}
interface SocialIconsWrapperProps extends SocialIconsProps {
    icons: SocialIcon[];
}
export default function SocialIcons({ icons, className, linkClassName, iconHeight, iconWidth, colored, white, withTitle, }: SocialIconsWrapperProps): JSX.Element;
export {};
