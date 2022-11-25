export interface Asset {
    name: string;
    symbol: string;
    formattedSymbol?: string;
    color?: string;
    icon?: string;
    aIcon?: string;
    symbolFormatted?: string;
    symbolsArray?: string[];
    formattedName?: string;
    shortSymbol?: string;
}
export declare const assetsList: Asset[];
export declare const getAssetInfoFactory: (_assetsList: Asset[]) => (_assetSymbol: string) => Asset;
export declare const getAssetInfo: (_assetSymbol: string) => Asset;
