// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const FJ: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FJ__c">
                    <stop stopColor="#042C90" offset="0%" />
                    <stop stopColor="#00247E" offset="100%" />
                </linearGradient>
                <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="FJ__f">
                    <stop stopColor="#FFF" offset="0%" />
                    <stop stopColor="#F0F0F0" offset="100%" />
                </linearGradient>
                <rect id="FJ__a" x={0} y={0} width={28} height={20} rx={2} />
                <path d="M0 4.667V0h6.667v4.667c0 3.333-3.334 4.666-3.334 4.666S0 8 0 4.667z" id="FJ__d" />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="FJ__b" fill="#fff">
                    <use xlinkHref="#FJ__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#FJ__a" />
                <path fill="#79CFF6" mask="url(#FJ__b)" d="M0 0h28v20H0z" />
                <path fill="url(#FJ__c)" mask="url(#FJ__b)" d="M0 0h12v9.333H0z" />
                <g mask="url(#FJ__b)">
                    <g transform="translate(17.333 5.333)">
                        <mask id="FJ__e" fill="#fff">
                            <use xlinkHref="#FJ__d" />
                        </mask>
                        <use fill="#FFF" xlinkHref="#FJ__d" />
                        <path
                            d="M1.333 3.333a.667.667 0 110-1.333.667.667 0 010 1.333zm4 0a.667.667 0 110-1.333.667.667 0 010 1.333z"
                            fill="#2A915C"
                            mask="url(#FJ__e)"
                        />
                        <path
                            fill="#EB1D43"
                            mask="url(#FJ__e)"
                            d="M0 0h6.667v1.333H4V4h2.667v1.333H4v4H2.667v-4H0V4h2.667V1.333H0z"
                        />
                    </g>
                </g>
                <path
                    d="M4.333 4.153L-.9-.333H.667l.193.062L5.44 3h1.131l5.762-3.601v.934c0 .296-.17.627-.417.803l-4.25 3.036V5.18l4.3 3.685c.377.323.185.802-.3.802-.257 0-.588-.107-.804-.261L6.56 6.333H5.429L-.333 9.935v-1.44l4.666-3.333V4.153z"
                    stroke="#FFF"
                    strokeWidth={0.667}
                    fill="#DB1E36"
                    mask="url(#FJ__b)"
                />
                <path
                    d="M0 3.333V6h4.667v3.34c0 .364.306.66.673.66h1.32a.67.67 0 00.673-.66V6h4.658a.677.677 0 00.676-.673v-1.32a.674.674 0 00-.676-.674H7.333V0H4.667v3.333H0z"
                    fill="url(#FJ__f)"
                    mask="url(#FJ__b)"
                />
                <path fill="#DB1E36" mask="url(#FJ__b)" d="M0 4h5.333V0h1.334v4H12v1.333H6.667v4H5.333v-4H0z" />
            </g>
        </svg>
    );
};

FJ.defaultProps = {};
export default FJ;
