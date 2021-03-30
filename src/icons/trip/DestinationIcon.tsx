// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const DestinationIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <circle cx={12} cy={12} r={6} fill="#FF0A2B" fillRule="nonzero" />
        </svg>
    );
};

DestinationIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default DestinationIcon;
