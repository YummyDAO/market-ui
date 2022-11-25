import { ChainId } from '@aave/contract-helpers';
import { Stake } from '@aave/protocol-js';

export interface StakeConfig {
  chainId: ChainId;
  stakeDataProvider: string;
  tokens: {
    [token: string]: {
      TOKEN_STAKING: string;
      STAKING_REWARD_TOKEN: string;
      STAKING_HELPER?: string;
    };
  };
}

export const stakeConfig: StakeConfig | undefined = {
  chainId: 10001,
  stakeDataProvider: '0x8faB4Bb7dc200a9BfF537b92Ab127224c46e2335',
  tokens: {
    [Stake.aave]: {
      TOKEN_STAKING: '0x46264711b3d06a789183B2A21eF87E98e4Ed3dE9',
      STAKING_REWARD_TOKEN: '0x39618C912e22fAD4A9bd47037Cd1f88b69b029cc',
      //STAKING_HELPER: '0xfECF1E6cE62B3B9aCD1dC10c514f7B6D259e5244',
    },
    [Stake.bpt]: {
      TOKEN_STAKING: '0x5F1F81bB7B12b0482202cF48f1AE41D21049f455',
      STAKING_REWARD_TOKEN: '0x46264711b3d06a789183B2A21eF87E98e4Ed3dE9',
    },
  },
};

// kovan config
// export const stakeConfig: StakeConfig | undefined = {
//   chainId: ChainId.kovan,
//   stakeDataProvider: '0x5671387d56eAB334A2D65d6D0BB4D907898C7abA',
//   tokens: {
//     [Stake.aave]: {
//       TOKEN_STAKING: '0xf2fbf9A6710AfDa1c4AaB2E922DE9D69E0C97fd2',
//       STAKING_REWARD_TOKEN: '0xb597cd8d3217ea6477232f9217fa70837ff667af',
//       STAKING_HELPER: '0xf267aCc8BF1D8b41c89b6dc1a0aD8439dfbc890c',
//     },
//     [Stake.bpt]: {
//       TOKEN_STAKING: '0x31ce45Ab6E26C72c47C52c27498D460099545ef2',
//       STAKING_REWARD_TOKEN: '0xb597cd8d3217ea6477232f9217fa70837ff667af',
//     },
//   },
// };
