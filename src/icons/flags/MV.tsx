// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const MV: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <rect id="MV__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="MV__b" fill="#fff">
                    <use xlinkHref="#MV__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#MV__a" />
                <path fill="#F32249" mask="url(#MV__b)" d="M0 0h28v20H0z" />
                <rect fill="#15A04F" mask="url(#MV__b)" x={4} y={4} width={20} height={12} rx={0.667} />
                <path d="M16.333 5.44a4.668 4.668 0 000 9.12 4.667 4.667 0 110-9.119z" fill="#FFF" mask="url(#MV__b)" />
            </g>
        </svg>
    );
};

MV.defaultProps = {};
export default MV;
