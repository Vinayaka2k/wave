// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const PW: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <rect id="PW__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="PW__b" fill="#fff">
                    <use xlinkHref="#PW__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#PW__a" />
                <path fill="#65C6EE" mask="url(#PW__b)" d="M0 0h28v20H0z" />
                <circle fill="#FFE044" mask="url(#PW__b)" cx={12.667} cy={10} r={6} />
            </g>
        </svg>
    );
};

PW.defaultProps = {};
export default PW;
