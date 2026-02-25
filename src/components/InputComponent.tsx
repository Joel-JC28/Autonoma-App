import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    placeholder: string;
    value: string;
    keyboardType?: 'default' | 'numeric';
    onChangeText: (value: string) => void;
}

export const InputComponent = ({
    placeholder,
    value,
    keyboardType = 'default',
    onChangeText,
}: Props) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChangeText}
        />
    );
};

