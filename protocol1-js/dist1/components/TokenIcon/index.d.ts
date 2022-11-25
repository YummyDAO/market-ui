import { CSSProperties } from 'react';
import { Asset } from '../../helpers/assets-list';
import './style.scss';
export interface TokenIconProps {
    tokenSymbol: string;
    tokenFullName?: string;
    className?: string;
    height: number;
    width: number;
    color?: string;
    withTokenSymbol?: boolean;
    onWhiteBackground?: boolean;
    getAssetInfo?: (symbol: string) => Asset;
    style?: CSSProperties;
    tooltipId?: string;
    isAtokenIcon?: boolean;
}
export default function TokenIcon({ tokenSymbol, tokenFullName, className, height, width, color, withTokenSymbol, onWhiteBackground, getAssetInfo, style, tooltipId, isAtokenIcon, }: TokenIconProps): JSX.Element;
