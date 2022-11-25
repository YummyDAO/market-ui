/// <reference types="react" />
import './style.scss';
declare type LabeledSwitchProps = {
    value: boolean;
    leftOption: string;
    rightOption: string;
    onToggle: (value: boolean) => void;
    className?: string;
    width?: number;
    height?: number;
    fontSize?: number;
    disabled?: boolean;
};
export default function LabeledSwitch({ value, leftOption, rightOption, onToggle, className, width, height, fontSize, disabled, }: LabeledSwitchProps): JSX.Element;
export {};
