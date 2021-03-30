// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const LiteCircleIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 28">
            <path
                d="M14 2c6.627 0 12 5.373 12 12s-5.373 12-12 12S2 20.627 2 14 7.373 2 14 2zm0 2C8.477 4 4 8.477 4 14s4.477 10 10 10 10-4.477 10-10S19.523 4 14 4zm.536 4c.792 0 1.551.315 2.111.874l4.479 4.479a2.985 2.985 0 010 4.222l-3.551 3.55a2.985 2.985 0 01-4.222 0l-4.479-4.478A2.985 2.985 0 018 14.537V8h6.536zm-2.43 2.985a1.12 1.12 0 100 2.24 1.12 1.12 0 000-2.24z"
                fill="#069D4F"
                fillRule="nonzero"
            />
        </svg>
    );
};

LiteCircleIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default LiteCircleIcon;
