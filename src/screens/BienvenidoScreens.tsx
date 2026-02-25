import React from 'react';
import { View, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/StackNavigator';
import { TitleComponent } from '../components/TitleComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { globalStyles } from '../theme/appTheme';

type Props = NativeStackScreenProps<RootStackParamList, 'Bienvenido'>;

export const BienvenidoScreens = ({ navigation }: Props) => {
    return (
        <View style={globalStyles.centerContainer}>
            <TitleComponent title="Bienvenido" />

            <Image
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/1875/1875043.png',
                }}
                style={{ width: 150, height: 150 }}
            />

            <ButtonComponent 
                title="Acceder"
                onPress={() => navigation.navigate('Formulario')}
            />
        </View>
    );
};