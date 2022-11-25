import { ReactElement } from 'react';
import './style.scss';
export interface ButtonProps {
    onClick?: (event: any) => void;
    title: string;
    type?: 'button' | 'submit';
    size?: 'big' | 'medium' | 'normal' | 'small';
    transparent?: boolean;
    mobileBig?: boolean;
    iconComponent?: ReactElement | ReactElement[];
    disabled?: boolean;
    className?: string;
}
export default function Button({ onClick, title, type, size, transparent, mobileBig, iconComponent, disabled, className, }: ButtonProps): JSX.Element;
