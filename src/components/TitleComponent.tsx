import React from 'react';
import { Text } from 'react-native';
import { globalStyles } from '../theme/appTheme';

interface Props {
    title: string;
}

export const TitleComponent = ({ title }: Props) => {
    return <Text style={globalStyles.title}>{title}</Text>;
};