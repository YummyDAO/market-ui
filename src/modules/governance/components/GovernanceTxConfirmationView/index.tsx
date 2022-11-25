import React from 'react';

import TxConfirmationView, {
  TxConfirmationViewProps,
} from '../../../../components/TxConfirmationView';
import { useGovernanceDataContext } from '../../../../libs/governance-provider';
import { ChainId } from '@aave/contract-helpers';

type GovernanceTxConfirmationViewProps = Omit<
  TxConfirmationViewProps,
  'txChainId' | 'allowedChainIds'
>;

function GovernanceTxConfirmationView({
  onMainTxConfirmed,
  ...props
}: GovernanceTxConfirmationViewProps) {
  const { governanceConfig } = useGovernanceDataContext();

  return (
    <TxConfirmationView
      {...props}
      txChainId={/*governanceConfig.chainId*/ 10001}
      allowedChainIds={[ChainId.mainnet, ChainId.kovan, 10001]}
    />
  );
}

export default GovernanceTxConfirmationView;
