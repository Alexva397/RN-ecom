import React from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import colors from '../../constants/colors';

const ProductDetailsScreen = (props) => {

    const productId = props.navigation.getParam('productId');

    const selectedProduct = useSelector(state => state.products.availableProducts.find(product => product.id === productId));

    return (
        <ScrollView>
            <Image
                source={{ uri: selectedProduct.imageUrl }}
                style={styles.image}
            />
            <View style={styles.button}>
                <Button title='Add to Cart' onPress={() => { }} color={colors.primary} />
            </View>
            <View>
                <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
                <Text style={styles.description}>{selectedProduct.description}</Text>
            </View>
        </ScrollView>
    );
};

ProductDetailsScreen.navigationOptions = data => {
    return {
        headerTitle: data.navigation.getParam('productTitle')
    };
}

export default ProductDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 15,
    },
    description: {
        fontFamily: 'open-sans',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: '5%'
    },
    button: {
        marginVertical: 10,
        alignItems: 'center',
    }
});
