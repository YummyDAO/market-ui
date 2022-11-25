/// <reference types="react" />
import './style.scss';
interface CustomTooltipProps {
    tooltipId: string;
    text: string;
}
export default function CustomTooltip({ tooltipId, text }: CustomTooltipProps): JSX.Element;
export {};
