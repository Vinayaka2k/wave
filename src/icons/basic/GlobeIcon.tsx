// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { Colors } from '../../essentials';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = IconProps;

const GlobeIcon: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 24 24">
            <path
                d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 00-7.404 11.036c.603.149 1.013 1.064 1.764 1.581.469.323.98.13 1.09.663.061.293-.308.403-.544.917l.01-.02a8 8 0 0012.98-7.472c-.404 1.075-1.159 1.902-1.432 2.104-.87.647-2.003-2.963-3.447-3.148-.993-.127 1.01 1.339.345 3.148-.81 2.202-1.456 5.385-3.362 4.592-.813-.338-.407-3.147-1.276-4.387-.974-1.39-3.076 2.667-3.847-1.014-.474-2.266 1.151-2.84 2.899-3.248.719-.168 3.269.493 3.699 0 .584-.67-.62-1.122-1.475-1.09-.52.02-.716-.154-1.276-.446-.764-.4-1.547.712-2.126.447-.578-.266-.326-.766.71-1.5.618-.437 2.498-.421 2.692-.871.44-1.02-1.512.271-1.276-.176.052-.362.17-.612.355-.75.617-.463 2.556.138 2.954 0 .058-.02.108-.042.151-.064A8.014 8.014 0 0012 4z"
                fill="currentColor"
                fillRule="nonzero"
            />
        </svg>
    );
};

GlobeIcon.defaultProps = {
    color: Colors.AUTHENTIC_BLUE_900
};
export default GlobeIcon;
