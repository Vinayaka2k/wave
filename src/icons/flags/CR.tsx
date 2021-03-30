// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const CR: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="CR__Ebene_1"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.CR__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path
                d="M2 0h24c1.1 0 2 .9 2 2.1V18c0 1.1-.9 2.1-2 2.1H2c-1.1 0-2-.9-2-2.1V2.1C0 .9.9 0 2 0z"
                fill="#fff"
            />
            <defs>
                <filter id="CR__Adobe_OpacityMaskFilter" filterUnits="userSpaceOnUse" x={0} y={0} width={28} height={4}>
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={0} width={28} height={4} id="CR__mask-2_1_">
                <g filter="url(#CR__Adobe_OpacityMaskFilter)">
                    <path
                        id="CR__path-1_1_"
                        className="CR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="CR__Rectangle-2"
                mask="url(#CR__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#06358f"
                d="M0 0h28v4H0z"
            />
            <defs>
                <filter
                    id="CR__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={16}
                    width={28}
                    height={4}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={16} width={28} height={4} id="CR__mask-2_2_">
                <g filter="url(#CR__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="CR__path-1_2_"
                        className="CR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path mask="url(#CR__mask-2_2_)" fillRule="evenodd" clipRule="evenodd" fill="#06358f" d="M0 16h28v4H0z" />
            <defs>
                <filter
                    id="CR__Adobe_OpacityMaskFilter_2_"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={6.7}
                    width={28}
                    height={6.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={6.7} width={28} height={6.7} id="CR__mask-2_3_">
                <g filter="url(#CR__Adobe_OpacityMaskFilter_2_)">
                    <path
                        id="CR__path-1_3_"
                        className="CR__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="CR__Rectangle-2-Copy-4"
                mask="url(#CR__mask-2_3_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#e61f37"
                d="M0 6.7h28v6.7H0z"
            />
        </svg>
    );
};

CR.defaultProps = {};
export default CR;
