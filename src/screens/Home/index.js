import React, { Component } from 'react';
import { Text, View, FlatList, Image, Platform, TouchableOpacity, Dimensions } from 'react-native';
import { Container, Body, Content, Header, Footer, Button } from 'native-base';
import Config from '../../config';
import Localization from '../../localization';
import HeaderBase from '../../components/HeaderBase';
import Loading from '../../components/Loading';
import Images from '../../assets/images';
import Axios from 'axios';
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import Style from './style';

const { width, height} = Dimensions.get("window")

class index extends Component {


    render() {
        return (
            <Container>
                <Header style={Config.Styles.header}>
                    <HeaderBase
                        title={Localization.homeScreen.titleHeader}
                    />
                </Header>
                <Body>
                    <Content>
                        <View style={{ width, height:  300 }}>
                        <MapView
                            provider={PROVIDER_GOOGLE}
                            style={{ flex: 1}}
                            initialRegion={{
                            latitude: 37.78825,
                            longitude: -122.4324,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                            }}
                        >
                            <MapView.Marker
                                coordinate={{latitude: 37.78825,
                                longitude: -122.4324}}
                                title={"title"}
                                description={"description"}
                            />
                        </MapView>
                        </View>
                    </Content>
                </Body>
            </Container>
        );
    }
}

export default index;