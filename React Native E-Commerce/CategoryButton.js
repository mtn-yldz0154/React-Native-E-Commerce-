import React from 'react';
import { TouchableOpacity, View, Text,Image } from 'react-native';
import { appStyles } from './App.styles';


const CategoryButton = ({ categoryName, navigation,image }) => {
    return (
        <TouchableOpacity
            style={appStyles.SingleCategoryContainer}
            onPress={() => navigation.navigate(categoryName)}
        >
            <View style={appStyles.CategoryButtonText}>
                <Text style={{ marginLeft: 5 }}>{categoryName}</Text>
            </View>

            <View style={appStyles.CategoryButtonImageContainer}>
                <Image style={appStyles.CategoryButtonImage} source={{ uri: image }} />
                
            </View>
            
        </TouchableOpacity>
    );
};

export default CategoryButton;
