// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const SN: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <rect id="SN__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="SN__b" fill="#fff">
                    <use xlinkHref="#SN__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#SN__a" />
                <path fill="#F13642" mask="url(#SN__b)" d="M13.333 0H28v20H13.333z" />
                <path fill="#17A052" mask="url(#SN__b)" d="M0 0h9.333v20H0z" />
                <path fill="#FFF166" mask="url(#SN__b)" d="M9.333 0h9.333v20H9.333z" />
                <path
                    fill="#17A052"
                    mask="url(#SN__b)"
                    d="M14 11.367l-1.96 1.33.66-2.275-1.87-1.452 2.367-.076L14 6.667l.803 2.227 2.367.076-1.87 1.452.66 2.275z"
                />
            </g>
        </svg>
    );
};

SN.defaultProps = {};
export default SN;
