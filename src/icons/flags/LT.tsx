// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const LT: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <rect id="LT__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="LT__b" fill="#fff">
                    <use xlinkHref="#LT__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#LT__a" />
                <path fill="#118357" mask="url(#LT__b)" d="M0 6.667h28v6.667H0z" />
                <path fill="#D8343D" mask="url(#LT__b)" d="M0 13.333h28V20H0z" />
                <path fill="#FEC34B" mask="url(#LT__b)" d="M0 0h28v6.667H0z" />
            </g>
        </svg>
    );
};

LT.defaultProps = {};
export default LT;
