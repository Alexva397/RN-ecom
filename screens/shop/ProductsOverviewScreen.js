import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';


const ProductsOverviewScreen = (props) => {
    const products = useSelector(state => state.products.availableProducts);
    
    
    
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={data => <Text>{data.item.title}</Text>}
        />
    );
};

export default ProductsOverviewScreen;

const styles = StyleSheet.create({

});