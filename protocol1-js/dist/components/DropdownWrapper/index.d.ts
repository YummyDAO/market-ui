import { ReactElement, ReactNode } from 'react';
import './style.scss';
interface DropdownWrapperProps {
    visible: boolean;
    setVisible: (value: boolean) => void;
    className?: string;
    contentClassName?: string;
    buttonComponent: ReactElement;
    children: ReactNode;
    verticalPosition?: 'bottom' | 'top';
    horizontalPosition?: 'left' | 'right' | 'center';
    contentId?: string;
}
export default function DropdownWrapper({ visible, setVisible, className, contentClassName, buttonComponent, children, verticalPosition, horizontalPosition, contentId, }: DropdownWrapperProps): JSX.Element;
export {};
