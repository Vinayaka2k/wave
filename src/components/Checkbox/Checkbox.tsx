import React, { DetailedHTMLProps, FC, InputHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import { MarginProps, ResponsiveValue } from 'styled-system';

import { ClassNameProps, extractClassNameProps, extractWrapperMarginProps } from '../../utils/extractProps';
import { Text } from '../Text/Text';

import { Checkmark } from './components/Checkmark';
import { LabelWrapper } from './components/LabelWrapper';
import { TapArea } from './components/TapArea';

interface CheckboxProps
    extends Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'ref'>,
        ClassNameProps,
        MarginProps {
    /**
     * Provide a label for the input which will be shown next to the checkbox
     */
    label?: ReactNode;
    /**
     * Add styles to show the checkbox has errors
     */
    error?: boolean;
    /**
     * Align label text relatively to the checkbox
     */
    textVerticalAlign?: ResponsiveValue<'top' | 'center'>;
}

const WithTapAreaWrapper = styled.div<Pick<CheckboxProps, 'textVerticalAlign'>>`
    position: relative;
    display: inline-flex;
    align-items: center;

    height: 1rem;
    margin: 0 0.5rem 0 0;
    ${({ textVerticalAlign }) => (textVerticalAlign == 'top' ? 'margin-top: 0.1875rem' : null)}
`;

const Checkbox: FC<CheckboxProps> = props => {
    const { classNameProps, restProps: withoutClassName } = extractClassNameProps(props);
    const { marginProps, restProps } = extractWrapperMarginProps(withoutClassName);

    const { disabled, error, label, textVerticalAlign = 'center', ...rest } = restProps;
    let dynamicLabel: ReactNode = label;

    if (typeof label === 'string') {
        dynamicLabel = <Text>{label}</Text>;
    }

    return (
        <LabelWrapper
            disabled={disabled}
            error={error}
            textVerticalAlign={textVerticalAlign}
            {...marginProps}
            {...classNameProps}
        >
            <WithTapAreaWrapper textVerticalAlign={textVerticalAlign}>
                <TapArea />
                <Checkmark type="checkbox" disabled={disabled} error={error} {...rest} />
            </WithTapAreaWrapper>
            {dynamicLabel}
        </LabelWrapper>
    );
};

export { Checkbox, CheckboxProps };
