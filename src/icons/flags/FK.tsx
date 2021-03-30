// DO NOT EDIT. This file was generated by running `npm run generate`.;
import * as React from 'react';
import { get } from '../../utils/themeGet';
import { IconProps } from '../IconProps';
type Props = Omit<IconProps, 'color'>;

const FK: React.FC<Props> = ({ size = 'medium', ...props }: IconProps) => {
    const sizePx = Number.isFinite(size as number)
        ? size
        : get(`iconSizes.${size}`)(props) || get('iconSizes.medium')(props);
    return (
        <svg {...props} width={sizePx} height={sizePx} viewBox="0 0 28 20">
            <defs>
                <path
                    d="M0 4.667V1.332A1.33 1.33 0 011.333 0h4c.737 0 1.334.588 1.334 1.332v3.335c0 3.333-3.334 4.666-3.334 4.666S0 8 0 4.667z"
                    id="FK__c"
                />
                <path
                    d="M0 4.667V1.332A1.33 1.33 0 011.333 0h4c.737 0 1.334.588 1.334 1.332v3.335c0 3.333-3.334 4.666-3.334 4.666S0 8 0 4.667z"
                    id="FK__e"
                />
                <rect id="FK__a" x={0} y={0} width={28} height={20} rx={2} />
            </defs>
            <g fill="none" fillRule="evenodd">
                <mask id="FK__b" fill="#fff">
                    <use xlinkHref="#FK__a" />
                </mask>
                <use fill="#FFF" xlinkHref="#FK__a" />
                <path fill="#07319C" mask="url(#FK__b)" d="M0 0h28v20H0z" />
                <g mask="url(#FK__b)">
                    <g transform="translate(17.333 5.333)">
                        <mask id="FK__d" fill="#fff">
                            <use xlinkHref="#FK__c" />
                        </mask>
                        <use fill="#0072C4" xlinkHref="#FK__c" />
                        <path
                            d="M1.536 3.934c-.683.69.656.603.656.603l.953-.305s.429.051.718.139c.192.057.725.296.725.296s1.127-.225.731-.733c-.396-.507-3.1-.69-3.783 0z"
                            fill="#005121"
                            mask="url(#FK__d)"
                        />
                        <g mask="url(#FK__d)">
                            <path
                                d="M4.377 3.218c.027-.007.091-.005.115.024.037.045.114.03.152.074.037.044.08.084.08.147 0 .062-.007.217-.006.251.002.053.011.06.065.06.065-.002.155-.007.158-.124.002-.08-.079-.132-.102-.42.035-.03.066-.058.055-.098-.012-.04.067-.06.059-.122-.008-.06.078-.097.043-.165-.035-.067.043-.07.012-.125-.032-.054.051-.101.016-.148-.036-.048.047-.091.004-.149-.044-.057.023-.091-.02-.135.027-.044.004-.169-.083-.24-.086-.07-.209-.108-.28-.135-.132-.05-.378-.027-.55-.006a3.88 3.88 0 01-.596.027 2.012 2.012 0 00-.514.003.214.214 0 01-.17-.044c-.03-.028-.048-.025-.076-.024-.027.002-.043-.006-.057-.04-.024-.06-.079-.019-.104-.093-.017-.05-.107-.007-.134-.049-.028-.042-.061-.047-.136-.042-.004-.025-.045-.044-.083-.037.006-.042-.035-.076-.104-.075.008-.052-.089-.092-.138-.06-.031-.04-.095-.03-.11 0-.034-.04-.14-.027-.166.015-.045-.025-.133.037-.126.135.002.027.004.055-.041.064-.085.017-.134.111-.207.125-.073.014-.146.037-.16.078-.013.04.012.082-.015.103-.028.02.018.038.031.049.014.01.036.027.04.05.005.034.06.044.118.007.024-.015.065.03.132-.002s.162-.015.146.037c-.008.026.01.053.031.078.022.025.054.102.036.145-.028.064.027.1.013.157-.013.058.008.11-.021.188-.03.077-.03.174.013.202.062.039.025.116.077.149.043.027.018.093.099.113.08.02.033.074.118.086.085.012.114.072.203.059.065-.01.1.006.137.02.008.055-.01.253-.013.304-.004.045-.028.116-.028.16 0 .027.055.034.118.034s.091-.025.075-.096a1.932 1.932 0 01-.015-.352c.054.026.106.063.104.104-.004.066-.003.184-.014.245-.008.043.004.113.008.158.004.017.11.015.154 0 .043-.015.043-.055.039-.24-.002-.09-.099-.184.024-.23a.413.413 0 00.173-.119c.031-.047.1-.029.15-.005.049.024.127.06.177.044.063-.02.13.03.185 0 .055-.03.126.022.171-.015.045-.037.124-.002.158-.037.033-.036.171.02.22-.027.05-.048.116.013.162-.022a.057.057 0 01.041-.01c-.002.08-.017.206-.02.246-.003.045-.027.116-.027.16 0 .027.055.034.118.034s.09-.025.075-.096c-.016-.07.007-.245.01-.353"
                                fill="#A3A3A3"
                            />
                            <path
                                d="M1.19 1.987c.026-.02.002-.06.015-.098.013-.038.083-.06.153-.073.07-.013.117-.102.198-.118.043-.009.041-.035.04-.06-.007-.093.077-.152.12-.128.025-.04.127-.051.159-.015.015-.028.075-.036.105 0 .047-.03.14.008.132.058.066-.002.106.03.1.07.036-.006.076.011.08.035-.007.04.083.05.041.075-.036.022-.07.013-.112-.017-.041-.03-.179-.004-.199.012-.02.015-.041.022-.057.01-.016-.012-.053-.03-.07-.029-.018.002-.056.002-.078-.034-.021-.035-.076-.04-.086-.027-.01.014.022.063.053.081.032.019.016.054.053.075.025.013.002.059-.012.086-.013.027-.066.018-.07-.002-.004-.02-.018-.034-.05-.003-.031.03-.098.022-.114.013-.016-.008-.059-.023-.088-.015-.03.008.013.022.017.034.004.012-.047.017-.077.017s-.039.016-.021.02a.268.268 0 00.114-.007c.028-.013.112 0 .12.025.008.026-.049.036-.083.032-.05-.005-.122.022-.157.03-.036.01-.13-.013-.168-.003-.037.01-.074-.03-.058-.044"
                                fill="#A3A3A3"
                            />
                            <path
                                d="M1.823 2.194c-.035.013-.023.053.008.07a.281.281 0 00.148.016c.045-.009.055.005.026.022-.03.016.045.02.039.047-.006.027.028.022.06.02a.31.31 0 00.107-.04c.036-.019.061-.006.028.027a.392.392 0 01-.234.067c-.089-.005-.136.015-.117.044.02.029.115.034.164.018.05-.015.041.012.004.03a.3.3 0 01-.136.02c-.045-.002-.085.037-.026.059.06.021.138.008.168.027.03.018.12-.01.122.022.002.032-.026.043-.079.04-.053-.003-.037.02.002.034a.386.386 0 00.132.008c.033-.003.024.03-.01.042a.804.804 0 01-.195.027c-.053-.001-.027.033.042.033.21 0 .281-.1.334-.17.026-.033.077-.052.089-.031.012.02.014.025-.01.042s-.018.027.026.029a.57.57 0 00.144-.02c.037-.01.147.053.057.055-.16.003-.357.06-.422.084-.065.024-.173.068-.24.066-.05-.001-.07.017-.05.039.02.022.083.022.119.012.035-.01.043 0 .02.02-.024.02-.083.029-.125.036-.04.006-.061.033-.03.043.062.02.007.04.05.05.043.01-.004.042.043.052.048.01.075.005.11-.019.036-.023.056-.037.093-.034.038.004.063-.013.085-.038.022-.026.095-.071.118-.05.024.023.073-.018.083.004.01.022.051.008.061.039.01.034.057.04.089.029a.086.086 0 00.057-.083c0-.042.011-.06.023-.014s.055.06.077.037c.022-.022.03-.097.014-.133-.016-.035-.018-.081-.002-.09.016-.008.053.07.069.104.016.033.057.023.059-.01.002-.034.04-.051.067-.026.027.025.012.11.02.15.007.04.084-.01.092.004.008.013.037.017.05-.012.011-.029.039-.054.054-.037.016.017.04.045.05.077.01.033.045.05.067.016a.24.24 0 00.03-.146c-.009-.045.005-.074.025-.05.02.023.017.088.02.14.001.052.066.047.066-.03 0-.036.02-.043.026-.022.006.02.006.054.012.069.014.037.065.017.07-.009a.512.512 0 00-.015-.157c-.012-.04.012-.069.032-.047.02.022.023.08.027.144.004.064.045.067.067.049.022-.02.022-.073.012-.112-.01-.039.022-.039.035-.015.014.024.038.008.034-.01-.004-.019.015-.036.035-.01.02.025.014.082.004.128s.05.04.077.002c.027-.04.014-.145-.01-.18-.024-.033-.021-.077-.008-.116.014-.039.04-.04.042-.023a.13.13 0 00.035.067c.022.022.034.026.037-.008.004-.034.024-.026.032 0 .008.025.022.045.041.023.02-.022.046-.005.03.03a.12.12 0 00-.004.097c.012.034.053.029.057-.01.008-.081.02-.027.03.008.01.036.039.034.045.014.006-.02.012-.025.012-.004 0 .022.01.04.035.04.026 0 .02-.043.032-.07.011-.027.033.01.063.073.03.062.05.003.12.145.028.058.069.008.067-.012-.002-.02.004-.034.037-.034.034 0 .061-.007.05-.029-.012-.021-.005-.062-.006-.108-.002-.045.003-.07.01-.045.005.025.025.06.056.08.032.018.054-.033.028-.065a.309.309 0 01-.06-.172c.002-.047.024-.032.024.002 0 .033.02.094.05.108.03.013.041-.05.027-.081-.013-.033-.021-.076.008-.085.03-.008-.008-.044-.033-.07-.026-.024-.042-.05.004-.048.045.002.008-.027-.014-.046-.022-.018-.06-.055 0-.05.059.005.04-.025.016-.042s-.038-.05.004-.048c.041.002.066-.018.063-.033-.015-.059-.115-.127-.176-.18a.556.556 0 00-.212-.112c-.054-.009-.055.025-.042.045.014.02.042.034.046.014.003-.02.045.001.065.028.02.027.086.061.128.091.041.03-.056.016-.103-.025-.027-.023-.024.005.012.037.035.032-.01.046-.047.019a6.824 6.824 0 01-.195-.152c-.061-.049-.071-.037-.073-.005-.002.032.02.054.059.08.04.028.089.07.126.099.037.028.006.047-.018.027-.023-.02-.104-.076-.151-.115-.048-.039-.09-.057-.12-.052-.03.005-.028.034.007.064.036.03.08.088.08.121 0 .034-.032.058-.048-.003-.016-.06-.09-.132-.146-.186a.19.19 0 00-.151-.06c-.042.003-.04.043-.04.076 0 .032-.027.013-.03-.01-.001-.024-.033-.044-.05-.043-.018.002-.012.05-.018.073-.006.022-.034.042-.034-.009 0-.05-.065-.076-.092-.077-.028-.002-.054.008-.04.03.014.022.008.081-.002.115s-.04-.025-.045-.088c-.006-.062-.098-.106-.163-.088-.065.019-.016.06-.028.098-.012.039-.03.004-.036-.037-.005-.04-.037-.066-.08-.056-.044.01-.073.03-.071.058a.288.288 0 01-.008.094c-.01.044-.027.022-.026-.006a.303.303 0 00-.017-.103c-.01-.027-.026-.002-.022.032a.484.484 0 01-.022.158c-.015.048-.039.05-.027-.015a.33.33 0 00-.047-.202c-.022-.032-.07-.043-.07.001s.014.076.05.108c.035.032.008.112-.028.154-.035.042-.033-.019-.021-.064.011-.046-.053-.061-.08-.07-.025-.008.028-.053.04-.114.006-.03-.002-.05-.025-.051-.024-.002-.087.056-.115.098.008-.044 0-.083-.023-.083-.024 0-.05.043-.067.073-.018.03-.036.013-.018-.019s.045-.118.01-.136c-.035-.019-.067.057-.104.043-.022-.007.007-.055.02-.077.011-.022-.013-.039-.066.001a.302.302 0 00-.09.147c-.014.04-.109.107-.16.142-.051.036-.073.022-.047.007.026-.015.077-.062.102-.081.026-.019.014-.03-.035.002a.746.746 0 01-.23.111c-.054.012-.062.002-.008-.013a.684.684 0 00.204-.122c.019-.021-.03-.003-.053.002s-.043-.002.004-.019a.895.895 0 00.229-.2c.031-.048.004-.067-.016-.065-.02.002-.047.014-.041-.007.005-.02-.008-.047-.034-.038-.026.008-.024.057-.033.084-.01.027-.065.062-.1.062a.226.226 0 00-.123.032c-.037.026-.055.002-.037-.018.017-.02.057-.026.096-.027.04-.002.083-.007.116-.039.034-.032.036-.057.01-.06a.202.202 0 01-.083-.041c-.07-.06-.198.023-.248.072a1.975 1.975 0 01-.151.125c-.03.02-.018.05.031.01.05-.038.065-.011.02.017-.046.029-.079.071-.063.086s.077-.003.11-.022c.034-.018.05.027-.033.043-.056.01-.075.03-.032.032a.3.3 0 00.132-.036c.047-.023.085-.01.045.014a.452.452 0 01-.169.055c-.036 0 .006.046-.03.06z"
                                fill="#FFF"
                            />
                            <path
                                d="M2.052 1.816c.047-.05.089-.07.132-.035.04.032.043.046-.006.035-.05-.01-.083 0-.112.032-.03.032-.063.02-.014-.032M1.272 1.942c.036-.036.093-.036.118-.075.026-.039.053-.025.022.013-.032.037-.093.044-.118.07-.026.027-.04.01-.022-.008M1.493 1.806a.186.186 0 00.088-.059c.026-.03.081-.04.114-.005a.2.2 0 00.07.055c.017.007.017.03-.01.037-.028.007-.065.013-.085.004a.127.127 0 00-.073-.01c-.024.005-.033-.006-.014-.015.02-.009.044-.035.055-.046.012-.01.044-.002.026.009-.018.01-.01.033.008.042.018.01.053.01.069-.007a.522.522 0 00-.079-.062c-.016-.009-.03-.012-.05.01-.019.02-.066.072-.111.07-.046-.002-.034-.02-.008-.023M2.737 2.124a.182.182 0 00-.035.08c-.002.025.02.042.023.011.003-.03.006-.05.03-.072.026-.023.002-.046-.018-.019M2.496 2.123a.242.242 0 00.072-.045c.017-.017.027-.006.01.014a.206.206 0 01-.072.047c-.018.006-.032-.007-.01-.016M2.527 2.222a.86.86 0 01-.174.13c-.033.015-.021.037.016.026a.441.441 0 01-.128.067c-.04.01-.047.04.012.022a.549.549 0 00.163-.09c.022-.021-.006-.032.028-.055.033-.024.095-.067.104-.085.014-.027-.002-.039-.021-.015M2.404 2.497a.455.455 0 00.144-.135c.014-.025.041-.022.02.017a.59.59 0 01-.13.127c-.028.018-.079.013-.034-.009M3.3 2.097a.244.244 0 00-.01.107c.005.027.028.047.024.006-.004-.04-.004-.08.01-.092.014-.012-.004-.061-.024-.02M3.54 2.197c.02.018.03.105.028.137-.002.032.032.032.03-.014a.34.34 0 00-.024-.133c-.018-.03-.06-.015-.033.01M3.751 2.253a.233.233 0 01.028.094c0 .03.026.017.028-.018a.159.159 0 00-.018-.09c-.014-.024-.055-.019-.038.014M3.881 2.226c-.01-.027-.027-.051-.04-.048-.01.004-.003.029.013.055.015.027.04.023.027-.007M3.058 2.415c-.006.07-.043.133-.088.155-.046.022-.038.057.017.022a.257.257 0 00.109-.15c.011-.054-.034-.075-.038-.027M2.96 2.383c-.024.023-.038.074-.038.113 0 .038.016.01.02-.012s.012-.053.032-.063c.02-.01.01-.062-.014-.038M4.665 2.431c.02.035.051.09.061.122.01.032-.014.04-.021.012a.678.678 0 00-.06-.115c-.013-.022-.004-.057.02-.019"
                                fill="#A3A3A3"
                            />
                        </g>
                        <path
                            d="M-1.333 4s2.268.674 2.65.674c.108 0 1.577-.337 2.017-.337.165 0 1.686.23 2.083.337C5.814 4.78 8.002 4 8.002 4M-1.333 5.333s2.268.674 2.65.674c.108 0 1.577-.337 2.017-.337.165 0 1.686.231 2.083.337.397.106 2.585-.674 2.585-.674"
                            stroke="#FFF"
                            strokeWidth={0.667}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            mask="url(#FK__d)"
                        />
                        <path
                            d="M-1.333 8s2.268.674 2.65.674c.108 0 .984-.545 2.017-.545 1.034 0 1.686.439 2.083.545C5.814 8.78 8.002 8 8.002 8l7.177 1.148"
                            stroke="#FFF"
                            strokeWidth={1.333}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            mask="url(#FK__d)"
                        />
                    </g>
                    <path
                        stroke="#FFF"
                        strokeWidth={0.667}
                        d="M20.667 14.303a6.195 6.195 0 001.444-.967c.976-.88 1.556-1.981 1.556-3.336V6.666c0-.557-.445-1-1-1h-4c-.556 0-1 .446-1 1V10c0 1.355.58 2.457 1.556 3.336a6.195 6.195 0 001.444.967z"
                    />
                </g>
                <path
                    d="M4.333 4.153L-.9-.333H.667l.193.062L5.44 3h1.131l5.762-3.601v.934c0 .296-.17.627-.417.803l-4.25 3.036V5.18l4.3 3.685c.377.323.185.802-.3.802-.257 0-.588-.107-.804-.261L6.56 6.333H5.429L-.333 9.935v-1.44l4.666-3.333V4.153z"
                    stroke="#FFF"
                    strokeWidth={0.667}
                    fill="#DB1E36"
                    mask="url(#FK__b)"
                />
                <path
                    d="M0 3.333V6h4.667v3.34c0 .364.306.66.673.66h1.32a.67.67 0 00.673-.66V6h4.658a.677.677 0 00.676-.673v-1.32a.674.674 0 00-.676-.674H7.333V0H4.667v3.333H0z"
                    fill="#FFF"
                    mask="url(#FK__b)"
                />
                <path fill="#DB1E36" mask="url(#FK__b)" d="M0 4h5.333V0h1.334v4H12v1.333H6.667v4H5.333v-4H0z" />
            </g>
        </svg>
    );
};

FK.defaultProps = {};
export default FK;
