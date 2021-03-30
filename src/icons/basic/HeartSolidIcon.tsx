// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const HeartSolidIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M12.538 6.48c1.313-1.696 3.713-1.976 5.362-.625.153.125.296.262.428.41 1.61 1.796 1.555 4.579-.124 6.306L12 19l-6.215-6.42c-1.67-1.737-1.718-4.518-.108-6.315a3.74 3.74 0 015.392-.225c.143.136.277.284.398.44l.535.692.536-.691z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

HeartSolidIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default HeartSolidIcon;
