// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const VU: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <filter x="-5.4%" y="-18.8%" width="110.7%" height="137.5%" filterUnits="objectBoundingBox" id="VU__c">
                    <feMorphology radius={0.5} operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                    <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowOffsetOuter1" />
                </filter>
                <filter x="-5.4%" y="-18.8%" width="110.7%" height="137.5%" filterUnits="objectBoundingBox" id="VU__e">
                    <feMorphology radius={0.5} operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1" />
                    <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                    <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0" in="shadowOffsetOuter1" />
                </filter>
                <path id="VU__d" d="M0 12h28v8H0z" />
                <path id="VU__f" d="M0 0h28v8H0z" />
                <rect id="VU__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="VU__b" fill="#fff">
                    <use xlinkHref="#VU__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#VU__a" />
                <g mask="url(#VU__b)">
                    <use fill="#000" filter="url(#VU__c)" xlinkHref="#VU__d" />
                    <use fill="#009543" xlinkHref="#VU__d" />
                </g>
                <g mask="url(#VU__b)">
                    <use fill="#000" filter="url(#VU__e)" xlinkHref="#VU__f" />
                    <use fill="#D21034" xlinkHref="#VU__f" />
                </g>
                <path fill="#262626" mask="url(#VU__b)" d="M0 8h28v4H0z" />
                <path fill="#262626" mask="url(#VU__b)" d="M0 0l13.333 10L0 20z" />
                <path
                    d="M-.667 2.637v14.726L9.528 10-.667 2.637z"
                    stroke="#FDCE12"
                    strokeWidth={1.333}
                    mask="url(#VU__b)"
                />
                <path fill="#FDCE12" mask="url(#VU__b)" d="M9.333 9.333H28v1.333H9.333z" />
            </g>
        </svg>
    );
};

VU.defaultProps = {};
export default VU;
