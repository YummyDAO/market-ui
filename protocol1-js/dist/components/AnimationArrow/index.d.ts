/// <reference types="react" />
import './style.scss';
interface AnimationArrowProps {
    className?: string;
    active: boolean;
    width: number;
    height: number;
    marginLeft?: number;
    arrowTopPosition: number;
    arrowWidth: number;
    arrowHeight: number;
    color: string;
}
export default function AnimationArrow({ className, active, width, height, marginLeft, arrowTopPosition, arrowWidth, arrowHeight, color, }: AnimationArrowProps): JSX.Element;
export {};
