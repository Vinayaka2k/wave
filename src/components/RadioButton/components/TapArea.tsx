import styled from 'styled-components';
import { Colors } from '../../../essentials';

const TapArea = styled.div`
    position: absolute;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background-color: transparent;
    top: -0.375rem;
    left: -0.375rem;
    transition: background-color 125ms;

    &:active {
        background-color: ${Colors.AUTHENTIC_BLUE_50};
    }
`;

export { TapArea };
