import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const colors = {
    primary: '#1b3f14',
    secondary: '#1796ea',
    campFondo: '#9ab48e',
    textPrimary: '#080d17',
    danger: '#E74C3C',
    white: '#FFFFFF',
};

export const fontSize = {
    small: 14,
    medium: 20,
    large: 20,
    xlarge: 28,
};

export const spacing = {
    sm: 10,
    md: 15,
    lg: 20,
};

export const borderRadius = {
    medium: 50,
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 5,

        justifyContent: 'center',
    },

    centerContainer: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',


    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        color: colors.textPrimary,
        textAlign: 'center',
        marginVertical: spacing.lg,
    },

    campos: {
        backgroundColor: colors.campFondo,
        padding: spacing.lg,
        borderRadius: 20,
        width: width * 0.9,
        alignSelf: 'center',
        elevation: 5,
    },
});
    export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        padding: 20,
        borderRadius: 20,
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 20,
    },
    input: {
        borderWidth: 3,
        borderColor: colors.primary,
        borderRadius: 17,
        padding: 20,
        marginVertical: 9,
        
    },

});
