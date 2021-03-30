// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const GD: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="GD__e">
                    <stop stopColor="#E21C30" offset="0%" />
                    <stop stopColor="#CE1225" offset="100%" />
                </linearGradient>
                <rect id="GD__a" x={0} y={0} width={28} height={20} rx={2} />
                <path id="GD__c" d="M0 0h22.667v14.667H0z" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="GD__b" fill="#fff">
                    <use xlinkHref="#GD__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#GD__a" />
                <path fill="#E42235" mask="url(#GD__b)" d="M0 0h28v20H0z" />
                <g mask="url(#GD__b)">
                    <g transform="translate(2.667 2.667)">
                        <mask id="GD__d" fill="#fff">
                            <use xlinkHref="#GD__c" />
                        </mask>
                        <use fill="#079B77" xlinkHref="#GD__c" />
                        <path
                            d="M1.727 7.465c.377.604.919 1.003 1.424 1.105.278.057-.231-1.218-.01-1.356.19-.119 1.1.941 1.18.72.183-.509.075-1.229-.333-1.882-.585-.937-.608-.318-2.19-.99.165.96-.657 1.466-.071 2.403z"
                            fill="#FFD938"
                            mask="url(#GD__d)"
                        />
                        <path
                            d="M0 0h22.667L11.333 7.333 0 0zm0 14.667l11.333-7.334 11.334 7.334H0z"
                            fill="#FFD93B"
                            mask="url(#GD__d)"
                        />
                        <circle fill="url(#GD__e)" mask="url(#GD__d)" cx={11.333} cy={7.333} r={3.333} />
                        <path
                            fill="#FFD938"
                            mask="url(#GD__d)"
                            d="M11.333 8.362L9.766 9.49l.59-1.84L8.796 6.51l1.932-.008.604-1.834.605 1.834 1.931.008-1.558 1.142.59 1.84z"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

GD.defaultProps = {};
export default GD;
