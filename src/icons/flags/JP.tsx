// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const JP: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <path d="M2 0h24c1.1 0 2 .9 2 2v15.9c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z" fill="#fff" />
            <defs>
                <filter id="JP__a" filterUnits="userSpaceOnUse" x={8} y={4} width={12} height={12}>
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={8} y={4} width={12} height={12} id="JP__b">
                <g filter="url(#JP__a)">
                    <path
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#fff"
                    />
                </g>
            </mask>
            <linearGradient
                id="JP__c"
                gradientUnits="userSpaceOnUse"
                x1={-258.917}
                y1={396.64}
                x2={-258.917}
                y2={395.64}
                gradientTransform="matrix(12 0 0 -12 3121 4763.677)"
            >
                <stop offset={0} stopColor="#d81441" />
                <stop offset={1} stopColor="#bb0831" />
            </linearGradient>
            <circle cx={14} cy={10} r={6} mask="url(#JP__b)" fillRule="evenodd" clipRule="evenodd" fill="url(#JP__c)" />
        </svg>
    );
};

JP.defaultProps = {};
export default JP;
