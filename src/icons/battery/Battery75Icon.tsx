// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const Battery75Icon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <g fillRule="nonzero" fill="none">
                <path d="M8 6v13h8V6H8zM6 4h4V2h4v2h4v17H6V4z" fill="currentColor" />
                <path fill="#069D4F" d="M10 9.25h4v7.76h-4z" />
            </g>
        </svg>
    );
};

Battery75Icon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default Battery75Icon;
