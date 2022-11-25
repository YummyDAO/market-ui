/// <reference types="react" />
import './style.scss';
interface MultipleIconsProps {
    width: number;
    height: number;
    marketSymbol: string;
    symbols: string[];
}
export default function MultipleIcons({ width, height, marketSymbol, symbols, }: MultipleIconsProps): JSX.Element;
export {};
