// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const Fuel75Icon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <g fillRule="nonzero" fill="none">
                <path
                    d="M1.9 2l4.688 2.36v2.133h2.086v7H6.673v3.986a1 1 0 00.884.993l.117.007 2.499-.001V2.493h12v18h-12v-.015h-2.5a3 3 0 01-2.994-2.823l-.005-.176-.001-3.986h-2v-7h1.915v-.9L1 3.786 1.9 2zm18.274 2.493h-8v14h8v-14zm-13.5 4h-2v3h2v-3z"
                    fill="currentColor"
                />
                <path fill="#069D4F" d="M14 9.25h4v7.76h-4z" />
            </g>
        </svg>
    );
};

Fuel75Icon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default Fuel75Icon;
