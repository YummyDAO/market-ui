import { ReactNode } from 'react';
import './style.scss';
export interface BasicModalProps {
    isVisible: boolean;
    onBackdropPress: () => void;
    children: ReactNode;
    withCloseButton?: boolean;
    className?: string;
    closeIcon?: string;
}
export default function BasicModal({ isVisible, onBackdropPress, children, withCloseButton, className, closeIcon, }: BasicModalProps): JSX.Element;
