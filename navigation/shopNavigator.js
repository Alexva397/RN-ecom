import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform } from "react-native";
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailsScreen from "../screens/shop/ProductDetailsScreen";
import colors from "../constants/colors";

const ProductsNavigator = createStackNavigator({
    ProductsOverview: {
        screen: ProductsOverviewScreen,
    },
    ProductDetail: {
        screen: ProductDetailsScreen,
    },

}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? colors.primary : 'white',
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold',
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
    }
});

export default createAppContainer(ProductsNavigator);