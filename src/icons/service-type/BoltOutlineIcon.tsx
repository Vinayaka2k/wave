// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const BoltOutlineIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M15 1l-1 8h6L8 23l.448-3.586 2.363-2.781-.002.016L15.652 11h-3.918l.457-3.65L7.348 13h3.918l-.376 3H8.875L9 15H3L15 1z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

BoltOutlineIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default BoltOutlineIcon;
