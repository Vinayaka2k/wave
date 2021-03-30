// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const UG: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <rect id="UG__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="UG__b" fill="#fff">
                    <use xlinkHref="#UG__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#UG__a" />
                <path fill="#262626" mask="url(#UG__b)" d="M0 0h28v2.667H0zM0 10.667h28v2.667H0z" />
                <path fill="#ED1623" mask="url(#UG__b)" d="M0 6.667h28v4H0z" />
                <path fill="#FEE044" mask="url(#UG__b)" d="M0 2.667h28v4H0z" />
                <path fill="#ED1623" mask="url(#UG__b)" d="M0 17.333h28V20H0z" />
                <path fill="#FEE044" mask="url(#UG__b)" d="M0 13.333h28v4H0z" />
                <circle fill="#FFF" mask="url(#UG__b)" cx={14} cy={10} r={4.667} />
                <path
                    d="M12.907 7.574a.337.337 0 010-.481l.186-.186c.133-.133.337-.361.464-.496l.15-.119c.162.023.409-.045.59-.016l.158.123c.117.148.145.4.064.564l-.371.741c-.082.164-.148.45-.148.63 0 .183.133.399.296.48l.741.371c.164.082.401.253.529.38l.868.87a.488.488 0 01.085.528l-.371.741c-.082.164-.252.192-.389.055l-.185-.185a.337.337 0 00-.481 0l-.186.185a.947.947 0 00-.24.574c0 .184.104.438.24.574l.186.186c.133.133.083.24-.09.24h-1.34c-.182 0-.226-.104-.089-.24l.185-.186a.947.947 0 00.241-.574.337.337 0 00-.333-.333.922.922 0 00-.574.24l-.186.186a.337.337 0 01-.481 0l-.185-.185a.337.337 0 010-.482l.185-.185a.92.92 0 01.577-.24h.66c.186 0 .23-.108.108-.23l-1.542-1.541a.327.327 0 01.003-.462l.87-.869a.331.331 0 00-.01-.473l-.185-.185z"
                    fill="#262626"
                    mask="url(#UG__b)"
                />
            </g>
        </svg>
    );
};

UG.defaultProps = {};
export default UG;
