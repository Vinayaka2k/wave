// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const CY: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg
            {...props}
            width={sizePx}
            height={sizePx}
            id="CY__Ebene_1"
            x={0}
            y={0}
            viewBox="0 0 28 20"
            xmlSpace="preserve"
        >
            <style>{'.CY__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}'}</style>
            <path
                d="M2 0h24c1.1 0 2 .9 2 2.1V18c0 1.1-.9 2.1-2 2.1H2c-1.1 0-2-.9-2-2.1V2.1C0 .9.9 0 2 0z"
                fill="#fff"
            />
            <defs>
                <filter
                    id="CY__Adobe_OpacityMaskFilter"
                    filterUnits="userSpaceOnUse"
                    x={7.3}
                    y={2.9}
                    width={13.7}
                    height={8.9}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={7.3} y={2.9} width={13.7} height={8.9} id="CY__mask-2_1_">
                <g filter="url(#CY__Adobe_OpacityMaskFilter)">
                    <path
                        id="CY__path-1_1_"
                        className="CY__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                id="CY__Line"
                d="M20.7 3c.3-.2.4-.1.2.2l-.6.9c-.2.3-.6.7-.9.9l-.9.6c-.3.2-.8.6-1 .8l.3-.3c-.3.3-.3.7 0 .9l.4.4c.3.3.3.7 0 .9l-.4.4c-.3.3-.7.3-1.1.2l-.1.1c-.3-.2-.7 0-.9.3l-.1.1c-.2.3-.6.7-.9.8l-.7.3c-.3.1-.9.2-1.3.2s-.8.3-1 .6l-.1.1c-.2.3-.6.5-.9.3L9.3 11c-.3-.2-.8-.5-1.1-.8l-.4-.4c-.3-.3-.5-.8-.5-1.1 0-.4.3-.7.7-.7h-.7c.4 0 .9-.2 1.1-.5l.4-.4c.3-.2.8-.4 1.2-.4.4 0 .8-.3.9-.6l.2-.7c.1-.3.5-.6.9-.5l2 .4c.4.1.9.1 1.3 0l1.4-.3c.4-.1.9-.3 1.2-.5l.1-.1c.3-.2.9-.4 1.2-.6l.1-.1c.3-.2.9-.4 1.2-.6l.2-.1z"
                mask="url(#CY__mask-2_1_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#e7832c"
            />
            <defs>
                <filter
                    id="CY__Adobe_OpacityMaskFilter_1_"
                    filterUnits="userSpaceOnUse"
                    x={13}
                    y={14.3}
                    width={2}
                    height={2}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={13} y={14.3} width={2} height={2} id="CY__mask-2_2_">
                <g filter="url(#CY__Adobe_OpacityMaskFilter_1_)">
                    <path
                        id="CY__path-1_2_"
                        className="CY__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <circle
                id="CY__Oval-81"
                cx={14}
                cy={15.3}
                r={1}
                mask="url(#CY__mask-2_2_)"
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#445128"
            />
            <defs>
                <filter
                    id="CY__Adobe_OpacityMaskFilter_2_"
                    filterUnits="userSpaceOnUse"
                    x={15.3}
                    y={12}
                    width={4}
                    height={3.3}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={15.3} y={12} width={4} height={3.3} id="CY__mask-2_3_">
                <g filter="url(#CY__Adobe_OpacityMaskFilter_2_)">
                    <path
                        id="CY__path-1_3_"
                        className="CY__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                d="M16 14.7s2-.7 2.7-2"
                opacity={0.75}
                mask="url(#CY__mask-2_3_)"
                fill="none"
                stroke="#445128"
                strokeWidth={1.333}
                strokeLinecap="round"
                enableBackground="new"
            />
            <defs>
                <filter
                    id="CY__Adobe_OpacityMaskFilter_3_"
                    filterUnits="userSpaceOnUse"
                    x={8.7}
                    y={12}
                    width={4}
                    height={3.3}
                >
                    <feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
                </filter>
            </defs>
            <mask maskUnits="userSpaceOnUse" x={8.7} y={12} width={4} height={3.3} id="CY__mask-2_4_">
                <g filter="url(#CY__Adobe_OpacityMaskFilter_3_)">
                    <path
                        id="CY__path-1_4_"
                        className="CY__st2"
                        d="M2 0h24c1.1 0 2 .9 2 2v16c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0z"
                    />
                </g>
            </mask>
            <path
                d="M12 14.7s-2-.7-2.7-2"
                opacity={0.75}
                mask="url(#CY__mask-2_4_)"
                fill="none"
                stroke="#445128"
                strokeWidth={1.333}
                strokeLinecap="round"
                enableBackground="new"
            />
        </svg>
    );
};

CY.defaultProps = {};
export default CY;
