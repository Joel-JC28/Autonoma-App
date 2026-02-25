import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { InputComponent } from '../components/InputComponent';
import { ButtonComponent } from '../components/ButtonComponent';
import { TitleComponent } from '../components/TitleComponent';
import { globalStyles, colors, spacing, fontSize, styles } from '../theme/appTheme';

export const FormularioScreens = () => {
    const [numero1, setNumero1] = useState('');
    const [numero2, setNumero2] = useState('');
    const [resultado, setResultado] = useState('');

    const handleDivision = () => {
        const num1 = Number(numero1);
        const num2 = Number(numero2);

        if (num1 === 0 && num2 === 0) {
            setResultado("INDETERMINACIÓN");
            return;
        }
        
        if (num2 === 0) {
            setResultado("NO EXISTE DIVISIÓN PARA CERO");
            return;
        }

        setResultado("Resultado: ${num1 / num2}");
    };

    return (
        <View style={globalStyles.container}>
            <TitleComponent title="División" />

            <View style={globalStyles.campos}>
                <InputComponent
                    placeholder="Anote el primer número"
                    keyboardType="numeric"
                    value={numero1}
                    onChangeText={setNumero1}
                />

                <InputComponent
                    placeholder="Anote  el segundo número"
                    keyboardType="numeric"
                    value={numero2}
                    onChangeText={setNumero2}
                />

                <ButtonComponent title="Dividir" onPress={handleDivision} />

                {resultado !== '' && (
                    <Text
                        style={{
                            marginTop: spacing.lg,
                            fontSize: fontSize.large,
                            fontWeight: 'bold',
                            color: colors.primary,
                            textAlign: 'center',
                        }}
                    >
                        {resultado}
                    </Text>
                )}
            </View>
        </View>
    );
};