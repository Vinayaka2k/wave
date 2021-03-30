// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const CZ: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="CZ__Ebene_1"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.CZ__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path
                d="M2 0h24c1.1 0 2 .9 2 2.1V18c0 1.1-.9 2.1-2 2.1H2c-1.1 0-2-.9-2-2.1V2.1C0 .9.9 0 2 0z"
                fill="#fff"
            />
            <defs>
                <filter
                    id="CZ__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={10}
                    width={28}
                    height={10}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={10} width={28} height={10} id="CZ__mask-2_1_">
                <g filter="url(#CZ__Adobe_OpacityMaskFilter)">
                    <path
                        id="CZ__path-1_1_"
                        className="CZ__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="CZ__Rectangle-2"
                mask="url(#CZ__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#e8252a"
                d="M0 10h28v10H0z"
            />
            <defs>
                <filter
                    id="CZ__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={13}
                    height={20}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={0} width={13} height={20} id="CZ__mask-2_2_">
                <g filter="url(#CZ__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="CZ__path-1_2_"
                        className="CZ__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="CZ__Rectangle-83"
                mask="url(#CZ__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#17579e"
                d="M0 0l13 10L0 20z"
            />
        </svg>
    );
};

CZ.defaultProps = {};
export default CZ;
