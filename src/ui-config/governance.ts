import { ChainId } from '@aave/contract-helpers';

export interface GovernanceConfig {
  chainId: ChainId;
  votingAssetName: string;
  averageNetworkBlockTime: number;
  queryGovernanceDataUrl: string;
  wsGovernanceDataUrl: string;
  aaveTokenAddress: string;
  aAaveTokenAddress: string;
  stkAaveTokenAddress: string;
  governanceForumLink: string;
  governanceSnapshotLink: string;
  governanceFAQLink: string;
  addresses: {
    AAVE_GOVERNANCE_V2: string;
    AAVE_GOVERNANCE_V2_EXECUTOR_SHORT: string;
    AAVE_GOVERNANCE_V2_EXECUTOR_LONG: string;
    AAVE_GOVERNANCE_V2_HELPER: string;
  };
}

/*export const governanceConfig: GovernanceConfig | undefined = {
  chainId: ChainId.mainnet,
  votingAssetName: 'AAVE + stkAAVE',
  averageNetworkBlockTime: 13.5,
  queryGovernanceDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/governance-v2',
  wsGovernanceDataUrl: 'wss://api.thegraph.com/subgraphs/name/aave/governance-v2',
  aaveTokenAddress: '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
  aAaveTokenAddress: '0xDa5E8e1C3596D3Cc11a4dd5aD66b8f03B5410F8C',
  stkAaveTokenAddress: '0x4da27a545c0c5b758a6ba100e3a049001de870f5',
  governanceForumLink: 'https://governance.aave.com',
  governanceFAQLink: 'https://docs.aave.com/faq/governance',
  governanceSnapshotLink: 'https://snapshot.org/#/aave.eth',
  addresses: {
    AAVE_GOVERNANCE_V2: '0xEC568fffba86c094cf06b22134B23074DFE2252c',
    AAVE_GOVERNANCE_V2_EXECUTOR_SHORT: '0x61910EcD7e8e942136CE7Fe7943f956cea1CC2f7',
    AAVE_GOVERNANCE_V2_EXECUTOR_LONG: '0xEE56e2B3D491590B5b31738cC34d5232F378a8D5',
    AAVE_GOVERNANCE_V2_HELPER: '0x16ff7583ea21055bf5f929ec4b896d997ff35847',
  },
};*/

export const governanceConfig: GovernanceConfig | undefined = {
  chainId: 10001,
  votingAssetName: 'stkREALP + stkREALP',
  averageNetworkBlockTime: 13.5,
  queryGovernanceDataUrl: 'https://api.thegraph.com/subgraphs/name/aave/governance-v2',
  wsGovernanceDataUrl: 'wss://api.thegraph.com/subgraphs/name/aave/governance-v2',
  aaveTokenAddress: '0x46264711b3d06a789183B2A21eF87E98e4Ed3dE9',
  aAaveTokenAddress: '0x39618C912e22fAD4A9bd47037Cd1f88b69b029cc', //to change this
  stkAaveTokenAddress: '0x46264711b3d06a789183B2A21eF87E98e4Ed3dE9',
  governanceForumLink: 'https://discord.gg/PKryypuvmy',
  governanceFAQLink: 'https://docs.aave.com/faq/governance',
  governanceSnapshotLink: '',
  addresses: {
    AAVE_GOVERNANCE_V2: '0xf6af6Bb2E020d2C3A5fF1C7D2b25eDFC00860340',
    AAVE_GOVERNANCE_V2_EXECUTOR_SHORT: '0x7e069Fbfc569391651BCEc3b579ec2b1009C5A20',
    AAVE_GOVERNANCE_V2_EXECUTOR_LONG: '0x3854776e94A242D668e18Eb68adDC4e68475a2c0',
    AAVE_GOVERNANCE_V2_HELPER: '0xA9b3472B459035c84d57a855b96ea82dbe0DB756',
  },
};
