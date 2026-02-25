import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props {
    title: string;
    onPress: () => void;
}

export const ButtonComponent = ({ title, onPress }: Props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

