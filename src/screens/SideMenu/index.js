import React, { Component } from 'react';
import { Text, View, FlatList, Image, Platform, TouchableOpacity } from 'react-native';

class index extends Component {


    render() {
        return (
            <View style={{ paddingTop: 20}}>
                <TouchableOpacity 
                    style={{ height: 50, backgroundColor: '#CACACA', justifyContent: 'center', alignItems: 'center'}}
                    onPress={() => {
                        console.log('Navigation:', this.props.navigation);
                        this.props.navigation.navigate('Home');
                        this.props.navigation.closeDrawer();
                    }}
                    >
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={{ height: 50, backgroundColor: '#CACACA', justifyContent: 'center', alignItems: 'center', marginTop: 10}}
                    onPress={() => this.props.navigation.navigate('Detail')}
                    >
                    <Text style={{fontWeight: 'bold', fontSize: 20}}>Detail</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default index;