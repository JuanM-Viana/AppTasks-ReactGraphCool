import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native';
import {graphql } from 'react-apollo';
import gql from 'graphql-tag';

 class Publicaciones extends Component {
    
    render() {
        //console.log(this.props.data);
        const {loading, allPublicacions, navigation } = this.props;
        if(loading) return null;
        return (   
            <View>
                <FlatList
                    data = {allPublicacions}
                    renderItem = {({ item }) => (
                    <Text onPress={()=> navigation.navigate("Publicacion", {
                        id: item.id
                    })}>
                         {item.titulo}
                    </Text>)}
                    keyExtractor = {item => item.id}
                />
            </View>
        );
    }
}

const publicacionesQuery =gql `
    {
        allPublicacions {
            id
            titulo
        }
    }
`;

export default graphql(publicacionesQuery, {
    props: ({ data }) => ({...data})
})(Publicaciones);