// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const MC: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <path d="M2 0h24c1.1 0 2 .9 2 2v15.9c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z" fill="#fff" />
            <defs>
                <filter id="MC__a" filterUnits="userSpaceOnUse" x={0} y={0} width={28} height={10.7}>
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={0} width={28} height={10.7} id="MC__b">
                <g filter="url(#MC__a)">
                    <path
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#fff"
                    />
                </g>
            </mask>
            <path mask="url(#MC__b)" fillRule="evenodd" clipRule="evenodd" fill="#ea233b" d="M0 0h28v10.7H0z" />
        </svg>
    );
};

MC.defaultProps = {};
export default MC;
