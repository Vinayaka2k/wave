// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const VN: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <rect id="VN__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="VN__b" fill="#fff">
                    <use xlinkHref="#VN__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#VN__a" />
                <path fill="#EA403F" mask="url(#VN__b)" d="M0 0h28v20H0z" />
                <path
                    fill="#FFFE4E"
                    mask="url(#VN__b)"
                    d="M14 12.34l-3.527 2.514 1.302-4.13-3.481-2.578 4.33-.04L14 4l1.375 4.107 4.331.039-3.48 2.577 1.3 4.131z"
                />
            </g>
        </svg>
    );
};

VN.defaultProps = {};
export default VN;
