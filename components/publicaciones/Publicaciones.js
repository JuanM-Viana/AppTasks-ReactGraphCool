import React, { Component } from 'react'
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { List, ListItem, Body, Right, Icon } from 'native-base';
import {graphql } from 'react-apollo';
import gql from 'graphql-tag';

 class Publicaciones extends Component {
    
    render() {
        //console.log(this.props.data);
        const {loading, allPublicacions, navigation } = this.props;
        if(loading) return <ActivityIndicator size="large"/>;
        return (   
            <View>
                <List>
                    <FlatList
                        data = {allPublicacions}
                        renderItem = {({ item }) => (
                        <ListItem onPress={()=> navigation.navigate("Publicacion", {
                            id: item.id,
                            titulo : item.titulo
                        })}>
                            <Body>
                                <Text>{item.titulo}</Text>
                            </Body>
                            <Right>
                                <Icon name="arrow-forward" />
                            </Right>
                        </ListItem>)}
                        keyExtractor = {item => item.id}
                    />
                </List>
            </View>
        );
    }
}

const publicacionesQuery =gql `
    query publicacionesQuery {
        allPublicacions(orderBy: createdAt_DESC) {
            id
            titulo
        }
    }
`;

export default graphql(publicacionesQuery, {
    props: ({ data }) => ({...data})
})(Publicaciones);