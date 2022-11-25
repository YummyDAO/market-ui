import { ReactNode } from 'react';
import './style.scss';
interface ScrollBarProps {
    children: ReactNode;
    className?: string;
    onUpdate?: (value: any) => void;
}
export default function ScrollBar({ children, className, onUpdate }: ScrollBarProps): JSX.Element;
export {};
