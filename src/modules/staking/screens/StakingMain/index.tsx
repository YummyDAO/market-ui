import React from 'react';
import { useIntl } from 'react-intl';
import { gradient, useThemeContext } from '@aave/aave-ui-kit';

import Link from '../../../../components/basic/Link';
import AboutStakingModal from '../../components/AboutStakingModal';
import InfoWrapper from '../../../../components/wrappers/InfoWrapper';
import InfoPanel from '../../../../components/InfoPanel';
import TextFAQLink from '../../components/TextFAQLink';

import messages from './messages';
import staticStyles from './style';

import aaveIcon from '../../../../images/realp.svg';
import bptIcon from '../../../../images/bpt.svg';

export default function StakingMain() {
  const intl = useIntl();
  const { currentTheme } = useThemeContext();

  const buttons = [
    {
      link: '/staking/aave',
      icon: aaveIcon,
      title: 'REALP',
    },
    {
      link: '/staking/bpt',
      icon: bptIcon,
      title: 'USDW LP',
    },
  ];

  const gradientOnHover = gradient(
    217,
    `${currentTheme.primary.rgb}, 1`,
    25,
    `${currentTheme.secondary.rgb}, 1`,
    100
  );

  return (
    <div className="StakingMain">
      <div className="StakingMain__caption-inner">
        <AboutStakingModal />
        <p className="StakingMain__description">
          {intl.formatMessage(messages.description, {
            aave: <strong>REALP</strong>,
            bpt: <strong>REALP LP</strong>,
          })}
        </p>
      </div>

      <div className="StakingMain__buttons">
        {buttons.map((button, index) => (
          <Link className="StakingMain__button ButtonLink" to={`${button.link}`} key={index}>
            <div className="StakingMain__button-inner">
              <img src={button.icon} alt={button.title} />
              <p>
                {intl.formatMessage(messages.stake, { asset: <strong> {button.title}</strong> })}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <TextFAQLink />

      <InfoWrapper>
        <InfoPanel>
          <div className="StakingMain__info">
            <p>
              {intl.formatMessage(messages.info, {
                bpt: <strong>{intl.formatMessage(messages.bpt)}</strong>,
                balancerLiquidityPool: (
                  <Link
                    to=""
                    title={intl.formatMessage(messages.balancerLiquidityPool)}
                    color="secondary"
                    absolute={true}
                    inNewWindow={true}
                  />
                ),
              })}
            </p>
          </div>
        </InfoPanel>
      </InfoWrapper>

      <style jsx={true} global={true}>
        {staticStyles}
      </style>
      <style jsx={true} global={true}>{`
        @import 'src/_mixins/screen-size';

        .StakingMain {
          &__description {
            color: ${currentTheme.textDarkBlue.hex};
          }

          &__buttons {
            .StakingMain__button {
              color: ${currentTheme.darkBlue.hex};

              .StakingMain__button-inner {
                background: ${currentTheme.white.hex};
              }
              &:after {
                background: ${gradientOnHover};
              }
            }
            .StakingMain__buttonDisabled {
              .StakingMain__button-inner {
                background: ${currentTheme.mainBg.hex};
                @include respond-to(sm) {
                  background: ${currentTheme.disabledGray.hex} !important;
                }
              }
            }
          }
        }
      `}</style>
    </div>
  );
}
