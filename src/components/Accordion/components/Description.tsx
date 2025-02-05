import React from 'react';
import { MarginProps } from 'styled-system';
import { Text } from '../../Text/Text';

interface Props extends MarginProps {
    description?: string;
}

export const Description = ({ description, ...rest }: Props) => (
    <Text
        as="p"
        fontSize="small"
        weak
        style={{ textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap' }}
        {...rest}
    >
        {description}
    </Text>
);
