// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const HN: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="HN__Ebene_1"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.HN__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path d="M2 0h24c1.1 0 2 .9 2 2v15.5c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z" fill="#f5f5f5" />
            <defs>
                <filter
                    id="HN__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={0}
                    width={28}
                    height={6.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={0} width={28} height={6.7} id="HN__mask-2_1_">
                <g filter="url(#HN__Adobe_OpacityMaskFilter)">
                    <path
                        id="HN__path-1_1_"
                        className="HN__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="HN__Rectangle-2"
                mask="url(#HN__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#0884e6"
                d="M0 0h28v6.7H0z"
            />
            <defs>
                <filter
                    id="HN__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={0}
                    y={13.3}
                    width={28}
                    height={6.7}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={0} y={13.3} width={28} height={6.7} id="HN__mask-2_2_">
                <g filter="url(#HN__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="HN__path-1_2_"
                        className="HN__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                mask="url(#HN__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#0884e6"
                d="M0 13.3h28V20H0z"
            />
            <defs>
                <filter
                    id="HN__Adobe_OpacityMaskFilter_2_"
                    filterUnits="userSpaceOnUse"
                    x={13.1}
                    y={9.1}
                    width={1.9}
                    height={1.9}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={13.1} y={9.1} width={1.9} height={1.9} id="HN__mask-2_3_">
                <g filter="url(#HN__Adobe_OpacityMaskFilter_2_)">
                    <path
                        id="HN__path-1_3_"
                        className="HN__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="HN__Star-20"
                mask="url(#HN__mask-2_3_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#0e88e9"
                d="M14 10.7l-.9.2.2-.9-.2-.9.9.2.9-.2-.2.9.2.9z"
            />
            <defs>
                <filter
                    id="HN__Adobe_OpacityMaskFilter_3_"
                    filterUnits="userSpaceOnUse"
                    x={18.4}
                    y={7.7}
                    width={1.9}
                    height={1.9}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={18.4} y={7.7} width={1.9} height={1.9} id="HN__mask-2_4_">
                <g filter="url(#HN__Adobe_OpacityMaskFilter_3_)">
                    <path
                        id="HN__path-1_4_"
                        className="HN__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="HN__Star-20-Copy"
                mask="url(#HN__mask-2_4_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#0e88e9"
                d="M19.3 9.3l-.9.3.3-.9-.3-1 .9.3 1-.3-.3 1 .3.9z"
            />
            <defs>
                <filter
                    id="HN__Adobe_OpacityMaskFilter_4_"
                    filterUnits="userSpaceOnUse"
                    x={18.4}
                    y={10.4}
                    width={1.9}
                    height={1.9}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={18.4} y={10.4} width={1.9} height={1.9} id="HN__mask-2_5_">
                <g filter="url(#HN__Adobe_OpacityMaskFilter_4_)">
                    <path
                        id="HN__path-1_5_"
                        className="HN__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="HN__Star-20-Copy-2"
                mask="url(#HN__mask-2_5_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#0e88e9"
                d="M19.3 12l-.9.3.3-1-.3-.9.9.3 1-.3-.3.9.3 1z"
            />
            <defs>
                <filter
                    id="HN__Adobe_OpacityMaskFilter_5_"
                    filterUnits="userSpaceOnUse"
                    x={7.7}
                    y={10.4}
                    width={1.9}
                    height={1.9}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={7.7} y={10.4} width={1.9} height={1.9} id="HN__mask-2_6_">
                <g filter="url(#HN__Adobe_OpacityMaskFilter_5_)">
                    <path
                        id="HN__path-1_6_"
                        className="HN__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="HN__Star-20-Copy-3"
                mask="url(#HN__mask-2_6_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#0e88e9"
                d="M8.7 12l-1 .3.3-1-.3-.9 1 .3.9-.3-.3.9.3 1z"
            />
            <defs>
                <filter
                    id="HN__Adobe_OpacityMaskFilter_6_"
                    filterUnits="userSpaceOnUse"
                    x={7.7}
                    y={7.7}
                    width={1.9}
                    height={1.9}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={7.7} y={7.7} width={1.9} height={1.9} id="HN__mask-2_7_">
                <g filter="url(#HN__Adobe_OpacityMaskFilter_6_)">
                    <path
                        id="HN__path-1_7_"
                        className="HN__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="HN__Star-20-Copy-4"
                mask="url(#HN__mask-2_7_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#0e88e9"
                d="M8.7 9.3l-1 .3.3-.9-.3-1 1 .3.9-.3-.3 1 .3.9z"
            />
        </svg>
    );
};

HN.defaultProps = {};
export default HN;
