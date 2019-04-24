import React, { Component } from 'react';
import { Text, View, FlatList, Image, Platform, TouchableOpacity } from 'react-native';
import { Container, Body, Content, Header, Footer, Button } from 'native-base';
import Config from '../../config';
import Localization from '../../localization';
import HeaderBase from '../../components/HeaderBase';
import Loading from '../../components/Loading';
import Images from '../../assets/images';
import Axios from 'axios';
import Style from './style';

class index extends Component {


    render() {
        return (
            <Container>
                <Header style={Config.Styles.header}>
                    <HeaderBase
                        title={'Detail'}
                        navigation={this.props.navigation}
                    />
                </Header>
                <Body>
                    <Content>
                        <View>
                            <Text>Detail</Text>
                            <TouchableOpacity onPress={() => {
                                console.log('Detail navigation:', this.props.navigation)
                            }}>
                                <Text>Back to Home</Text>
                            </TouchableOpacity>
                        </View>
                    </Content>
                </Body>
            </Container>
        );
    }
}

export default index;