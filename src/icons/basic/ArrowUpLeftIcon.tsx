// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const ArrowUpLeftIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M17.9 8H9.414l8.95 8.95-1.414 1.414L8 9.414v8.484l-2-2V6h9.9z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

ArrowUpLeftIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default ArrowUpLeftIcon;
