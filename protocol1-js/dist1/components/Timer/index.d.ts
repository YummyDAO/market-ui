/// <reference types="react" />
import './style.scss';
interface TimerProps {
    dateInFuture: number;
    className?: string;
    onComplete?: () => void;
}
export default function Timer({ dateInFuture, className, onComplete }: TimerProps): JSX.Element;
export {};
