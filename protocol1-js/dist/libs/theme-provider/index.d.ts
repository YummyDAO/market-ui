import { ReactNode } from 'react';
import { Themes } from './types';
export declare const gradient: (angle: number, from: string, percentFrom: number, to: string, percentTo: number) => string;
export declare const rgba: (color: string) => string;
export declare enum ThemeNames {
    default = "default",
    dark = "dark"
}
interface ThemeContextProps {
    currentTheme: Themes[ThemeNames];
    currentThemeName: string;
    changeTheme: (name: string) => void;
    isCurrentThemeDark: boolean;
    xl: boolean;
    lg: boolean;
    md: boolean;
    sm: boolean;
    xs: boolean;
}
interface ThemeProviderProps {
    children: ReactNode;
}
export declare function ThemeProvider({ children }: ThemeProviderProps): JSX.Element;
export declare const useThemeContext: () => ThemeContextProps;
export {};
