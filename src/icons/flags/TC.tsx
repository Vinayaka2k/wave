// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const TC: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <rect id="TC__a" x={0} y={0} width={28} height={20} rx={2} />
                <path
                    d="M0 4.667V1.332A1.33 1.33 0 011.333 0h4c.737 0 1.334.588 1.334 1.332v3.335c0 3.333-3.334 4.666-3.334 4.666S0 8 0 4.667z"
                    id="TC__c"
                />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="TC__b" fill="#fff">
                    <use xlinkHref="#TC__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#TC__a" />
                <path fill="#07319C" mask="url(#TC__b)" d="M0 0h28v20H0z" />
                <g mask="url(#TC__b)">
                    <g transform="translate(17.333 5.333)">
                        <mask id="TC__d" fill="#fff">
                            <use xlinkHref="#TC__c" />
                        </mask>
                        <path
                            stroke="#FFF"
                            strokeWidth={0.667}
                            d="M3.333 8.97a6.195 6.195 0 001.444-.967c.976-.88 1.556-1.981 1.556-3.336V1.332c0-.557-.444-.999-1-.999h-4c-.555 0-1 .446-1 1v3.334c0 1.355.58 2.457 1.557 3.335a6.195 6.195 0 001.443.967z"
                        />
                        <ellipse fill="#BA5B1F" mask="url(#TC__d)" cx={4.667} cy={2.667} rx={1} ry={1.333} />
                        <ellipse
                            fill="#FF9F3E"
                            mask="url(#TC__d)"
                            transform="rotate(-20 1.75 2.707)"
                            cx={1.749}
                            cy={2.707}
                            rx={1}
                            ry={1.333}
                        />
                        <ellipse
                            fill="#FF937F"
                            mask="url(#TC__d)"
                            transform="rotate(25 2.282 2.73)"
                            cx={2.282}
                            cy={2.729}
                            rx={1}
                            ry={1.333}
                        />
                        <path fill="#01A827" mask="url(#TC__d)" d="M2.667 5.333L3.333 4 4 5.333v1.334H2.667z" />
                    </g>
                </g>
                <path
                    d="M4.333 4.153L-.9-.333H.667l.193.062L5.44 3h1.131l5.762-3.601v.934c0 .296-.17.627-.417.803l-4.25 3.036V5.18l4.3 3.685c.377.323.185.802-.3.802-.257 0-.588-.107-.804-.261L6.56 6.333H5.429L-.333 9.935v-1.44l4.666-3.333V4.153z"
                    stroke="#FFF"
                    strokeWidth={0.667}
                    fill="#DB1E36"
                    mask="url(#TC__b)"
                />
                <path
                    d="M0 3.333V6h4.667v3.34c0 .364.306.66.673.66h1.32a.67.67 0 00.673-.66V6h4.658a.677.677 0 00.676-.673v-1.32a.674.674 0 00-.676-.674H7.333V0H4.667v3.333H0z"
                    fill="#FFF"
                    mask="url(#TC__b)"
                />
                <path fill="#DB1E36" mask="url(#TC__b)" d="M0 4h5.333V0h1.334v4H12v1.333H6.667v4H5.333v-4H0z" />
            </g>
        </svg>
    );
};

TC.defaultProps = {};
export default TC;
