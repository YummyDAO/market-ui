import { defineMessages } from 'react-intl';

export default defineMessages({
  caption: 'How would you like to stake',

  infoCaption: 'Staking {asset}',

  aaveDescription:
    'Staking REALP makes the protocol a bit safer in case of an emergency. For taking this risk you will receive REALP. The REALP tokens represent voting power in the protocol governance. In the case of a {upTo} of your staked assets can be slashed to cover the deficit.',

  bptDescription:
    'Staking your Real Staked USDW LP (USDW LP) makes the protocol a bit safer in case of an emergency. For taking this risk you will be rewarded with stkREALP, and trading fees. In the case of a {upTo} of your staked assets can be slashed to cover the deficit. You can get BPT by depositing a combination of USDW + ETHW in the {balancerLiquidityPool}',

  upTo: 'shortfall event, up to 30%',
  balancerLiquidityPool: 'Puffyswap liquidity pool',

  aaveStakingRewards: 'REALP Staking rewards',
  tradingFees: 'Trading Fees',
  token: '{asset} Token',
});
